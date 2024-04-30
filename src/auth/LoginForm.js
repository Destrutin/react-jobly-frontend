import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function LoginForm({login}) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data => ({...data, [name]:value}));
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData);
            navigate("/companies");
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="LoginForm">
            <h1>Log In</h1>
            <div className="login-card">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        className="login-button"
                        onSubmit={handleSubmit}
                    >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;