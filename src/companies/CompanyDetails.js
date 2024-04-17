import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Api from "../api/Api";
import JobList from "../jobs/JobList";

function CompanyDetails() {
    const {handle} = useParams();
    const [company, setCompany] = useState(null);

    useEffect(function getCompanyAndJobs() {
        async function getCompany() {
            setCompany(await Api.getCompany(handle));
        }
        getCompany();
    }, [handle]);

    return (
        <div className="CompanyDetails">
            <h4>{company.name}</h4>
            <p>{company.description}</p>
            <JobCardList jobs={company.jobs}/>
        </div>
    );
};

export default CompanyDetails;