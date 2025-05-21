import React from "react";
import './Register.css'
const Register = ()=>{
    return(
        <div className="background-container">
        <div className="container">
            <h2>Register</h2>
            <form>
                <input type= "text" placeholder="First Name"/>
                <input type= "text" placeholder="Last Name"/>
                <input type= "email" placeholder="Email"/>
                <input type= "date" placeholder="Date of birth"/>
                <input type= "text" placeholder="User Name"/>
                <input type= "password" placeholder="Password"/>
                <button>Register</button>
            </form>
        </div>

        </div>

)
}
export default Register;
