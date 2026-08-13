import './nav.css'
import { useState } from "react"

function Nav(){
    let[toggler, setTogler] = useState(false)
    return(
        <div className="main_container">
            <h1>Kinolar</h1>
            <ul className={`${toggler && 'active'}`}>
                <li>Hammasi</li>
                <li>Yangi</li>
                <li>Retro</li>
                
            </ul>
            <i onClick={()=> setTogler((prev)=> !prev)}className={toggler ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
    )
}
export default Nav