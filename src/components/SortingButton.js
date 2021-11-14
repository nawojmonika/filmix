import React, {useEffect, useState} from "react";

const SortingButton = ({title, fieldName, setData, data}) => {
    const [sortField, setSortField] = useState('');
    const [reverseSort, setReverseSort] = useState(false);

    useEffect(() => {
        if (reverseSort) {
            setData([...data].reverse())
        } else {
            const isString = sortField && Number.isNaN(Number(data[0][sortField]));
            const sortedData = data.sort((a, b) => {
                return  isString ? a[sortField].localeCompare(b[sortField]) : a[sortField] - b[sortField];
            });
            setData([...sortedData]);
        }
    }, [sortField, reverseSort]);

    const sortBy = (field) => {
        if (field === sortField) {
            setReverseSort(!reverseSort);
        } else {
            setReverseSort(false);
            setSortField(field);
        }
    }

    const handleClick = () => {
        sortBy(fieldName);
    }

    return (
        <button className="btn btn-dark" onClick={handleClick}>
            <strong>{title} {sortField === fieldName && <i className={`bi ${reverseSort ? 'bi-arrow-down-short' : 'bi-arrow-up-short'}`}></i>}</strong>
        </button>
    );
}

export default SortingButton;
