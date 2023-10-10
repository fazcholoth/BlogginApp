import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider} from "react-router-dom"
import appRouter from "./App.jsx"
import { Provider } from 'react-redux';
import { store } from '../src/App/store.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={appRouter}/> 
    </Provider>
    <ToastContainer />
  </React.StrictMode>,
)
