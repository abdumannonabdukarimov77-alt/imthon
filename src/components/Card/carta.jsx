import { useState } from "react"

function Carta(){
    let [num , setNum] = useState(1)
    return(
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
                    <p>Tikot( {num} )</p>
                    <h4>C8, C9, C10</h4>
                </div>
                <div>
                    <p>Hours</p>
                    <h4>14:40</h4>
                </div>
            </div>
            <button className="btnt" onClick={()=> setNum(num +1)}>Download Ticket</button>
        </div>
    )
}

export default Carta