import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import RootAppLayout from './RootAppLayout.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Shop from './components/Shop.jsx';
import Service from './components/Service.jsx';
import ErrorPage from './ErrorPage.jsx';
import PMain from './products file/ProductsMain.jsx';
import Products from './products file/Products.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootAppLayout></RootAppLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/products",
        element: <PMain></PMain>,
      },
      {
        path: "/router",
        element: <Products></Products>,
        loader: () => fetch("https://raw.githubusercontent.com/minhazapon/Apon-Router-store--react.js-project/refs/heads/main/public/router.json")
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
