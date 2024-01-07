import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import { useContext } from "react";
import { cartContext } from "./Provider/CartProvider";

function App() {
  const { enter } = useContext(cartContext);
  return (
    <div>
      <div className="px-[57px] pt-[43px] flex justify-center">
        <Navbar></Navbar>
        {enter ? null : (
          <div className="flex justify-center w-full mt-20">
            <h1 className="text-centet text-3xl font-semibold">Please click on the left side navbar to check my completed task.</h1>
          </div>
        )}
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
