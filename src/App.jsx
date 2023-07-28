import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Secondpage from "./page/Secondpage";
import First from "./page/First";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/page2" element={<Secondpage />} />
      </Routes>
    </div>
  );
}

export default App;
