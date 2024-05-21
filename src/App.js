import "./App.css";
import Landing from "./components/Landing";
import HeaderComponent from "./components/Header"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
  <>
    <Router>
      <HeaderComponent/>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  </>
  )
}

export default App;
