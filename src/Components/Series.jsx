import { useEffect, useState } from "react";
import '../StyleSheets/Movies.css'
import Pagination from './Pagination.jsx'
import { AiOutlineStar, AiOutlineCalendar } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { incrementPage, decrementPage } from '../Redux/Reducers/PageReducer.js'
import { Link } from "react-router-dom";

const Series = () => {

    const [list,setList] = useState([]);
    const page = useSelector(state=>state.pageReducer)
    const lang = useSelector(state=>state.apiLanguage)
    const dispatch = useDispatch()
    const theme = useSelector(state=>state.themeReducer)

    const getSeries = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=fc3129275538aba4418696a566334f39&page=${page}&language=${lang}`); 
        const data = await response.json();
        setList(data.results)
    }

    const onNext = () => {
        dispatch(incrementPage)
    }
    const onPrevious = () => {
        if (page>1) {
            dispatch(decrementPage)
        }
    }

    useEffect(()=>{
        getSeries() // eslint-disable-next-line
    },[lang,page])
    
    return(
        <div className="main-movies-container">
            <Pagination  
            onPrevious={onPrevious}
            onNext={onNext}
            page={page}
            />
            <div className="movies-container">
                {
                list.map((element)=>(
                    <Link className={`link ${theme}`} key={element.id} to={`/tv/${element.id}`}>
                        <div className="series" key={element.id}>
                            <img className="movie-img" src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} alt={element.id}/>
                            <div className="movie-info-container">
                                    <p>{element.vote_average} <AiOutlineStar/></p>
                                    <p>{element.first_air_date.slice(0,4)} <AiOutlineCalendar/></p>
                                </div>
                            <p className="movie-title">{element.name}</p>
                        </div>
                    </Link>
                ))
                }
            </div>
            <Pagination  
            onPrevious={onPrevious}
            onNext={onNext}
            page={page}
            />
        </div>
    )
}

export default Series;