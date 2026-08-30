import { Link } from "react-router-dom";
function Register(){
    return(
        <div className="register">
            <div className="left">
                <img className="logo" src="/icons/logo.png" alt="logo" />
                <div>
                    <h1 className="text">Welcome Begin your cinematic adventure now with our ticketing platform!</h1>
                </div>
            </div>
            <div className="right">
                <div className="regis">
                    <h2>Create an account</h2>
                    <div>
                        <h4 className="email">Email</h4>
                        <input type="email" placeholder="Email" className="input" />
                    </div>
                    <div className="py-2">
                        <h4 className="email">Password</h4>
                        <input type="password" placeholder="Password" className="input" />
                        <input type="password" placeholder="Password" className="input" />
                    </div>
                    <Link to="/logaut"><button className="button">Create account</button></Link>
                    <div className="d-flex gap-2 justify-content-center py-3">
                        <p className="text-secondary">Already have an account ?</p><Link to="/login"><p className="p">Login</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register