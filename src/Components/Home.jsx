import { useEffect, useState } from "react";
import { AiOutlineCalendar, AiOutlineStar } from 'react-icons/ai'
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../StyleSheets/Home.css'
import '../StyleSheets/App.css'

const Home = () => {

    const [movies,setMovies] = useState([])
    const [series,setSeries] = useState([])
    const lang = useSelector(state=>state.apiLanguage)
    const theme = useSelector(state=>state.themeReducer)

    const getMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fc3129275538aba4418696a566334f39&language=${lang}`); 
        const data = await response.json();
        setMovies(data.results)
    }
    const getSeries = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=fc3129275538aba4418696a566334f39&language=${lang}`); 
            const data = await response.json();
            setSeries(data.results)
        }

    useEffect(()=>{
        getMovies(); // eslint-disable-next-line
        getSeries(); // eslint-disable-next-line
    },[lang])

    return(
        <div className="home-container">
            <div className="home-content-container">
                <div className="content-title-container">
                    <h1 className="caption"><FormattedMessage id='home.movies' defaultMessage='Peliculas populares'/></h1>
                </div>
                <div className="content home-content-bar">
                    {
                        movies.map(element=>(
                            <Link className={`link ${theme}`} to={`movie/${element.id}`} key={element.id}>
                                <div className="movie">
                                    <div>
                                        <img className="movie-img" src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} alt={element.id}/>
                                        <div className="movie-info-container">
                                            <p className="movie-data">{element.vote_average} <AiOutlineStar className="movie-info-icon"/></p>
                                            <p className="movie-data">{element.release_date.slice(0,4)} <AiOutlineCalendar className="movie-info-icon"/></p>
                                        </div>
                                    </div>
                                    <p className="movie-title">{element.title}</p>
                                 </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className="home-content-container">
                <div className="content-title-container">
                    <h1 className="caption"><FormattedMessage id='home.series' defaultMessage='Series populares'/></h1>
                </div>
                    <div className="content home-content-bar">
                    {
                        series.map((element)=>(
                            <Link className={`link ${theme}`} to={`/tv/${element.id}`} key={element.id}>
                                <div className="series">
                                    <img className="movie-img" src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} alt={element.id}/>
                                    <div className="movie-info-container">
                                        <p className="movie-data">{element.vote_average} <AiOutlineStar className="movie-info-icon"/></p>
                                        <p className="movie-data">{element.first_air_date.slice(0,4)} <AiOutlineCalendar className="movie-info-icon"/></p>
                                    </div>
                                    <p className="movie-title">{element.name}</p>
                                </div>
                            </Link>
                        ))
                    }
                    </div>
            </div>
        </div>
    )
}

export default Home