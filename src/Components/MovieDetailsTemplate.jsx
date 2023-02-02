import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../StyleSheets/MovieDetails.css'

const MovieDetailsTemplate = ({movie}) => {

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
                <img className="movie-details-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='movie-img' />
                <div className="movie-details-info-container">
                    <h1 className="movie-details-title">{movie.title}</h1>
                    <p className="movie-details-overview">{movie.overview}</p>
                    <div className="movie-details-data">
                        <p><b><FormattedMessage id="vote.average" defaultMessage='Voto promedio'/> </b>{movie.vote_average}</p>
                        <p><b><FormattedMessage id="original.title" defaultMessage='Titulo original'/> </b>{movie.title}</p>
                        <p><b><FormattedMessage id="release.date" defaultMessage='lanzamiento'/> </b>{movie.release_date}</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default MovieDetailsTemplate;