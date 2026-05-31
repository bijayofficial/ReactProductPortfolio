import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import MainLayout from "../layout/MainLayout.jsx";
import Home from "../pages/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<Home />} />
      <Route path="contact" element={<Home />} />
    </Route>,
  ),
);

export default router;
