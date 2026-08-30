import Button from "../buttons/buttons";

function Nav(){
    return(
        <div className="d-flex justify-content-between">
            <img className="logo" src="/icons/logo.png" alt="logo" />
            <Button />
        </div>
    )
}

export default Nav