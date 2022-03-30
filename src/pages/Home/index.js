import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import ShopButton from "../../components/ShopButton";
import './home.css';

const Home = () => {
    const { data } = useContext(DataContext);

    return (
        <div className="home">
            <h2>Dostępne filmy do wypożyczenia</h2>
            <table className="table table-striped">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Tytuł</th>
                        <th scope="col">Gatunek</th>
                        <th scope="col">Zdjęcie</th>
                        <th scope="col">Opis</th>
                        <th scope="col">Język</th>
                        <th scope="col">Rok produkcji</th>
                        <th scope="col">Cena</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map(({ id, title, genre, url, desc, lang, year, price }) =>
                        <tr key={id}>
                            <td><strong>{title}</strong></td>
                            <td>
                                {genre?.map(name => (
                                    <span key={name} className="badge bg-secondary">{name}</span>
                                ))}
                            </td>
                            <td>
                                <img src={url} className="img-thumbnail mx-auto d-block" alt={title} />
                            </td>
                            <td>{desc}</td>
                            <td>
                                {lang?.map(name => (
                                    <span key={name} className="badge bg-info">{name}</span>
                                ))}
                            </td>
                            <td>
                                <span className="badge bg-dark">{year}</span>
                            </td>
                            <td>
                                {price} PLN
                            </td>
                            <td>
                                <ShopButton id={id} />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default Home;
