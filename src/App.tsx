import LoginContextProvider from "./store/LoginContextProvider";
import RouteLogin from "./components/routes/RouteLogin";

function App() {
   return (
      <LoginContextProvider>
         <RouteLogin />
      </LoginContextProvider>
   );
}

export default App;
