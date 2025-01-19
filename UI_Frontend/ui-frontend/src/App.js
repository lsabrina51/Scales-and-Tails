import logo from './logo.svg';
import './App.css';
import Navbar from './Main/Navbar/Navbar';
import Collage from './Main/Collage/Collage';
import AboutUs from './Main/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Collage/>
      <AboutUs/>
    </div>
  );
}

export default App;
