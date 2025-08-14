import { Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProductsListPage from "./pages/ProductsListPage";
import RegisterPage from "./pages/RegisterPage";

let routes = [
  { path: "/", element: <Navigate to="/login" /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  {
    path: "/products-list",
    element: <ProductsListPage/>
  },
];

export default routes;