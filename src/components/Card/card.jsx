import { Fragment, useState } from "react"
function Card(props){
    let [count, setCount]= useState(0)
    return(
            <div className="mt-2 w-75 p-4 bg-dark text-light mx-auto">
                    <h1 className="h1">Kino nomi - {props.title}, Janiri - {props.genre}</h1>
                    <p className="mt-4 fs-4 text-secondary">Ko'rilganlar {props.Views} marta</p>
                    <p className="mt-4 fs-3">{count}</p>
                <div className="d-flex gap-2">
                        <button onClick={()=> setCount(count + 1)} className="btn btn-success">inc</button>
                        <button onClick={()=> setCount(count - 1)} className="btn btn-danger">Dec</button>
                        <button onClick={()=> setCount(count = 0)} className="btn btn-info">Res</button>
                </div>
            </div>
    )
}
export default Card