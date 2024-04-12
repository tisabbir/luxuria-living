import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import UpdateProfile from './pages/UpdateProfile';
import UserProfile from './pages/UserProfile';
import LogIn from './components/LogIn';
import Register from './components/Register';
import MainLayout from './pages/MainLayout';
import AuthProvider from './providers/AuthProvider';
import Error from './components/Error';
import EstateDetails from './pages/EstateDetails';
import ProtectedRoute from './protectedRoute/ProtectedRoute';
import CommunityDiscussion from './pages/CommunityDiscussion';

const router = createBrowserRouter([
  {
    path : "/",
    element : <MainLayout />,
    errorElement : <Error />,
    children : [
      {
        path: "/",
        element: <Home />,
        loader : ()=> fetch('/banner.json')
      },
      {
        path: "/update",
        element: <UpdateProfile />,
      },
      {
        path: "/user",
        element: <UserProfile />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/community",
        element: <CommunityDiscussion />,
      },
      {
        path: "/details/:id",
        element: <ProtectedRoute><EstateDetails /></ProtectedRoute>,
        loader: ()=> fetch("/estates.json"),
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
