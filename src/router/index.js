import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginView, HomeView, PostView, WorksView } from "../views";
import { Header } from "../components"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/login" element={<LoginView />} />
          <Route path="/posts" element={<PostView />} />
          <Route path="/works" element={<WorksView />} />
          <Route path="/" element={<HomeView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
