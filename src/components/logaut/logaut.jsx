
import { Link } from "react-router-dom";

    function Logaut(){
    return(
        <div className="d-flex justify-content-between">
            <img className="logo" src="/icons/logo.png" alt="logo" />
            <div className="btn-flex">
            <Link to='/tciked' ><button className="tick">My Ticket</button></Link>
            <Link to='/login' ><button className="logaut btns">Logout</button></Link>
        </div>
        </div>
    )
}

export default Logaut