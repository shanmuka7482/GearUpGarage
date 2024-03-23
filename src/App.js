import './App.css';
import Carousel from './components/Carousel/Carousel.jsx';
import Header from "./components/Header/Header.jsx";
import Sec_1 from "./components/Sec_1/Sec_1.jsx"; //rafce short cut key


function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Sec_1/>
    </div>
  );
}

export default App;
