import "../nav.css";
import { Link } from "react-router-dom"; 


function Nav(){
    return(
        <div className="btn-flex">
            <Link to='/login' ><button className="btns login">Login</button></Link>
            <Link to='/registr' ><button className="btns registr">Register</button></Link>
        </div>
    )
}

export default Nav; 