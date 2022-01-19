import Login from "./components/pages/Login";
import LoginContext from "./store/login-context";
import Dashboard from "./components/pages/Dashboard";
import { Route, Navigate, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
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
            {Math.random()}
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
}

export default App;
