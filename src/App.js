import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import LandingPage from "./Components/LandingPage";

function App(){
  return(
    <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<LandingPage />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
