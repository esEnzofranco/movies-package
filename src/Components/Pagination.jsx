import '../StyleSheets/Pagination.css'
import { FormattedMessage } from 'react-intl';

const Pagination = ({ onPrevious,onNext,page }) => {

    return(
        <div className="switch-page-container">
            <div onClick={onPrevious} className="switch-button">
                <p className='prev-next-button'><FormattedMessage id='button.previous' defaultMessage='🠸 Anterior'/></p>    
            </div>
            <div className="display">{page}</div>
            <div onClick={onNext} className="switch-button">
                <p className='prev-next-button'><FormattedMessage id='button.next' defaultMessage='Siguiente 🠺'/></p>
            </div>
        </div>
    )
}

export default Pagination;