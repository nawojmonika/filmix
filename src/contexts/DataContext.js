import React, {createContext, useEffect, useState} from 'react';

const DataContext = createContext({
    data: [],
    initialData: [],
    sortField: '',
    setData: () => {},
    setSortField: () => {},
    resetData: () => {},
    setInitialData: () => {}
});

const DataContextProvider = ({children}) => {
    const [initialData, setInitialData] = useState([]);
    const [data, setData] = useState([]);
    const [sortField, setSortField] = useState('');

    useEffect(() => {
        fetch('mock_data.json').then(res => res.json()).then((data) => {
            setInitialData(data);
        })
    }, []);

    const resetData = () => {
        setData(initialData);
    }

    useEffect(() => {
        resetData();
    }, [initialData]);

    return (
        <DataContext.Provider value={{data, initialData, sortField, setData, setSortField, resetData, setInitialData}}>
            {children}
        </DataContext.Provider>
    );
}

export {DataContext, DataContextProvider};
