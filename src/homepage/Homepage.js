import React, {useContext} from "react";
import {Link} from "react-router-dom";
import UserContext from "../auth/UserContext";

function Homepage() {
    const {currentUser} = useContext(UserContext);

    return (
        <div className="Homepage">
            <h1>Jobly</h1>
            <p>All the jobs in one, convenient place.</p>
            {currentUser
                ? <h2>
                    Welcome Back, {currentUser.firstName}!
                </h2>
                : (
                    <p>
                        <Link to="/login">Log in</Link>
                        <Link to="/signup">Sign up</Link>
                    </p>
                )}
        </div>
    );
}

export default Homepage;