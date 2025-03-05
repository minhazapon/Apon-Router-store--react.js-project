import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import RootAppLayout from './RootAppLayout.jsx';
import Contact from './components/Contact.jsx';
import Shop from './components/Shop.jsx';
import Service from './components/Service.jsx';
import ErrorPage from './ErrorPage.jsx';
import Products from './products file/Products.jsx';
import FormCompo, { handleForm } from './form component/FormComponent.jsx';
import About from './about file/About.jsx';

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
        path: "/contactForm",
        element: <FormCompo></FormCompo>,
        action: handleForm
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
