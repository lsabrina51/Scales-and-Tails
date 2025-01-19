import logo from './logo.svg';
import './App.css';
import Navbar from './Main/Navbar/Navbar';
import Collage from './Main/LandingPage/Collage/Collage';
import AboutUs from './Main/AboutUs/AboutUs';
import DemoCards from './Main/DemoCards/DemoCards';
import LandingPage from './Main/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <AboutUs/>
      <DemoCards/>
    </div>
  );
}

export default App;
