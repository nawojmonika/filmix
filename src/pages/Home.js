import React, {useContext} from "react";
import {DataContext} from "../contexts/DataContext";
import SortingButton from "../components/SortingButton";

const Home = () => {
    const {data} = useContext(DataContext);

    return (
        <>
            <table className="table table-striped align-middle">
                <thead className="table-dark align-middle">
                <tr>
                    <th scope="col">
                        <SortingButton title={'Tytuł'} fieldName={'title'}/>
                    </th>
                    <th scope="col">Gatunek</th>
                    <th scope="col">Zdjęcie</th>
                    <th scope="col">Opis</th>
                    <th scope="col">Język</th>
                    <th scope="col">Rok produkcji</th>
                    <th scope="col">Cena</th>
\                </tr>
                </thead>
                <tbody>
                {data?.map(({id, title, genre, url, desc, lang, year, price}) =>
                    <tr key={id}>
                        <td className="col-2"><strong>{title}</strong></td>
                        <td>
                            {genre?.map(name => (
                                <span className="badge bg-secondary">{name}</span>
                            ))}
                        </td>
                        <td>
                            <img src={url} className="img-thumbnail mx-auto d-block" alt={title}/>
                        </td>
                        <td>{desc}</td>
                        <td>
                            {lang?.map(name => (
                                <span className="badge bg-info">{name}</span>
                            ))}
                        </td>
                        <td>
                            <span className="badge bg-dark">{year}</span>
                        </td>
                        <td>
                            {price} PLN
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    );
}
export default Home;
