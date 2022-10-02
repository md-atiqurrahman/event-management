import { Route, Routes } from "react-router-dom";
import AddEventDetails from "./Pages/AddEventDetails/AddEventDetails";
import EventDetails from "./Pages/EventDetails/EventDetails";
import Home from "./Pages/Home/Home/Home";
import ToolsBar from "./Pages/Shared/ToolsBar/ToolsBar";


function App() {
  return (
    <div className="font-[Helvetica] bg-[#F6F2FF]">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addEventDetails" element={<AddEventDetails/>}/>
        <Route path="/eventDetails" element={<EventDetails/>}/>
      </Routes>
      <ToolsBar/>
    </div>
  );
}

export default App;
