import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function Footer({addMovie}){
    let[title,setTitle] = useState('')
    let[views, setViews] = useState('')
    function submitHanade(e){
        e.preventDefault()
        const newAddMovie = {
            id : uuidv4(),
            title : title,
            vives: views
        }
        addMovie(newAddMovie)
        setTitle('')
        setViews('')
    }
    return(
        <div className="main-card rounded mt-3 p-4 mb-3">
            <form onSubmit={submitHanade}>
            <h2>Yangi kino qo'shish</h2>
            <div className="d-flex">
                <input value={title} onChange={(e)=> setTitle(e.target.value)} className="form-control" type="text" placeholder="Qanday kino ?" />
                <input value={views} onChange={(e)=> setViews(e.target.value)} className="form-control" type="text" placeholder="Necha marotaba ko'rilgan ?" />
                <button type="submit" className="btn btn-outline-dark rounded-3">Qo'shish</button>
            </div>
            </form>
        </div>
    )
}

export default Footer