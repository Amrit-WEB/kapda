import Home from "./routes/Home";
import Navigation from "./routes/Navigation";

import { Routes, Route } from "react-router-dom";
import Authenticate from "./routes/Authenticate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authenticate />} />
      </Route>
    </Routes>
  );
}

export default App;
