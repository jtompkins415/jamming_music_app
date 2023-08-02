
 
function SearchBar({handleUserInput}) {



    return (
        <div className="searchbar-main-container">
            <div className="searchbar-form-container">
                <form className="searchbar-form">
                    <label>Search By Title: </label>
                    <input 
                    type="text" 
                    id='search-input' 
                    name="search-input"
                    onChange={handleUserInput}
                    />
                </form>
            </div>
        </div>
    )
};

export default SearchBar;