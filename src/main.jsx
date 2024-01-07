import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Food from './Components/Food.jsx';
import Cart from './Components/Cart.jsx';
import CartProvider from './Provider/CartProvider.jsx';
import Home from './Components/Home.jsx';
import Location from './Components/Location.jsx';
import Exit from './Components/Exit.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/menu',
        element:<Food></Food>
      },
      {
        path:'/cart',
        element:<Cart></Cart>
      },
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/location',
        element:<Location></Location>
      },
      {
        path:'/exit',
        element:<Exit></Exit>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider><RouterProvider router={router} /></CartProvider>
  </React.StrictMode>,
)
