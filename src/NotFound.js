import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="error-page">
            <h2>Error...</h2>
            <p>This page does not exist</p>
            <Link to='/'>Go back to home page</Link>
        </div>
    );
}
 
export default NotFound;