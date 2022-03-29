import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";
import './basket.css';

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
        <div className="basket">
            <h2>Podsumowanie</h2>
            {
                items.length ?
                    <ol>
                        {items.map(({ id, title, price }) => (
                            <li key={id}>{title} <span>{price} PLN</span><i class="bi bi-x-lg" onClick={() => { removeFromBasket(id) }}></i></li>
                        ))}
                        <li>Razem: <span>{sum} PLN</span></li>
                    </ol>
                    :
                    <p>
                        Koszyk jest pusty
                    </p>
            }
        </div>
    );
}

export default Basket;