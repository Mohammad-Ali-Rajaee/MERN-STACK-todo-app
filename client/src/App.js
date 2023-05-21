import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import History from "./components/History";
import Home from "./components/Home";
import Members from "./components/Members";
import Login from "./components/Login";
import Register from "./components/Register";
import ConfirmEmail from "./components/ConfirmEmail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/app/todos">
          <Route element={<Home />} path="home" />
          <Route element={<History />} path="history" />
          <Route element={<Members />} path="members" />
        </Route>
        <Route path="/api/auth">
          <Route element={<Login />} path="login" />
          <Route element={<Register />} path="register" />
          <Route element={<ConfirmEmail />} path="confirm-email/:emailtoken" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
