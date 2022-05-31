import { Link } from 'react-router-dom';


import './ComicsItem.scss';

function ComicsItem({title, price, thumbnail, id}) {

  return (
    <Link to={`/comics/${id}`} className='ComicsItem'>
        <img src={thumbnail} alt="poster" />
        <h4 className="ComicsItem__name">{title}</h4>
        <div className="ComicsItem__price">{price}</div>
    </Link>
  )
}

export default ComicsItem