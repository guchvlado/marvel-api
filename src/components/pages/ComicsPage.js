import AppBanner from '../appBanner/AppBanner';
import ComicsList from '../comicsList/ComicsList';

import ErrorBoundery from '../errorBoundery/ErrorBoundery';

const ComicsPage = () => {

    return (
        <>
            <AppBanner/>
            <ErrorBoundery>
                <ComicsList/>
            </ErrorBoundery>
        </>
    )
}

export default ComicsPage;