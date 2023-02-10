import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../StyleSheets/MovieDetails.css'

const PersonDetailsTemplate = ({person}) => {

    const navigate = useNavigate()
    const theme =useSelector(state=>state.themeReducer)

    const goBack = () => {
        navigate(-1)
    }

    return(
        <div className="movie-details">
            <div className="movie-details-button-container">
                <button className={theme} onClick={goBack}><FormattedMessage id="go.back" defaultMessage='🠸 Atras'/></button>
            </div>
            <div className="movie-details-container">
                <img className="movie-details-image" src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt='person-img' />
                <div className="movie-details-info-container">
                    <h1 className="movie-details-title">{person.name}</h1>
                    <p className="movie-details-overview">{person.known_for_department}</p>
                    <div className="movie-details-data">
                        <p><b><FormattedMessage id="place.of.birth" defaultMessage='Lugar de nacimiento:'/> </b>{person.place_of_birth}</p>
                        <p><b><FormattedMessage id="also.known.as" defaultMessage='Tambien conocido como:'/> </b>{person.also_known_as}</p>
                        <p><b><FormattedMessage id="birthday" defaultMessage='Fecha de nacimiento'/> </b>{person.birthday}</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default PersonDetailsTemplate;