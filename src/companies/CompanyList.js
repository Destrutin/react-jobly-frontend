import React, { useEffect, useState } from "react";
import SearchBar from "../search/SearchBar";
import Api from "../api/Api";
import CompanyCard from "./CompanyCard";

function CompanyList() {
    const [companies, setCompanies] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                let companies = await Api.getCompanies();
                setCompanies(companies);
            } catch (err) {
                console.error("Error fetching data", err);
            }
        }
        fetchData();
    }, []);

    async function search(name) {
        let companies = await Api.getCompanies(name);
        setCompanies(companies);
    }

    return (
        <div className="CompanyList">
            <SearchBar search={search}/>
            <div className="CompanyList-list">
                {companies && companies.map(c => (
                    <CompanyCard
                        key={c.handle}
                        handle={c.handle}
                        name={c.name}
                        description={c.description}
                        logoUrl={c.logoUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default CompanyList;