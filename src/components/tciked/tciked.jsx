import { useState } from "react"
import Carta from "../Card/carta"

function Tciked(){
    let [active, setActive] = useState(false)
    return(
        <div>
        <div className="text-center mt-3">
            <button className={`btnn ${!active ? "active" : "tciked"}`} onClick={() => setActive(false)}>
            Upcoming
            </button>
            <button className={`btnn ${active ? "active" : "tciked"}`} onClick={() => setActive(true)}>
                History
            </button>
        </div>
            {!active && (
                    <div className="d-flex justify-content-center gap-5 mt-5">
                        <Carta/>
                        <Carta/>
                        <Carta/>
                    </div>
            )}
            {active && (
                    <div className="d-flex justify-content-center gap-5 mt-5">
                        <Carta/>
                        <Carta/>
                    </div>
                )}
        </div>
    )
}

export default Tciked