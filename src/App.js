import './App.css';
import Jumbotron from "./Components/Jumbotron";
import Searchbar from "./Components/Searchbar"
import Playlist from "./Components/Playlist"
import GameDetails from "./Components/Card_Game_Details"
import Footer from "./Components/Footer";
import bg from "./Images/BG.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListCard from './Components/Card_Playlist';



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

      <div className="container-fluid">
  <div className="row">
    <div className="col">
      <div className='titleText'>
        <h1 className="title display-2 my-5">Game Dealer</h1>
        </div>
    <div><Searchbar/></div>
    <div><ListCard/></div>
     <div><Playlist /></div>
      <p>Search History</p>
    </div>
    
  </div>
  </div>
      <Footer/>

    </div>
    
  );
}

export default App;
