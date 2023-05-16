import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import History from "./components/History";
import Home from "./components/Home";
import Members from "./components/Members";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<History />} path="/history" />
        <Route element={<Members />} path="/members" />
      </Routes>
    </div>
  );
}

export default App;
