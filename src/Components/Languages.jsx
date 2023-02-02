import englandFlag from '../images/england-flag.jpg'
import spainFlag from '../images/spain-flag.jpg'
import { englishApi, spanishApi } from '../Redux/Reducers/apiLanguage.js'
import '../StyleSheets/Languages.css'
import { useDispatch } from 'react-redux'
import { inEnglish, inSpanish } from '../Redux/Reducers/Language.js'

const Languages = () => {

    const dispatch = useDispatch()

return(
    <div className="languages-container">
            <img onClick={()=>{
                dispatch(inSpanish)
                dispatch(spanishApi)
            }}
                 className='flag' src={spainFlag} alt="spanish"/>
            <img 
                onClick={()=>{
                    dispatch(inEnglish)
                    dispatch(englishApi)
                }}
                className='flag' src={englandFlag} alt="english"
                />
    </div>
)
}

export default Languages;