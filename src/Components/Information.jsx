import { BiRegistered } from 'react-icons/bi'
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import '../StyleSheets/Information.css'
import { FormattedMessage } from 'react-intl'
import { useSelector } from 'react-redux'

const Information = () => {

    const theme = useSelector(state=>state.themeReducer)

    return(
        <div className='info-container'>
            <p><BiRegistered/>2023 Movies Package, inc.</p>
            
            <div className='dev-info'>
                <p><FormattedMessage id='developed.by' defaultMessage='Desarrollado por'/> Enzo Franco</p>
                <a className={theme} href='https://www.instagram.com/enz0franc0/' target='blank'>
                    <AiOutlineInstagram className='info-icon'/>
                </a>
                <a className={theme} href='https://www.linkedin.com/in/enzo-franco/' target='blank'>
                    <AiOutlineLinkedin className='info-icon'/>  
                </a>
            </div>
        </div>
    )
}

export default Information;