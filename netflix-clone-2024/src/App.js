
import './App.css';
//import Home from "./Pages/Home/Home";

import Header from './Components/Header/Header';
import Footer from "./Components/Footer/Footer"
import Banner from './Components/Banner/Banner';
import Rowlist from './Components/Rows/Rowlist/Rowlist';




function App() {
  return (
    <div className="App">
      
      <Header />
      <Banner />
      <Rowlist />
      
      <Footer />
      
    </div>
  );
}

export default App;
