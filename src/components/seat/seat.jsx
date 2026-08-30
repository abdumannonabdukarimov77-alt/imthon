import { useState } from "react"
import { Link } from "react-router-dom"
function Seat(){
    let [fav, setFav] = useState(false)
    return(
        <div className="container_ d-flex flex-column min-vh-100">
            <div>
                <h1 className="text-light" >Seat</h1>
            </div>
            <div className="text-center mt-5 ">
                <div>
                    <img onClick={()=>setFav((prev)=> !prev) } src="/icons/Group 27.png" alt="" />
                </div>
                <img className="mt-4" src="/icons/Frame 127.png" alt="" />
            </div>
            <div className={`d-flex justify-content-between align-items-end mt-auto border-top ${fav ? "d-flex" : "d-none"}`}>
                <div>
                    <p>TOTAL</p>
                    <h2>RM 56.86</h2>
                </div>
                <div>
                    <p>SEAT</p>
                    <h2>C8, C9, C10</h2>
                </div>
                <div>
                    <Link to='/logaut' >
                    <button className="btnp registr">Back</button>
                    </Link>
                    <Link to='/detal' >
                    <button className="btns login">Proceed Payment</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Seat