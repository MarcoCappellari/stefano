import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import CardForm from './CardForm';


function CardList() {
    const [citta, setCitta] = useState([
        {
            uuid: uuidv4(),
            title: "Roma",
            imgURL: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVisited: true,
            description: "Descrizione 0",
        },
        {
            uuid: uuidv4(),
            title: "Parigi",
            imgURL: "https://images.unsplash.com/photo-1590539004476-229c6ff684e6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVisited: false,
            description: "Descrizione 1"
        },
        {
            uuid: uuidv4(),
            title: "New York",
            imgURL: "https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVisited: true,
            description: "Descrizione 2"
        },
        {
            uuid: uuidv4(),
            title: "India",
            imgURL: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVisited: false,
            description: "Descrizione 3"
        }
    ]);

    const aggiungiCitta = (Newcity) => {
        setCitta([...citta, {...Newcity,uuid: uuidv4()}]);
    }

    const eliminaCitta = (keyCity) => {
        const updatedCities = citta.filter(city => city.uuid !== keyCity);
        setCitta(updatedCities);
    }

    const modificaCitta = (modifiedCity, keyCity) => {
        const updatedCities = citta.map(city => {
            if (city.uuid === keyCity) {
                return ({uuid: city.uuid, ...modifiedCity});
            }
            return city;
        });
        setCitta(updatedCities);
    }
    
    return ( 
        <>
            <CardForm 
            aggiungiCitta = {aggiungiCitta}
            />
            {citta.map((city) => {
                return (
                <Card
                    key = {city.uuid}
                    title = {city.title}
                    imgURL = {city.imgURL}
                    description = {city.description}
                    isVisited = {city.isVisited}
                    eliminaCitta = {() => eliminaCitta(city.uuid)}
                    modificaCitta = {(modifiedCity) => modificaCitta(modifiedCity, city.uuid)}
                >
                </Card>
            )})}
        </>
    );
}

export default CardList;
