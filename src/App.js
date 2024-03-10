import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/Home"
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import RestaurantMenu from './components/RestaurantMenu'
import Cart from "./components/Cart";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => (
  <Provider store={appStore}>
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  </Provider>
 
);

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    errorElement : <Error/>,
    children : [
      {
        path: "/",
        element : <Home/>
      },
      {
        path: "aboutus",
        element : <AboutUs/>
      },
      {
        path : "contactus",
        element : <ContactUs/>
      },
      {
        path: "restaurant/:resId",
        element : <RestaurantMenu/>
      },
      {
        path:"cart",
        element: <Cart/>
      }
    ]
  }
  
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
