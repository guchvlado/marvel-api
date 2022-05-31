import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from 'react-router-dom';

const Page404 = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <ErrorMessage/>
            <h2>Page doesn't exist</h2>
            <Link to="/"
            style={{marginTop: '20px', textDecoration: 'underline', fontSize: '20px', color: '#9F0013'}}
            >Back to main page</Link>
        </div>
    )
}

export default Page404;