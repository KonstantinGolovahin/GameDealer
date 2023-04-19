import './App.css';
import Jumbotron from "./Components/Jumbotron";
import Footer from "./Components/Footer";
import bg from "./Images/BG.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {





  return (
    <div className="App"


      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        height: '100vh',
        backgroundRepeat: 'no-repeat',

      }}


    >
      <Jumbotron />

      <div className="container">
  <div className="row">
    <div className="col">
      <p>Search bar</p>
      <p>Search Results</p>
      <p>Search History</p>
    </div>
    <div className="col">
    <p>Game Description</p>
    <p>Game Deals</p>
    </div>
  </div>
  </div>
      <Footer/>

    </div>
  );
}

export default App;
