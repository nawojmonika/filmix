import React, {useContext, useState} from "react";
import {DataContext} from "../../contexts/DataContext";

const PriceFilter = () => {
    const {data, setData, resetData} = useContext(DataContext);
    const [filters, setFilters] = useState({
        min: '',
        max: ''
    });

    const handleMinChange = (event) => {
        setFilters({
            ...filters,
            min: event.target.value
        });
    }
    const handleMaxChange = (event) => {
        setFilters({
            ...filters,
            max: event.target.value
        });
    }

    const handleFilterData = () => {
        const min = filters.min;
        const max = filters.max;
        const filteredData = data.filter(({price}) => {
            return (min ? Number(price) >= min : true) && (max ? Number(price) <= max : true);
        });
        setData([...filteredData]);
    }

    const handleResetData = () => {
        setFilters({
            min: '',
            max: ''
        })
        resetData();
    };

    return (
        <div className="input-group py-4">
            <span className="input-group-text me-2">Filtruj po cenie</span>
            <span className="input-group-text">Od:</span>
            <input type="number" aria-label="min" placeholder={0} className="form-control me-2" value={filters.min}
                   onChange={handleMinChange}/>
            <span className="input-group-text">Do:</span>
            <input type="number" aria-label="max" placeholder={0} className="form-control" value={filters.max}
                   onChange={handleMaxChange}/>
            <button className="btn btn-primary mx-4" type="button" onClick={handleFilterData}>Zastosuj</button>
            <button className="btn btn-secondary" type="button" onClick={handleResetData}>Resetuj</button>
        </div>
    );
}

export default PriceFilter;
