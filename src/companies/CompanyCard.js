import React from "react";
import {Link} from "react-router-dom";


function CompanyCard({handle, name, description, logoUrl}) {
    return (
        <Link className="CompanyCard-card" to={`/companies/${handle}`}>
            <div className="card-body">
                <h4>{name}</h4>
                <p>{description}</p>
                {logoUrl && <img src={logoUrl} alt={name} className="card-img"/>}
            </div>
        </Link>
    )
}

export default CompanyCard;