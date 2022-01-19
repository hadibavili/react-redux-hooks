import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { useContext } from "react";
import Login from "../pages/Login";
import LoginContext from "../../store/login-context";

const RouteLogin = () => {
   const { loginHandler, isLogin } = useContext(LoginContext);
   return (
      <>
         <Routes>
            <Route
               path="/login"
               element={
                  !isLogin ? <Login onLogin={loginHandler} /> : <Dashboard />
               }
            />

            <Route
               path="/"
               element={isLogin ? <Dashboard /> : <Navigate to="/login" />}
            ></Route>
         </Routes>
      </>
   );
};

export default RouteLogin;
