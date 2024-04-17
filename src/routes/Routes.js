import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import CompanyDetails from "../companies/CompanyDetails";
import JobList from "../jobs/JobList";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import ProfileForm from "../profiles/ProfileForm";
import PrivateRoute from "./PrivateRoute";

function Routes({signup, login}) {
    return (
        <>
            <Switch exact path="/">
                <Route>
                    <Homepage/>
                </Route>

                <Route exact path="/login">
                    <LoginForm login={login}/>
                </Route>

                <Route exact path="/signup">
                    <SignupForm singup={signup}/>
                </Route>

                <PrivateRoute exact path="/companies">
                    <CompanyList/>
                </PrivateRoute>

                <PrivateRoute exact path="/companies/:handle">
                    <CompanyDetails/>
                </PrivateRoute>

                <PrivateRoute exact path="/jobs">
                    <JobList/>
                </PrivateRoute>

                <PrivateRoute exact path="/profile">
                    <ProfileForm/>
                </PrivateRoute>

                <Redirect to="/"/>
            </Switch>
        </>
    )
}

export default Routes;