import React from "react";

const PriceFilter = ({data, setData}) => {
    return (
        <div className="input-group py-4">
            <span className="input-group-text me-2">Filtruj po cenie</span>
            <span className="input-group-text">Od:</span>
            <input type="text" aria-label="Od" className="form-control me-2"/>
            <span className="input-group-text">Do:</span>
            <input type="text" aria-label="DO" className="form-control"/>
            <button className="btn btn-primary mx-4" type="button">Zastosuj</button>
            <button className="btn btn-secondary" type="button">Resetuj</button>
        </div>
    );
}

export default PriceFilter;
