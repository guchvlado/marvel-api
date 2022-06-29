import {useState} from 'react'
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './Form.scss';

function Form() {
  const [char, setChar] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const {loading, error, getCharacterByName, clearError} = useMarvelService();

  const onCharLoaded = (char) => {
    setChar(char);
  }

  const onSubmit = data => {
    clearError();
    getCharacterByName(data.name)
      .then(onCharLoaded)
  };

  const errorMessage = error ? <ErrorMessage/> : null;

  const results = !char ? null : char.length > 0 ?
    <div className="Form__results">
        <div className='Form__message Form__message_found'>There is! Visit {char[0].name} page?</div>
        <Link to={`/characters/${char[0].id}`} className="button">To page</Link>
    </div>
    :
    <div className='Form__results'>
      <div className='Form__message'>The character was not found. Check the name and try again</div>
    </div>;

  return (
    <form className='Form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='name' className="Form__name">Or find a character by name:</label>
        <div className="Form__content">
            <input className='Form__input' placeholder='Enter name' {...register('name', {required: true})} />
            <button className="button" disabled={loading}>FIND</button>
        </div>
        {errors.name && <div className='Form__results'><div className='Form__message'>This field is required</div></div>}
        {errorMessage}
        {results}
    </form>
  )
}

export default Form