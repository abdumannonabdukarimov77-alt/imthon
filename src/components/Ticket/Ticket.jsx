import { Link } from "react-router-dom"

function Send(){
    return(
        <div className="container_ text-center">
            <div className="text-start">
                <h1>
                    Ticket Detail
                </h1>
            </div>
                <div className="d-flex justify-content-center mt-5 text-start">
                <div className="cart">
            <div>
                <p>Date</p>
                <h4>Mon, 23 Oct 2023</h4>
            </div>
            <div>
                <p>Movie Title</p>
                <h4>SPIDERMAN NO WAY HOME</h4>
            </div>
            <div className="d-flex justify-content-between">
                <div>
                    <p>Tikot(1)</p>
                    <h4>C8, C9, C10</h4>
                </div>
                <div>
                    <p>Hours</p>
                    <h4>14:40</h4>
                </div>
            </div>
            <button className="btnt">Download Ticket</button>
        </div>
            </div>
            <Link to='/logaut' >
                <button className="bbb">Back to Homepage</button> 
            </Link>
        </div>
    )
}

export default Send