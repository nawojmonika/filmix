import React, {useContext} from "react";
import {DataContext} from "../contexts/DataContext";
import SortingButton from "./SortingButton";
import PriceFilter from "./PriceFilter";
import EditMovie from "./EditMovie";

const MovieList = () => {
    const {data} = useContext(DataContext);

    return (
        <>
            <PriceFilter/>
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
                    <th scope="col">
                        <SortingButton title={'Cena'} fieldName={'price'}/>
                    </th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {data.map(({id, title, genre, url, desc, lang, year, price}) =>
                    <tr key={id}>
                        <td className="col-2"><strong>{title}</strong></td>
                        <td>
                            {genre.map(name => (
                                <span className="badge bg-secondary">{name}</span>
                            ))}
                        </td>
                        <td>
                            <img src={url} className="img-thumbnail mx-auto d-block" alt={title}/>
                        </td>
                        <td>{desc}</td>
                        <td>
                            {lang.map(name => (
                                <span className="badge bg-info">{name}</span>
                            ))}
                        </td>
                        <td>
                            <span className="badge bg-dark">{year}</span>
                        </td>
                        <td className="col-1">
                            {price} PLN
                        </td>
                        <td>
                            <EditMovie id={id}/>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    );
}
export default MovieList;
