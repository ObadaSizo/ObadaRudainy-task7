import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from "./pages/About";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AddToCard from './pages/AddToCard';
import Edit from './pages/Edit';
import Delete from './pages/Delete';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
      path:"about",
      element:<About />
      },
      {
      path:"home",
      element:<Home />
      },
      {
      path:"login",
      element:<Login />
      },
      {
      path:"register",
      element:<Register />
      },
      {
      path:"add-to-card",
      element:<AddToCard />
      },
      {
      path:"edit",
      element:<Edit />
      },
      {
      path:"delete",
      element:<Delete />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
