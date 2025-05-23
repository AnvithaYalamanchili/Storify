import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const result = await response.json();
            if (response.ok) {
                alert("Login successful");
                navigate('/home');
            } else {
                alert(`Error: ${result.detail}`);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred during the login.");
        }
    };

    return (
        <div className="background-container">
            <div className="container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
