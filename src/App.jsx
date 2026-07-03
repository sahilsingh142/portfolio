import { Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import SahilResume from "./Component/Resume";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio/>}/>
        <Route path="/resume" element={<SahilResume/>}/>
      </Routes>
    </>
  )
}

export default App