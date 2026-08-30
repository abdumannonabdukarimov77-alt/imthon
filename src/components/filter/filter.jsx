import { useState } from "react"
import { Link } from "react-router-dom"

function Filter({img, title}){
let [click, setClick] = useState(1)
let [clicked, setClickked] = useState(1)
let [clicke, setClicke] = useState(1)
    return(
        <div className="d-flex mt-5">
            <div className="flex">
            <div>
                <h2>
                    Theater
                </h2>
                <br />
                <div className="d-flex gap-2">
                <button className={`btnn ${click === 1 ? "active" : "tciked"}`} onClick={() => setClick(1)}>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Bukit Bintang
                </button>
                <button className={`btnn ${click === 2 ? "active" : "tciked"}`} onClick={() => setClick(2)}>
                   <i className="fa-solid fa-location-dot"></i> &nbsp; Bukit Bintang
                </button>
                <button className={`btnn ${click === 3 ? "active" : "tciked"}`} onClick={() => setClick(3)}>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Bukit Bintang
                </button>
                </div>
            </div>
            <div>
                <h2>
                    Date
                </h2>
                <br />
                <div className="d-flex gap-3">
                    <button className={`btnm ${clicked === 1 ? "active" : "tciked"}`} onClick={() => setClickked(1)}>
                    22 Oct <br /> Mon
                </button>
                <button className={`btnm ${clicked === 2 ? "active" : "tciked"}`} onClick={() => setClickked(2)}>
                   22 Oct <br /> Mon
                </button>
                <button className={`btnm ${clicked === 3 ? "active" : "tciked"}`} onClick={() => setClickked(3)}>
                   22 Oct <br /> Mon
                </button>
                <button className={`btnm ${clicked === 4 ? "active" : "tciked"}`} onClick={() => setClickked(4)}>
                   22 Oct <br /> Mon
                </button>
                <button className={`btnm ${clicked === 5 ? "active" : "tciked"}`} onClick={() => setClickked(5)}>
                   22 Oct <br /> Mon
                </button>
                <button className={`btnm ${clicked === 6 ? "active" : "tciked"}`} onClick={() => setClickked(6)}>
                   22 Oct <br /> Mon
                </button>
                </div>
            </div>
            <div>
                <h2>
                    Time
                </h2>
                <br />
                <div className="d-flex gap-3">
                    <button className={`btnm ${clicke === 1 ? "active" : "tciked"}`} onClick={() => setClicke(1)}>
                    15:40
                </button>
                <button className={`btnm ${clicke === 2 ? "active" : "tciked"}`} onClick={() => setClicke(2)}>
                   15:40
                </button>
                <button className={`btnm ${clicke === 3 ? "active" : "tciked"}`} onClick={() => setClicke(3)}>
                   15:40
                </button>
                </div>
            </div>
            </div>
            <div className="text-center">
                <img src={img} alt="" />
                <h4>{title}</h4>
                <Link to='/seat' ><button className="btnt mt-4">Proceed</button></Link>
            </div>
        </div>
    )
}

export default Filter