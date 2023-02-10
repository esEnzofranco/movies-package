import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import '../StyleSheets/Error404.css'

const Error404 = () => {

    const theme = useSelector(state=>state.themeReducer)
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }

    return(
        <div className="error-container">
            <h1>Error 404</h1>
            <p><FormattedMessage id='error.message' defaultMessage=''/></p>
            <div className="movie-details-button-container">
                <button className={theme} onClick={goBack}><FormattedMessage id="go.back" defaultMessage='🠸 Atras'/></button>
            </div>
        </div>
    )
}

export default Error404;