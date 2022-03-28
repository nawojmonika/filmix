import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import ShopButton from "../../components/ShopButton";

const Home = () => {
    const { data } = useContext(DataContext);

    return (
        <>
            <h2>Dostępne filmy do wypożyczenia</h2>
            <table className="table table-striped align-middle">
                <thead className="table-dark align-middle">
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
                            <td className="col-2"><strong>{title}</strong></td>
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
                            <td className="col-2">
                                <ShopButton id={id} />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}
export default Home;
