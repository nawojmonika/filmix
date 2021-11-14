import React, {createContext, useEffect, useState} from 'react';

const DataContext = createContext({
    data: [],
    sortField: '',
    filters: {
        from: undefined,
        to: undefined
    },
    setData: () => {},
    setSortField: () => {},
    setFilters: () => {},
});

const DataContextProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [sortField, setSortField] = useState('');
    const [filters, setFilters] = useState({
        from: undefined,
        to: undefined
    });

    useEffect(() => {
        fetch('mock_data.json').then(res => res.json()).then((data) => {
            setData(data);
        })
    }, []);

    return (
        <DataContext.Provider value={{data, sortField, filters, setData, setSortField, setFilters}}>
            {children}
        </DataContext.Provider>
    );
}

export {DataContext, DataContextProvider};
