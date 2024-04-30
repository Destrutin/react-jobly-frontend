import React, {useContext} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import CompanyDetails from "../companies/CompanyDetails";
import JobList from "../jobs/JobList";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import ProfileForm from "../profiles/ProfileForm";
import UserContext from "../auth/UserContext";

function AppRoutes({signup, login}) {
    const {currentUser} = useContext(UserContext);
    return (
        <>
            <Routes>
                {!currentUser &&
                <>
                    <Route 
                        exact path="/login" 
                        element={<LoginForm login={login}/>}
                    />

                    <Route 
                        exact path="/signup" 
                        element={<SignupForm signup={signup}/>}
                    />
                </>
                }

                <Route 
                    exact path="/" 
                    element={<Homepage/>}
                />

                {currentUser &&
                <>
                    <Route 
                        exact path="/companies" 
                        element={<CompanyList/>}
                    />

                    <Route 
                        exact path="/companies/:handle" 
                        element={<CompanyDetails/>}
                    />

                    <Route 
                        exact path="/jobs" 
                        element={<JobList/>}
                    />

                    <Route 
                        exact path="/profile" 
                        element={<ProfileForm/>}
                    />
                </>
                }
                

                <Route path="/" element={<Navigate to="/"/>}/>
            </Routes>
        </>
    )
}


export default AppRoutes;