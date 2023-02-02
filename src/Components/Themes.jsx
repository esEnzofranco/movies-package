import { MdLightMode,MdNightlight } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { light,dark } from '../Redux/Reducers/Theme'
import '../StyleSheets/Themes.css'

const Themes = () => {

    const dispatch = useDispatch()

return(
    <div className="themes-container">
            <div onClick={()=>dispatch(light)} 
            className='theme-option'>
                <MdLightMode className='theme-icon' />
            </div>
            <div onClick={()=>dispatch(dark)} className='theme-option'>
                <MdNightlight className='theme-icon' />
             </div>
    </div>
)
}

export default Themes;