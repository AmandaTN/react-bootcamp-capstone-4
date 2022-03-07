import styled, {} from 'styled-components'

export function SearchBar({placeholder, children}) {
    return(
        <div>
            <input placeholder={placeholder} />
            <button>
            {children}
            </button>
        </div>
    )
}