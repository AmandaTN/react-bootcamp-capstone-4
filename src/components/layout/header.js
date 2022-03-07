import { Title } from '../common/Title_Styled'
import { SearchBar } from "../common/SearchBar"
import { Icon } from '../common/Icon'

export const Header = () => {
    return(
        <div className="header">
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-8'>
                    <Title as='h4'>Pietra</Title>
                </div>
                <div className='col-xs-8 col-sm-8 col-md-3'>
                    <SearchBar placeholder='Search'>
                    <Icon iconName='BiSearchAlt2' />
                    </SearchBar>
                </div>
                <div className='col-xs-4 col-sm-4col-md-1'>
                    <Icon iconName='BiCartAlt' />
                </div>
            </div>
        </div>
    )
}