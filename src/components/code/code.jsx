import { Link } from "react-router-dom"
function Code(){
    return(
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="d-flex flex-column gap-5 text-light code">
            <div>
                <h1>
                    Enter Otp
                </h1>
            </div>
            <div className="d-flex justify-content-between">
                <input className="incod" type="password" maxLength={1} />
                <input className="incod" type="password" maxLength={1}/>
                <input className="incod" type="password" maxLength={1}/>
                <input className="incod" type="password" maxLength={1}/>
            </div>
            <div className="px-5 mt-5">
                <Link to='/post' >
                <button className="btnt">
                    Submit
                </button></Link>
            </div>
        </div>
        </div>
    )
}
export default Code