import { useState } from "react"
import { Link } from "react-router-dom"

function Detal(){
    let [num, setNum] = useState(1)
    return(
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="mainn text-light">
            <h1>Booking Detail</h1>
            <h2>Schedule</h2>
            <div>
                <p>Movie Title</p>
                <h2>SPIDERMAN NO WAY HOME</h2>
            </div>
            <div>
                <p>Date</p>
                <h2>Mon, 23 Oct 2023</h2>
            </div>
            <div className="d-flex justify-content-between ">
            <div>
                <p>Tiket ({num})</p>
                <h2>C8, C9, C10</h2>
            </div>
            <div>
                <p>Hours</p>
                <h2>14:40</h2>
            </div>
            </div>
            <Link to='/code' >
                <button className="btnt" onClick={()=>setNum(num +1)} >Checkout Ticket</button>
            </Link>
        </div>
        </div>
    )
}

export default Detal