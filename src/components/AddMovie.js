import React, {useContext} from "react";
import {DataContext} from "../contexts/DataContext";
import MovieForm from "./MovieForm";
import { v4 as uuidv4 } from 'uuid';

const AddMovie = ({id}) => {
    const {data, setData} = useContext(DataContext);

    const handleAddingItem = (values) => {
        setData([...data, {
            ...values,
            id: uuidv4()
        }]);
    };

    return (
        <MovieForm title="Nowy film" formId="addModal" onSubmit={handleAddingItem}>
            <button className="btn btn-success col-4 my-2 mx-auto">
                <i className="bi bi-plus"></i>Dodaj film
            </button>
        </MovieForm>
    );
}
export default AddMovie;
