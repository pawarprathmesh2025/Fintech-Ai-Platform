import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Scenarios from "./pages/Scenarios";
import TrackPage from "./components/TrackPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scenarios" element={<Scenarios />} />
        <Route path="/track" element={<TrackPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;