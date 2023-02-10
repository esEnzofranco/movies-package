import { BiRegistered } from 'react-icons/bi'
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import '../StyleSheets/Information.css'
import { FormattedMessage } from 'react-intl'
import { useSelector } from 'react-redux'

const Information = () => {

    const theme = useSelector(state=>state.themeReducer)

    return(
        <div className='info-container'>

            <div className='info-container-section'>
                <p><BiRegistered/>2023 Movies Package, inc.</p>
                <p><FormattedMessage id='developed.by' defaultMessage='Desarrollado por'/> Enzo Franco</p>
            </div>

            <div className='info-container-section'>
                <div>
                    <a className={theme} href='https://www.instagram.com/enz0franc0/' target='blank'>
                        <AiOutlineInstagram className='info-icon'/>
                     </a>
                    <a className={theme} href='https://www.linkedin.com/in/enzo-franco/' target='blank'>
                        <AiOutlineLinkedin className='info-icon'/>  
                    </a>
                    <a className={theme} href='https://github.com/esEnzofranco/' target='blank'>
                        <AiFillGithub className='info-icon'/>  
                    </a>
                </div>
                
                <a href='https://github.com/esEnzofranco/movies-package' target='blank'><FormattedMessage id='repository' defaultMessage='Repositorio de Github' /></a>
            </div>
            
        </div>
    )
}

export default Information;