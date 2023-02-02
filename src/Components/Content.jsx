import Movies from './Movies';
import Series from './Series';
import Search from './Search';
import Home from './Home'; 
import MovieDetails from './MovieDetails';
import { Route, Routes } from 'react-router-dom';
import SerieDetails from './SerieDetails';
import '../StyleSheets/Content.css'

const Content = () => {
    return(
        <div className='content'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/movies' element={<Movies/>}/>
                <Route path='/movie/:id' element={<MovieDetails/>} />
                <Route path='/tv' element={<Series/>}/>
                <Route path='/tv/:id' element={<SerieDetails/>}/>
                <Route path='/search' element={<Search/>}/>

                <Route path='*' element={'error'}/>
            </Routes>
        </div>
    )
}

export default Content;