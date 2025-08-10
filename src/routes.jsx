import { Navigate } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

let routes = [
  {path: '/', element: <Navigate to='/login' />},
  {path: '/login', element: <LoginPage />},
  {path: '/sign-up', element: <SignUpPage />},
]

export default routes;