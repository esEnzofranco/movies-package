import { FormattedMessage }from 'react-intl'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { initialPage } from '../Redux/Reducers/PageReducer.js'
import '../StyleSheets/NavOptions.css'

const NavOptions = () => {

    const dispatch = useDispatch()
    const theme = useSelector(state=>state.themeReducer)

    return(
        <div className='content-options'>
            <Link onClick={()=>dispatch(initialPage)} className={`nav-link ${theme}`} to='./'>{<FormattedMessage id='button.home' defaultMessage='Home' />}</Link>
            <Link onClick={()=>dispatch(initialPage)} className={`nav-link ${theme}`} to='./movies'>{<FormattedMessage id='button.movies' defaultMessage='Peliculas' />}</Link>
            <Link onClick={()=>dispatch(initialPage)} className={`nav-link ${theme}`} to='./tv'>{<FormattedMessage id='button.series' defaultMessage='Series' />}</Link>
            <Link onClick={()=>dispatch(initialPage)} className={`nav-link ${theme}`} to='./search'>{<FormattedMessage id='button.search' defaultMessage='Busqueda' />}</Link>
        </div>
    )
}

export default NavOptions;