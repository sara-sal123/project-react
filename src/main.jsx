import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MeetingList from './component/meeting/MeetingList.jsx';
import EditBusinessData from './component/businessData/EditBusinessData.jsx';
import AdminPage from './component/admin/AdminPage.jsx';

import AddService from './component/services/AddService.jsx';
import Service from './component/services/Service.jsx';
import ServiceList from './component/services/serviceList.jsx';







const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>error!!!</div>,
    children: [
      {
        path: ':id/',
        element: <Service />,
        errorElement: <div>error!!!</div>,
      }
    ]
  },
  {
    path: "admin/",
    element: <AdminPage />,
    errorElement: <div>error!!!</div>,
    children: [
      {
        path: "services",
        element: <ServiceList />,
        errorElement: <div>error!!!</div>,
      },
      {
        path: "meetings",
        element: <MeetingList />,
        errorElement: <div>error!!!</div>,
      },
    ]
  },

  {
    path: "admin/business/",
    element: <EditBusinessData />,
    errorElement: <div>error!!!</div>,
  },
  {
    path: "admin/services/addServices/",
    element: <AddService />,
    errorElement: <div>error!!!</div>,
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,


)
45