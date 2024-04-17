import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import UserContext from "../auth/UserContext";

function PrivateRoute({path, component}) {
    const {currentUser} = useContext(UserContext);

    if (!currentUser) {
        return (
            <Redirect to="/login"/>
        )
    }
    return (
        <Route path={path}>
            {component}
        </Route>
    )
}

export default PrivateRoute;