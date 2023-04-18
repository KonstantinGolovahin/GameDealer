
import './App.css';
import Jumbotron from "./Components/Jumbotron";
import bg from "./Images/BG.png";

function App() {

 



  return (
    <div className="App"  


    style = {{
      backgroundImage:`url(${bg})`,
      backgroundSize: 'cover',
      height:'100vh',
      backgroundRepeat: 'no-repeat',
          
   }}
    
    >
          
     
     

     <Jumbotron/>
    

    </div>
  );
}

export default App;
