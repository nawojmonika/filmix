import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/DataContext";

const SortingButton = ({ title, fieldName }) => {
    const { data, setData } = useContext(DataContext);
    const [reverseSort, setReverseSort] = useState(false);

    useEffect(() => {
        if (data.length) {
            if (reverseSort) {
                setData([...data].reverse())
            } else {
                const isString = fieldName && Number.isNaN(Number(data[0][fieldName]));
                const sortedData = fieldName ? data.sort((a, b) => {
                    return isString ? a[fieldName].localeCompare(b[fieldName]) : a[fieldName] - b[fieldName];
                }) : data;
                setData([...sortedData]);
            }
        }
    }, [reverseSort]);

    const handleClick = () => {
        setReverseSort(!reverseSort);
    }

    return (
        <button className="btn btn-dark" onClick={handleClick}>
            <strong>{title} {<i className={`bi ${reverseSort ? 'bi-arrow-down-short' : 'bi-arrow-up-short'}`}></i>}</strong>
        </button>
    );
}

export default SortingButton;
