import { useState, useEffect } from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import MovieDetailsTemplate from "./MovieDetailsTemplate";
import '../StyleSheets/MovieDetails.css'

const MovieDetails = () => {

    const {id} = useParams()
    const lang = useSelector(state=>state.apiLanguage)
    const [movie,setMovie] = useState({})

    const getMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fc3129275538aba4418696a566334f39&language=${lang}`); 
        const data = await response.json();
        setMovie(data)
    }

    useEffect(()=>{
        getMovie() // eslint-disable-next-line
    },[lang])

    return(
        <MovieDetailsTemplate movie={movie}/>
    )
}

export default MovieDetails