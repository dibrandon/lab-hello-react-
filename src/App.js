import Navbar from "./components/Navbar";
import Header from "./components/header"
import Card from "./components/card";

import './App.css';



function App() {
  return (
    <div className="App">

      <div className="header">
        <Navbar />
        <Header />
      </div>

      <div className="cardslist">
        <Card />
       
      </div>

    </div>
  );
}

export default App;
