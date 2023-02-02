import {useState} from 'react';
import '../StyleSheets/Search.css'
import { BsSearch } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import '../StyleSheets/Search.css'
import { Link } from 'react-router-dom';

const Search = () => {

  const theme = useSelector(state=>state.themeReducer)
  const lang = useSelector(state=>state.apiLanguage)

  const [movies, setMovies]= useState([]);
  let query = ''

const getSearch=async()=>{
  const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=fc3129275538aba4418696a566334f39&query=${query}&lang${lang}`)
  const data = await response.json()
  setMovies(data.results);
}

const handleChange=e=>{
  query = e.target.value
  if (query!=='') {
    getSearch()
  }
}

  return (
    <div className='first-search-container'>
      <div className="search-container">
        <p className='search-caption'><FormattedMessage id='search' defaultMessage='Busca peliculas y series por titulo. 👇'/>  </p>
        <div className='input-container'>
          <input
            onChange={handleChange}
            className={theme}
          />
          <BsSearch className='icon'/>
        </div>
      </div>

      {<div className="movies-container">
            {
                movies &&
                movies.map((element)=>(
                    <Link key={element.id} className={`link ${theme}`} to={`/${element.media_type}/${element.id}`}>
                      <div className="movie" key={element.id}>
                        <img className="movie-img" src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} alt={element.id}/>
                        <p className="movie-title">{element.title}</p>
                      </div>
                    </Link>
                ))
            }
        </div>}
    </div>
  );
}

export default Search;