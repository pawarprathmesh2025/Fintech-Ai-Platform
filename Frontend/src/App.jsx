import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Scenarios from "./pages/Scenarios";
import Compare from "./pages/Compare";
import Portfolio from "./pages/Portfolio";
import TrackPage from "./components/TrackPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scenarios" element={<Scenarios />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/tracker" element={<TrackPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;