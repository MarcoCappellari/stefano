function Search({
    setSearchTerm,
    searchTerm
    }) {


    return (
        <div>
            <input
                type="text"
                placeholder="Cerca città..."
                value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value)}}
            />
        </div>
    );
}

export default Search;
