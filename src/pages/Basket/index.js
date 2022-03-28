import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";

const Basket = () => {
    const { data, basket, removeFromBasket } = useContext(DataContext);
    const [items, setItems] = useState([]);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        const basketItems = data.filter(({ id }) => basket.includes(id));
        setItems(basketItems);
        const sum = basketItems.length && basketItems.reduce((prev, curr) => {
            return Number(prev?.price ?? 0) + Number(curr?.price ?? 0);
        }, { price: 0 });
        setSum(Number(sum).toFixed(2))
    }, [basket]);

    return (
        <>
            {
                items.length ?
                    <ul>
                        {items.map(({ id, title, price }) => (
                            <li key={id}>{title} <span>{price} PLN</span><i class="bi bi-x-lg" onClick={() => { removeFromBasket(id) }}></i></li>
                        ))}
                        <li>Razem: <span>{sum} PLN</span></li>
                    </ul>
                    :
                    <div>
                        Koszyk jest pusty
                    </div>
            }
        </>
    );
}

export default Basket;