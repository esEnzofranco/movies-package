import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SerieDetailsTemplate = ({serie}) => {

    const navigate = useNavigate()
    const theme = useSelector(state=>state.themeReducer)

    const goBack = () => {
        navigate(-1)
    }

    return(
        <div className="movie-details">
            <div className="movie-details-button-container">
                <button className={theme} onClick={goBack}><FormattedMessage id="go.back" defaultMessage='🠸 Atras'/></button>
            </div>
            <div className="movie-details-container"> 
                <img className="movie-details-image" src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt='movie-img' />
                <div className="movie-details-info-container">
                    <h1 className="movie-details-title">{serie.name}</h1>
                    <p className="movie-details-overview">{serie.overview}</p>
                    <p className="movie-details-vote-average"><b><FormattedMessage id="vote.average" defaultMessage='Voto promedio'/> </b>{serie.vote_average}</p>
                    <p className="movie-details-original-title"><b><FormattedMessage id="original.title" defaultMessage='Titulo original'/> </b>{serie.name}</p>
                    <p className="movie-details-release-date"><b><FormattedMessage id="release.date" defaultMessage='lanzamiento'/> </b>{serie.first_air_date}</p>
                </div>
            </div>
        </div>
    )
}

export default SerieDetailsTemplate;