import {Routes,Route} from "react-router-dom";
import './App.css';
import Addperson from "./Components/Addperson";
import Navigation from './Components/Navigation';
import PersonList from './Components/PersonList';



function App() {
  return (
    <div className="App">
   <Navigation />
    <Routes >
    <Route path="/" element={<PersonList />} />
    <Route path="/addperson" element={<Addperson />} />
    </Routes>
   
    </div>
  );
}

export default App;
