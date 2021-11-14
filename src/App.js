import {useEffect, useState} from "react";
import SortingButton from "./components/SortingButton";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('mock_data.json').then(res => res.json()).then((data) => {
            setData(data);
        })
    }, []);

    return (
        <table className="table table-striped align-middle">
            <thead className="table-dark">
            <tr>
                <th scope="col">
                    <SortingButton title={'Tytuł'} fieldName={'title'} setData={setData} data={data}/>
                </th>
                <th scope="col">Gatunek</th>
                <th scope="col">Zdjęcie</th>
                <th scope="col">Opis</th>
                <th scope="col">Język</th>
                <th scope="col">Rok produkcji</th>
                <th scope="col">
                    <SortingButton title={'Cena'} fieldName={'price'} setData={setData} data={data}/>
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
