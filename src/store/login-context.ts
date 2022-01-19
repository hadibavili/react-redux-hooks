import React from "react";
import { IThemeContext } from "../interfaces/interface";

const defaultState = {
   isLogin: false,
};

const LoginContext = React.createContext<IThemeContext>(defaultState);
export default LoginContext;
