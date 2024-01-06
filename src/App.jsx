import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="px-[57px] pt-[43px] flex justify-center">
      <Navbar></Navbar>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
