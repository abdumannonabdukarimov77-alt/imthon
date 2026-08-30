import { Link } from "react-router-dom"

function Payment(){
    return(
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="paymen">
            <h1>Payment Success</h1>
            <div>
                <img className="payment" src="/icons/Vector.png" alt="" />
            </div>
            <div className="d-flex flex-column gap-3">
                <Link to='/tisket' >
                    <button className="btnt">View Ticket</button>
                </Link>
                <Link to='/logaut'>
                    <button className="btente">Back to Homepage</button>
                </Link>
            </div>
        </div>
        </div>
    )
}
export default Payment