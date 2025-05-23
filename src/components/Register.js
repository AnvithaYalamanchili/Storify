import React ,{useState} from "react";
import './Register.css';
import {useNavigate} from "react-router-dom";
const Register = ()=>{
    const navigate=useNavigate();
    const [formData, setFormData]=useState({
        firstName:"",   
        lastName:"",
        email:"",
        dob:"",
        username:"",
        password:""
    });

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]: e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await fetch("http://localhost:8000/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(formData),
            });
            const result=await response.json();
            if(response.ok)
            {
                alert("Registration successful");
                navigate('/login')
            }
            else{
                alert(`Error: ${response.detail}`);
            }
        }catch(error){
            console.error("Error: ",error);
            alert("An error occured during the registration. ")
        }

    }

    return(
        <div className="background-container">
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type= "text" name="firstName" placeholder="First Name" value={formData.firstName || ""}  onChange= {handleChange} />
                <input type= "text" name="lastName" placeholder="Last Name" value={formData.lastName || ""}   onChange= {handleChange} />
                <input type= "email" name="email" placeholder="Email" value={formData.email || ""}     onChange= {handleChange} />
                <input
  type="date"
  name="dob"                
  placeholder="Date of birth"
  value={formData.dob || ""} 
  onChange={handleChange}
/>

                <input type= "text" name="username" placeholder="User Name" value={formData.username || ""}   onChange= {handleChange} />
                <input type= "password" name="password" placeholder="Password" value={formData.password} onChange= {handleChange} />
                <button>Register</button>
            </form>
        </div>

        </div>

)
}
export default Register;
