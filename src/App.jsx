import "./App.css";

import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <Routes> 
      <Route path="/" element={<Main />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}

export default App;
