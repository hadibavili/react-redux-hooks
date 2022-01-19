import { useEffect, useState } from "react";

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
      <LoginContext.Provider value={{ isLogin, loginHandler }}>
         {props.children}
      </LoginContext.Provider>
   );
};

export default LoginContextProvider;
