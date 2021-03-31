import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <br></br>
            <p>Page cannot be found</p>
            <br></br>
            <Link to="/">Come back Home</Link>
        </div>
     );
}
 
export default NotFound;