import React, {useContext} from "react";
import {DataContext} from "../contexts/DataContext";
import MovieForm from "./MovieForm";

const EditMovie = ({id}) => {
    const {initialData, setInitialData} = useContext(DataContext);

    const handleRemoveItem = (id) => {
        const filteredData = initialData.filter((elem) => elem.id != id);
        setInitialData([...filteredData]);
    };

    const handleEditItem = (id) => {
        const filteredData = initialData.filter((elem) => elem.id != id);
        // setInitialData([...filteredData]);
    };

    return (
        <>
            <MovieForm formId="editModal">
                <button className="btn btn-warning mb-2">
                    Edytuj
                </button>
            </MovieForm>
            <button className="btn btn-danger" onClick={() => handleRemoveItem(id)}>Usuń</button>
        </>
    );
}
export default EditMovie;
