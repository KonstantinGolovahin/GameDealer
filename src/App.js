
import './App.css';
import Jumbotron from "./Components/Jumbotron";
import bg from "./Images/BG.png";

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

      <div className='rows'>
        <div className='row'>Search</div>
        <div className='row'>Display</div>
      </div>

      <div className='rows'>
        <div className='row'>History</div>
        <div className='row'>Deals</div>
      </div>

    </div>
  );
}

export default App;
