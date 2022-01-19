import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../components/pages/Dashboard";
import Login from "../components/pages/Login";
import LoginContext from "./login-context";

const LoginContextProvider: React.FC = props => {
   const [isLogin, setIsLogin] = useState(true);
   useEffect(() => {
      if (localStorage.getItem("isLogin") === "true") {
         setIsLogin(true);
      } else {
         setIsLogin(false);
      }
   }, []);
   const loginHandler = () => {
      localStorage.setItem("isLogin", "true");
      setIsLogin(true);
   };
   return (
      <LoginContext.Provider value={{ isLogin, handleLogin: loginHandler }}>
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
      </LoginContext.Provider>
   );
};

export default LoginContextProvider;
