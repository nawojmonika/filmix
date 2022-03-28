import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const ShopButton = ({id}) => {
    const { addToBasket } = useContext(DataContext);
    const handleAdd = () => {
        addToBasket(id)
    }
    return (
        <button className="btn btn-success" onClick={handleAdd}>
            <i className="bi bi-plus"></i>Dodaj do koszyka
        </button>
    );
}

export default ShopButton;