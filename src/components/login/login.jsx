import { Link } from "react-router-dom";
function Login(){
    return(
        <div className="log">
            <div className="logi">
                <h2 className="text-black">Login to your account</h2>
                    <div>
                        <h4 className="email">Email</h4>
                        <input type="email" placeholder="Email" className="input" />
                    </div>
                    <div>
                        <h4 className="email">Password</h4>
                        <input type="password" placeholder="Password" className="input" />
                    </div>
                    <Link to="/logaut"><button className="button">Login now</button></Link>
                    <div className="d-flex gap-2 justify-content-center py-3">
                        <p className="text-secondary">Don’t have an account ?</p><Link to='/registr' ><p className="p">Register Here</p></Link>
                    </div>
            </div>
        </div>
    )
}

export default Login