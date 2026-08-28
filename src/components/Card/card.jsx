import '../filter/nav.css'

function Card ({length, addsubmit}){
    return(
        <div className="main-card rounded mt-5 p-4">
            <h1>Barcha kinolar soni : {length}</h1>
            <h1>Ko'rilgan kinolar soni : {addsubmit}</h1>
        </div>
    )
}

export default Card