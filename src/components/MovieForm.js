import React, {useRef} from "react";

const MovieForm = ({formId, title, onSubmit, children}) => {
    const getCheckedValues = (checkList) => checkList.filter(({checked}) => checked).map(({value}) => value);
    const closeBtn = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const {title, url, price, year, genre, lang, desc} = event.target;
        const checkedGenre = getCheckedValues([...genre]);
        const checkedLang = getCheckedValues([...lang]);
        const values = {
            title: title.value,
            url: url.value,
            price: Number(price.value),
            year: Number(year.value),
            genre: checkedGenre,
            lang: checkedLang,
            desc: desc.value
        };
        onSubmit && onSubmit(values);
        closeBtn.current.click();
    }
    return (
        <>
            <div data-bs-toggle="modal" data-bs-target={`#${formId}-modal`}>
                {children}
            </div>
            <div className="modal fade" id={`${formId}-modal`} tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close" ref={closeBtn}/>
                        </div>
                        <div className="modal-body">
                            <form id={formId} onSubmit={handleSubmit}>
                                <label htmlFor="title" className="form-label">Tytuł</label>
                                <input type="text" className="form-control" id="title" name="title"/>
                                <label htmlFor="url" className="form-label mt-2">Url okładki</label>
                                <input type="text" className="form-control" id="url" name="url"/>
                                <div className="row g-2 my-2">
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="number" className="form-control" id="price" name="price"
                                                   inputMode="decimal" step={0.01}/>
                                            <label htmlFor="price">Cena</label>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="number" className="form-control" id="year" name="year"
                                                   min="1950" max="2021" placeholder="2021"/>
                                            <label htmlFor="Year">Rok produkcji</label>
                                        </div>
                                    </div>
                                </div>
                                <label className="form-label my-2">Gatunek</label>
                                <div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="Thriller"
                                               value="Thriller" name="genre"/>
                                        <label className="form-check-label" htmlFor="Thriller">Thriller</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="Dramat"
                                               value="Dramat" name="genre"/>
                                        <label className="form-check-label" htmlFor="Dramat">Dramat</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="Komedia"
                                               value="Komedia" name="genre"/>
                                        <label className="form-check-label" htmlFor="Komedia">Komedia</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="Horror"
                                               value="Horror" name="genre"/>
                                        <label className="form-check-label" htmlFor="Horror">Horror</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="Romans"
                                               value="Romans" name="genre"/>
                                        <label className="form-check-label" htmlFor="Romans">Romans</label>
                                    </div>
                                </div>
                                <label className="form-label my-2">Język</label>
                                <div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="Angielski"
                                               value="Angielski" name="lang"/>
                                        <label className="form-check-label" htmlFor="Angielski">Angielski</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="Niemiecki"
                                               value="Niemiecki" name="lang"/>
                                        <label className="form-check-label" htmlFor="Niemiecki">Niemiecki</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="Polski"
                                               value="Polski" name="lang"/>
                                        <label className="form-check-label" htmlFor="Polski">Polski</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="Włoski"
                                               value="Włoski" name="lang"/>
                                        <label className="form-check-label" htmlFor="Włoski">Włoski</label>
                                    </div>
                                </div>
                                <label htmlFor="desc" className="form-label mt-2">Opis</label>
                                <textarea className="form-control" id="desc" rows="3" name="desc"/>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" type="submit" form={formId}>Zapisz
                            </button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Zamknij</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieForm;
