import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";

const ShopButton = ({ id }) => {
    const { basket, addToBasket, removeFromBasket } = useContext(DataContext);
    const [isInBasket, setIsInBasket] = useState(false);

    const handleAdd = () => {
        addToBasket(id)
    }
    const handleRemove = () => {
        removeFromBasket(id)
    }

    useEffect(() => {
        const found = basket.find((item) => item === id);
        setIsInBasket(found);
    }, [basket]);

    return (
        <>
            {isInBasket ?
                <button className="btn btn-danger" onClick={handleRemove}>
                    <i className="bi bi-dash"></i> Usuń z koszyka
                </button>
                :
                <button className="btn btn-success" onClick={handleAdd}>
                    <i className="bi bi-plus"></i> Dodaj do koszyka
                </button>
            }
        </>
    );
}

export default ShopButton;