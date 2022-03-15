import { Styled } from "../Pagination/Styled"

export function Pagination() {
    return <Styled className="pagination-container col-xs-12 col-sm-12">
        <ul>
            <li>
              <button>
                  {`<<`} </button>  
            </li>
            <li>
              <button>
                  Previous</button>  
            </li>
            <li>
              <button>
                  1</button>  
            </li>
            <li>
              <button>
                  2</button>  
            </li>
            <li>
              <button>
                  3</button>  
            </li>
            <li>
              <button>
                  Next</button>  
            </li>
            <li>
              <button>
                  {`>>`} </button>  
            </li>
        </ul>
        </Styled>
}