import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginView, HomeView } from "../views";
import { Header } from "../components"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
