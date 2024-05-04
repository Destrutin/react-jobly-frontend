import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Api from "../api/Api";
import JobCardList from "../jobs/JobCardList";

function CompanyDetails() {
    const {handle} = useParams();
    const [company, setCompany] = useState(null);

    useEffect(() => {
        async function getCompany() {
            try {
                let company = await Api.getCompany(handle);
                setCompany(company);
            } catch (err) {
                console.error("Error fetching company data", err);
            }
        }
        getCompany();
    }, [handle]);

    return (
        <div className="CompanyDetails">
            {company ? (
                <>
                    <h4>{company.name}</h4>
                    <p>{company.description}</p>
                    <JobCardList jobs={company.jobs}/>
                </>
            ) : (
                <p>Loading...</p>
            )}
            
        </div>
    );
};

export default CompanyDetails;