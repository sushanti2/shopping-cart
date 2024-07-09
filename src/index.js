import React, {lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';

const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout=() =>{
  const[userName, setUserName] = useState()

  useEffect(()=>{
    const data = {
      name : "Sushant Ingale"
    }
    setUserName(data.name)
  },[])
  return (
    <div className="app">
      <UserContext.Provider value={{loggedInUser: userName, setUserName }}>
      <Header/>
      <Outlet/>
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children : [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        element: <Suspense><Grocery/></Suspense>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);

