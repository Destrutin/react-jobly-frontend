import React from "react";
import JobCard from "./JobCard";

function JobCardList({jobs}) {
    return (
        <div className="JobCardList">
            {jobs && jobs.map(j => (
                <JobCard
                    key={j.id}
                    id={j.id}
                    title={j.title}
                    salary={j.salary}
                    equity={j.equity}
                    companyName={j.companyName}
                />
            ))}
        </div>
    )
}

export default JobCardList;