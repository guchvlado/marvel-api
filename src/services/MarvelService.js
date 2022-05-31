import {useHttp} from '../hooks/http.hook';

const useMarvelService = () => {
    const _apiBase = "https://gateway.marvel.com:443/v1/public/";
    const _apiKey = "apikey=e21932388ea3587744dfff8b024ca41b";
    const _baseLimit = 9;
    const _baseOffset = 123;

    const {loading, error, request, clearError} = useHttp();

    const getAllCharacters = async (limit = _baseLimit, offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=${limit}&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getAllComics = async (limit = 8, offset = 12) => {
        const res = await request(`${_apiBase}comics?limit=${limit}&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComic);
    }

    const _transformCharacter = (character) => {
        return {
            id: character.id,
            name: character.name,
            description: character.description ? character.description.slice(0, 200) + '...' : "There is no description for this character",
            thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
            homepage: character.urls[0].url,
            wiki: character.urls[1].url,
            comics: character.comics.items
        }
    }
    
    const _transformComic = (comic) => {
        return {
            id: comic.id,
            title: comic.title,
            price: comic.prices[0].price ? `${comic.prices[0].price}$` : "not available",
            thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
            description: comic.description || 'There is no description',
            pageCount: comic.pageCount ? `${comic.pageCount} p.` : 'No information about the number of pages',
            language: comic.textObjects.language || 'en-us',
        }
    }

    return {loading, error, getAllCharacters, getCharacter, clearError, getAllComics};
}

export default useMarvelService;