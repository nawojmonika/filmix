import React, {useContext} from "react";
import {DataContext} from "../contexts/DataContext";
import MovieForm from "./MovieForm";

const EditMovie = ({id}) => {
    const {data, setInitialData} = useContext(DataContext);

    const handleEditItem = (id) => {
        // setInitialData([...filteredData]);
    };

    return (
        <MovieForm title="Nowy film" formId="addModal">
            <button className="btn btn-success col-4 my-2 mx-auto">
                <i className="bi bi-plus"></i>Dodaj film
            </button>
        </MovieForm>
    );
}
export default EditMovie;
