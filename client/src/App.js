import Main from "./pages/Main/Main";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
