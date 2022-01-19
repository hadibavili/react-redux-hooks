import Input from "../UI/Input";
import { useReducer } from "react";
import { State, Action } from "../../interfaces/types";
import { useNavigate } from "react-router-dom";

const formReducer = (state: State, action: Action): State => {
   switch (action.type) {
      case "EMAIL":
         return { email: action.payload, password: state.password };
      case "PASSWORD":
         return { email: state.email, password: action.payload };

      default:
         return state;
   }
};
const initialState = { email: "", password: "" };

const Login: React.FC<any> = props => {
   const [formState, dispatchForm] = useReducer(formReducer, initialState);
   const navigate = useNavigate();

   const submitLoginHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (formState.email.includes("@") && formState.password.length > 6) {
         props.onLogin();
         navigate("/");
      }
   };

   const inputOnchangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
      const key = e.currentTarget.id.toUpperCase();
      dispatchForm({
         type: key === "EMAIL" ? "EMAIL" : "PASSWORD",
         payload: e.currentTarget.value.trim(),
      });
   };
   return (
      <>
         <form onSubmit={submitLoginHandler}>
            <div className="row">
               <div className="col-md-12 d-flex justify-content-center mt-5">
                  <h1>Welcome to movie app</h1>
               </div>
            </div>
            <div
               className="col-md-12 justify-content-center m-auto"
               style={{ width: 300 }}
            >
               <Input
                  type="text"
                  title="Email Address"
                  placeholder="Ex: hadi@gmail.com"
                  onChange={inputOnchangeHandler}
                  value={formState.email}
                  id="email"
               />
            </div>
            <div
               className="col-md-12 justify-content-center m-auto mt-2"
               style={{ width: 300 }}
            >
               <Input
                  type="password"
                  title="password"
                  placeholder="Ex: 12345678"
                  onChange={inputOnchangeHandler}
                  value={formState.password}
                  id="password"
               />
            </div>
            <div
               className="col-md-12 justify-content-center mt-2 m-auto"
               style={{ width: 300 }}
            >
               <button
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                  type="submit"
               >
                  Login
               </button>
            </div>
         </form>
      </>
   );
};

export default Login;
