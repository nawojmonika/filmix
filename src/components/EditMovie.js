import React, {useContext} from "react";
import {DataContext} from "../contexts/DataContext";

const EditMovie = ({id}) => {
    const {data, setInitialData} = useContext(DataContext);

    const handleRemoveItem = (id) => {
        const filteredData = data.filter((elem) => elem.id != id);
        setInitialData([...filteredData]);
    };

    const handleEditItem = (id) => {
        const filteredData = data.filter((elem) => elem.id != id);
        // setInitialData([...filteredData]);
    };

    return (
        <>
            <button className="btn btn-warning mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Edytuj
            </button>
            <button className="btn btn-danger" onClick={() => handleRemoveItem(id)}>Usuń</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default EditMovie;
