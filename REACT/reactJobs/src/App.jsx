import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import EmployeeDevelopers from './components/EmployeeDevelopers'
import BrowseJobs from './components/BrowseJobs'
import ViewMore from './components/ViewMore'
const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(<Route index element={<h1>My app</h1>}/>)
  );
  return <RouterProvider router={router}/>
}

export default App