import { useState, useEffect } from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import '../StyleSheets/MovieDetails.css'
import PersonDetailsTemplate from "./PersonDetailsTemplate";

const PersonDetails = () => {

    const {id} = useParams()
    const lang = useSelector(state=>state.apiLanguage)
    const [person,setPerson] = useState({})

    const getPerson = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=fc3129275538aba4418696a566334f39&language=${lang}`); 
        const data = await response.json();
        setPerson(data)
    }

    useEffect(()=>{
        getPerson() // eslint-disable-next-line
    },[lang])

    return(
        <PersonDetailsTemplate person={person}/>
    )
}

export default PersonDetails