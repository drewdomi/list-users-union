import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import User from "./views/User";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/user/*" element={<User />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;