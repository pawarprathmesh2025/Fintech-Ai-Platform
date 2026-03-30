import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupScreen from "./pages/SignupScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;