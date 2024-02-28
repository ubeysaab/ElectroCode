import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

// ** things importing from library or from works 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ** component 
import Layout from "./Components/Layout";

// ** pages 
import Home from "./pages/Home";
import Vizyon from "./pages/Vizyon";
import Hakkimizda from "./pages/Hakkimizda";
import Ortaklarimiz from "./pages/Ortaklarimiz";
import Duyurular from "./pages/Duyurular";
import Projelerimiz from "./pages/Projelerimiz";
import Iletisim from "./pages/Iletisim";





function App() {
    let[width,setWidth] = useState(window.innerWidth)
   // Here for responsive design i will track width of screen for responsive design 
    useEffect(()=>{
      window.addEventListener("resize", ()=>{
        setWidth(window.innerWidth)
        console.log(width)
      })
      // for event listeners we don't neet to dependencies array
    })
  
  
  // HERE : i will define layout for all page using Router layout 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout width ={width}/>,
      children :[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/vizyon",
          element:<Vizyon/>
        },
        {
          path:"/hakkimizda",
          element:<Hakkimizda/>
        },
        {
          path:"/duyurular",
          element:<Duyurular/>
        },
        {
          path:"/projelerimiz",
          element:<Projelerimiz/>
        },
        {
          path:"/isOrtaklarimiz",
          element:<Ortaklarimiz/>
        },
        {
          path:"iletisim",
          element:<Iletisim/>
        },
      ]
    },
  ]);








// * From here app render 















  return (
    <>
    <div className='app'>

      <div className='container'>

        <RouterProvider router={router}/>

      </div>

    </div>
    </>
  );
}

export default App;
