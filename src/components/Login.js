import React from "react";
import './Login.css'
const Login=()=>{
    return(
        <div className="background-container">
        <div className="container">
            <h2>Login</h2>
            <form>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
            </form>
        </div>

        </div>
    )
}
export default Login;