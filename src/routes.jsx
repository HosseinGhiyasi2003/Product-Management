import { Navigate } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

let routes = [
  {path: '/', element: <Navigate to='/login' />},
  {path: '/login', element: <Login />},
  {path: '/sign-up', element: <SignUp />},
]

export default routes;