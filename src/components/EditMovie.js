import React, {useContext, useEffect, useState} from "react";
import {DataContext} from "../contexts/DataContext";
import MovieForm from "./MovieForm";

let count = 0;

const EditMovie = ({id}) => {
    count++;
    const {initialData, setInitialData} = useContext(DataContext);
    const [movieData, setMovieData] = useState({});

    const handleRemoveItem = (id) => {
        const filteredData = initialData.filter((elem) => elem.id !== id);
        setInitialData([...filteredData]);
    };

    const handleEditItem = (values) => {
        const data = initialData.map((movie) => {
            if (movie.id === id) {
                return {
                    ...movie,
                    ...values
                }
            }
            return movie;
        });
        setInitialData(data);
    };

    useEffect(() => {
        const data = initialData.filter((elem) => elem.id === id)[0];
        setMovieData(data);
    }, [id, initialData]);

    return (
        <>
            <MovieForm formId={`editModal-${count}`} title={movieData?.title} data={movieData} onSubmit={handleEditItem}>
                <button className="btn btn-warning mb-2">
                    Edytuj
                </button>
            </MovieForm>
            <button className="btn btn-danger" onClick={() => handleRemoveItem(id)}>Usuń</button>
        </>
    );
}
export default EditMovie;
