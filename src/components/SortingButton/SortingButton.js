import React from "react";

const SortingButton = ({title, fieldName, reverseSort, sortBy, activeSort}) => {
    const handleClick = () => {
        sortBy(fieldName);
    }

    return (
        <button className="btn btn-dark" onClick={handleClick}>
            <strong>{title} {activeSort === fieldName && <i className={`bi ${reverseSort ? 'bi-arrow-down-short' : 'bi-arrow-up-short'}`}></i>}</strong>
        </button>
    );
}

export default SortingButton;
