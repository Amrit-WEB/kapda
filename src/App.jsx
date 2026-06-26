import Home from "./routes/Home";
import Navigation from "./routes/Navigation";

import { Routes, Route } from "react-router-dom";
import Signup from "./routes/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
