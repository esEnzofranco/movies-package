import { useState, useEffect } from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import '../StyleSheets/MovieDetails.css'
import SerieDetailsTemplate from "./SerieDetailsTemplate";

const SerieDetails = () => {

    const {id} = useParams()
    const lang = useSelector(state=>state.apiLanguage)
    const [serie,setSerie] = useState({})

    const getSerie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=fc3129275538aba4418696a566334f39&language=${lang}`); 
        const data = await response.json();
        setSerie(data)
        console.log(data)
    }

    useEffect(()=>{
        getSerie() // eslint-disable-next-line
    },[lang])

    return(
        <SerieDetailsTemplate serie={serie}/>
    )
}

export default SerieDetails