import React, {useContext, useEffect, useState} from "react";
import UserContext from "../auth/UserContext";
import "./JobCard.css"

function JobCard({id, title, salary, equity, companyName}) {

    const {hasAppliedToJob, applyToJob} = useContext(UserContext);
    const [applied, setApplied] = useState();

    useEffect(() => {
        setApplied(hasAppliedToJob(id));
    }, [id, hasAppliedToJob]);

    async function handleApply(e) {
        if (hasAppliedToJob(id)) return;
        applyToJob(id);
        setApplied(true);
    }
    return (
        <div className="JobCard-card">
            <div className="JobCard-body">
                <h4>{title}</h4>
                <p>{companyName}</p>
                <p>Salary: {salary}</p>
                <p>Equity: {equity}</p>
                <button
                    className="apply-button"
                    onClick={handleApply}
                    disabled={applied}
                >{applied ? "Applied" : "Apply"}</button>
            </div>
        </div>
    )
}

export default JobCard;