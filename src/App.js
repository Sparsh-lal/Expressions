import FaceDetection from "./components/FaceDetection";
import Welcome from "./components/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       {/* <Route path="/expression" element={<Welcome />} /> */}
        <Route path="/expression" element={<FaceDetection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
