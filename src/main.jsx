import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import RootAppLayout from './RootAppLayout.jsx';
import Service from './components/Service.jsx';
import ErrorPage from './ErrorPage.jsx';
import Products from './products file/Products.jsx';
import About from './about file/About.jsx';
import Shop from './shop file/Shop.jsx';
import Contact from './contact file/Contact.jsx';
import PaymentForm from './Payment.jsx';

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
        path: "/router",
        element: <Products></Products>,
        loader: () => fetch('router.json').then(res => res.json())
      },
      {
        path: "/payment",
        element: <PaymentForm></PaymentForm>,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
