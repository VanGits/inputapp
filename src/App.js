import "./App.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Main from "./components/Main";
import Client from "./components/Client";
import Caregiver from "./components/Caregiver";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/client-forms/:id" element={<Client />} />
          
          <Route path={`/caregiver-forms/:id`} element={<Caregiver/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
