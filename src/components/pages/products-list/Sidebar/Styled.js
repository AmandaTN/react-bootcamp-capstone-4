import styled from 'styled-components'

export const Styled = styled.div `
    font-size: 1.3em;
    
    ul {
        padding-left: 20px;
    }
    
    li {
        list-style-type:none;
        margin-bottom: 10px;

        input {
            margin-right: 10px;
        }
    }

    li.checked {
        font-weight: 700;
    }
`