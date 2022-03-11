export function SearchBar({placeholder, children}) {
    return(
        <div>
            <input placeholder={placeholder} type='search'/>
            <button>
            {children}
            </button>
        </div>
    )
}