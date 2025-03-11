import './App.css';
import AboutPage from './pages/aboutPage/AboutPage';
import MainPage from './pages/mainPage/MainPage';

const age = 9;

function App() {

  if(age >= 10) {
    return <MainPage/>
  } return <AboutPage/>
  
}

export default App;
