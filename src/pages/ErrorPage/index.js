import React from "react";
import './errorPage.css';

const ErrorPage = () => {
    return (
        <div className="error">
            <h2>Błąd 404</h2>
            <i class="bi bi-exclamation-octagon"></i>
            <p>To nie jest strona, której szukasz</p>
        </div>
    );
}

export default ErrorPage