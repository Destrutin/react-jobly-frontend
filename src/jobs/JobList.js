import React, {useEffect, useState} from "react";
import SearchBar from "../search/SearchBar";
import Api from "../api/Api";
import JobCardList from "./JobCardList";

function JobList() {
    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                let jobs = await Api.getJobs();
                setJobs(jobs);
            } catch (err) {
                console.error("Error fetching data", err);
            }
        }
        fetchData();
    }, []);

    async function search(title) {
        let jobs = await Api.getJobs(title);
        setJobs(jobs);
    }

    return (
        <div className="JobList">
            <SearchBar search={search}/>
                <JobCardList jobs={jobs}/>
        </div>
    )
}

export default JobList;