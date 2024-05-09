import CardForm from './CardForm';
import { useState } from 'react';

function Card({ title, imgURL, description, isVisited, eliminaCitta, modificaCitta }) {

    const [isEdit, setIsEdit] = useState(false);

    const cambiaModalita = () => {
        setIsEdit(!isEdit);
    }

    return (
        <div className="carta">
            {!isEdit && (
                <>
                    <img className="carta" src={imgURL} alt="" />
                    <h2>{title}</h2>
                    <p>{description}</p>
                    {isVisited ? <span>✅ Visitata</span> : <span>❌ Non visitata</span>}
                    <div>
                        <button onClick={eliminaCitta}>Elimina</button>
                        <button onClick={cambiaModalita}>Modifica</button>
                    </div>
                </>
            )}
            {isEdit && (
                <CardForm
                    title={title}
                    imgURL={imgURL}
                    description={description}
                    isVisited={isVisited}
                    isEdit={isEdit}
                    modificaCitta={(city) => {
                        modificaCitta(city)
                        setIsEdit(false)
                    }}
                />
            )}
        </div>
    );
}

export default Card;
