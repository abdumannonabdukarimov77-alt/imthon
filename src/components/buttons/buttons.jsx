function Button({ title, active, onClick}){
    return(
        <button onClick={onClick} className={`btn btn-outline-dark rounded-0 ${active}`}>
            {title}
        </button>
    )
}

export default Button