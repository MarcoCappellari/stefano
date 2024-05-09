import React from 'react';

function SearchButton({ setButtonSearch }) {
    return (
        <div>
            <button onClick={() => setButtonSearch(true)}>Mostra solo visitate</button>
            <button onClick={() => setButtonSearch(false)}>Mostra solo non visitate</button>
            <button onClick={() => { setButtonSearch(null); }}>Mostra tutte</button>
        </div>
    );
}

export default SearchButton;
