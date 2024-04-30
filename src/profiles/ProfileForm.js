import React, { useContext, useState } from "react";
import Api from "../api/Api";
import UserContext from "../auth/UserContext";

function ProfileForm() {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const [formData, setFormData] = useState({
        username: currentUser.username,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
    })
    const [updateSuccessful, setUpdateSuccessful] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data => ({...data, [name]:value}))
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password
        };
        let username = formData.username;
        let updatedUser;

        try{
            updatedUser = await Api.saveChanges(username, profileData);
        } catch (err) {
            console.error(err);
        }

        setFormData(data => ({...data}));
        setCurrentUser(updatedUser);
        setUpdateSuccessful(true);
    }

    return (
        <div className="Profile">
            <h1>Profile</h1>
            <div className="profile-card">
                <div className="profile-input">
                    <label>Username</label>
                    <input disabled>{formData.username}</input>
                </div>

                <div className="profile-input">
                    <label>First Name</label>
                    <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>

                <div className="profile-input">
                    <label>Last Name</label>
                    <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>

                <div className="profile-input">
                    <label>Email</label>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                {updateSuccessful ? alert("Updated successfully.") : null}

                <button className="profile-submit" onClick={handleSubmit}>
                  Save Changes  
                </button>
            </div>
        </div>
    )
}

export default ProfileForm;