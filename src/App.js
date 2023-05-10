import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Client from "./components/Client";
import Caregiver from "./components/Caregiver";


function App() {

  const url = "https://inputserver.herokuapp.com" || "http://localhost:9292"
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/client-forms/:id" element={<Client url = {url}/>} />
          
          <Route path={`/caregiver-forms/:id`} element={<Caregiver url = {url}/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
