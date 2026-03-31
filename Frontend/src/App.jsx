import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import TrackPage from "./components/TrackPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/track" element={<TrackPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;