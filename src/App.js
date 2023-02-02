import './StyleSheets/App.css';
import Content from './Components/Content';
import ControlBar from './Components/ControlBar';
import Information from './Components/Information.jsx';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import icon from './images/icon.png'
import NavOptions from './Components/NavOptions';
import { Link } from 'react-router-dom';

const App = () => {

  const lang = useSelector(state=>state.languageReducer)
  const theme = useSelector(state=>state.themeReducer)

  return (
    <IntlProvider locale='es-AR' messages={lang}>
      <div className='app-container'>
        <header className={theme}>
          <Link className={`logo ${theme}`} to='/'>
            <img  className='icon' src={icon} alt='icon'/>
            <h1 className='app-title'>Movies package</h1>
          </Link> 
          <ControlBar/>
        </header>
        <nav className={theme}>
          <NavOptions/>
        </nav>
        <main className={theme}>
          <Content/>
        </main>
        <footer className={theme}>
           <Information/>
        </footer>
       </div>
    </IntlProvider>
 
  );
}

export default App;
