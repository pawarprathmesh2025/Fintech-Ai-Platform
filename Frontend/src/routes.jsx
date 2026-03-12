import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import Transactions from "./pages/Transactions";
// import ScenarioSimulator from "./pages/ScenarioSimulator";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/simulator" element={<ScenarioSimulator />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;