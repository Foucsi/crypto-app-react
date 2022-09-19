import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "../src/Pages/Home";
import Welcome from "./Pages/Welcome";

const Application = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #222f60;
`;

function App() {
  return (
    <Application>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Application>
  );
}

export default App;
