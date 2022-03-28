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
    const [basket, setBasket] = useState([]);
    const [sortField, setSortField] = useState('');

    useEffect(() => {
        fetch('mock_data.json').then(res => res.json()).then((data) => {
            setInitialData(data);
        });
        const basketItems = window.localStorage.getItem('basket');
        setBasket(JSON.parse(basketItems) || []);
    }, []);

    useEffect(() => {
        resetData();
    }, [initialData]);

    useEffect(() => {
        window.localStorage.setItem('basket', JSON.stringify(basket))
    }, [basket]);

    const resetData = () => {
        setData(initialData);
    }

    const addToBasket = (id) => {
        const basketSet = new Set([...basket, id]);
        setBasket([...basketSet]);
    }

    const removeFromBasket = (id) => {
        const filteredBasket = basket.filter((item) => item !== id);
        setBasket(filteredBasket);
    }

    return (
        <DataContext.Provider value={{ data, initialData, sortField, basket, setData, setSortField, resetData, setInitialData, addToBasket, removeFromBasket }}>
            {children}
        </DataContext.Provider>
    );
}

export { DataContext, DataContextProvider };
