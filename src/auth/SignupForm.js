import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function SignupForm({signup}) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data => ({...data, [name]:value}))
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            await signup(formData);
            navigate("/companies")
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="SignupForm">
            <h1>Sign Up</h1>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className="form-inputs">
                        <label>Username</label>
                        <input
                            name="username"
                            className="form-input"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-inputs">
                        <label>Password</label>
                        <input
                            name="password"
                            className="form-input"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-inputs">
                        <label>First name</label>
                        <input
                            name="firstName"
                            className="form-input"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-inputs">
                        <label>Last name</label>
                        <input
                            name="lastName"
                            className="form-input"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-inputs">
                        <label>Email</label>
                        <input
                            name="email"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="submit-button" onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
};

export default SignupForm;