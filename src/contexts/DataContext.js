import React, { createContext, useEffect, useState } from 'react';

const DataContext = createContext({
    data: [],
    initialData: [],
    basket: [],
    sortField: '',
    setData: () => { },
    setSortField: () => { },
    resetData: () => { },
    setInitialData: () => { },
    addToBasket: (id) => { },
    removeFromBasket: (id) => { }
});

const DataContextProvider = ({ children }) => {
    const [initialData, setInitialData] = useState([]);
    const [data, setData] = useState([]);
    const [basket, setBaslet] = useState([]);
    const [sortField, setSortField] = useState('');

    useEffect(() => {
        fetch('mock_data.json').then(res => res.json()).then((data) => {
            setInitialData(data);
        })
    }, []);

    useEffect(() => {
        resetData();
    }, [initialData]);

    useEffect(() => {
        console.info(basket)
    }, [basket])

    const resetData = () => {
        setData(initialData);
    }

    const addToBasket = (id) => {
        console.info(id)
        const basketSet = new Set([...basket, id]);
        setBaslet([...basketSet]);
    }

    const removeFromBasket = (id) => {
        const filteredBasket = basket.filter((item) => item !== id);
        setBaslet(filteredBasket);
    }

    return (
        <DataContext.Provider value={{ data, initialData, sortField, basket, setData, setSortField, resetData, setInitialData, addToBasket, removeFromBasket }}>
            {children}
        </DataContext.Provider>
    );
}

export { DataContext, DataContextProvider };
