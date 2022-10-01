import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import MenuBar from "./Pages/Shared/MenuBar/MenuBar";


function App() {
  return (
    <div className="font-[Helvetica]">
       <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <MenuBar></MenuBar>
    </div>
  );
}

export default App;
