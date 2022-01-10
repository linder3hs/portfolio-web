import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginView, HomeView } from "../views";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
