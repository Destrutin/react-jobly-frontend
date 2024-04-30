import React, {useContext, useEffect, useState} from "react";
import UserContext from "../auth/UserContext";

function JobCard({id, title, salary, equity, companyName}) {

    const {hasAppliesToJob, applyToJob} = useContext(UserContext);
    const [applied, setApplied] = useState();

    useEffect(() => {
        setApplied(hasAppliesToJob(id));
    }, [hasAppliesToJob]);

    async function handleApply(e) {
        if (hasAppliesToJob(id)) return;
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
                >{applied ? "Applies" : "Apply"}</button>
            </div>
        </div>
    )
}

export default JobCard;