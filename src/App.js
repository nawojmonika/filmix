import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState([]);
    const [sortField, setSortField] = useState('');
    const [reverseSort, setReverseSort] = useState(false);

    useEffect(() => {
        fetch('mock_data.json').then(res => res.json()).then((data) => {
            setData(data);
        })
    }, []);

    useEffect(() => {
        if (reverseSort) {
            setData([...data].reverse())
        } else {
            const isString = sortField && Number.isNaN(Number(data[0][sortField]));
            const sortedData = data.sort((a, b) => {
                return  isString ? a[sortField].localeCompare(b[sortField]) : a[sortField] - b[sortField];
            });
            setData([...sortedData]);
        }
    }, [sortField, reverseSort]);

    const sortBy = (field) => {
        if (field === sortField) {
            setReverseSort(!reverseSort)
        } else {
            setReverseSort(false);
            setSortField(field);
        }
    }

    return (
        <table className="table table-striped align-middle">
            <thead className="table-dark">
            <tr>
                <th scope="col">
                    <button className="btn btn-dark" onClick={() => sortBy('title')}>
                        <strong>Tytuł {sortField === 'title' && <i className={`bi ${reverseSort ? 'bi-arrow-down-short' : 'bi-arrow-up-short'}`}></i>}</strong>
                    </button>
                </th>
                <th scope="col">Gatunek</th>
                <th scope="col">Zdjęcie</th>
                <th scope="col">Opis</th>
                <th scope="col">Język</th>
                <th scope="col">Rok produkcji</th>
                <th scope="col">
                    <button className="btn btn-dark" onClick={() => sortBy('price')}>
                        <strong>Cena {sortField === 'price' && <i className={`bi ${reverseSort ? 'bi-arrow-down-short' : 'bi-arrow-up-short'}`}></i>}</strong>
                    </button>
                </th>
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
                </tr>
            )}
            </tbody>
        </table>
    );
}

export default App;
