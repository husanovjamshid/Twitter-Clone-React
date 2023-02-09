import { Login } from "./components/Registration/Login/Login";
import { Register } from "./components/Registration/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { Main } from "./components/Feed/Main/Main";
function App() {
  return (
    <div className="container position-relative">
      <Main />
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
