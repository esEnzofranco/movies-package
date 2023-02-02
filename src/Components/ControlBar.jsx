import '../StyleSheets/ControlBar.css'
import Languages from './Languages';
import Themes from './Themes';

const ControlBar = () => {

    return(
        <div className="control-bar">
            <Languages />
            <Themes />
        </div>
    )
}

export default ControlBar;