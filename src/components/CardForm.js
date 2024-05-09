import React, { useState, useRef } from 'react';

function CardForm({
    aggiungiCitta,
    modificaCitta,
    isEdit,
    title = '',
    imgURL = '',
    description = '',
    isVisited = false,  
}) {
    const formRef = useRef(null); // Riferimento al form

    const [titleState, setTitleState] = useState(title);
    const [imgURLState, setImgURLState] = useState(imgURL);
    const [descriptionState, setDescriptionState] = useState(description);
    const [isVisitedState, setIsVisitedState] = useState(isVisited);

    // Funzione per gestire l'invio del form
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        const formData = new FormData(formRef.current); // Get form data
        
        const city = {
            title: formData.get("title"),
            imgURL: formData.get("imgURL"),
            isVisited: formData.get("isVisited") === "on", // Checkbox ritorna "on" se è selezionato
            description: formData.get("description")
        };
        aggiungiCitta(city);
        //vado a resettare i campi del form
        setTitleState('');
        setImgURLState('');
        setDescriptionState('');
        setIsVisitedState(false);
    };

    const inviaModifica = (e) => {
        e.preventDefault(); 
        const city = {
            title: titleState,
            imgURL: imgURLState,
            isVisited: isVisitedState, // Checkbox ritorna "on" se è selezionato
            description: descriptionState
        };
        modificaCitta(city);
    };

    // Funzione per gestire il cambio di valore degli input
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        // Aggiorna lo stato corrispondente in base al nome dell'input
        switch (name) {
            case 'title':
                setTitleState(value);
                break;
            case 'imgURL':
                setImgURLState(value);
                break;
            case 'description':
                setDescriptionState(value);
                break;
            case 'isVisited':
                setIsVisitedState(type === 'checkbox' ? checked : value);
                break;
            default:
                break;
        }
    };

    return (
        <form ref={formRef} className="form-tabella">
            <h2>Aggiungi Citta</h2>
            <div>
                <label>Nome città</label>
                <input type="text" name="title" value={titleState} onChange={handleInputChange}></input>
            </div>
            <div>
                <label>Descrizione</label>
                <textarea name="description" value={descriptionState} onChange={handleInputChange}></textarea>
            </div>
            <div>
                <label>Immagine</label>
                <input type="text" name="imgURL" value={imgURLState} onChange={handleInputChange}></input>
            </div>
            <div>
                <label>Visitata?</label>
                <input type="checkbox" name="isVisited" checked={isVisitedState} onChange={handleInputChange}></input>
            </div>

            {!isEdit && (
            <>
                <button type="button" onClick={handleSubmit}>Aggiungi Card</button>
            </>
            )}
            {isEdit && (
            <>
                <button type="button" onClick={inviaModifica}>Modifica</button>
            </>
            )}

        </form>
    );
}

export default CardForm;
