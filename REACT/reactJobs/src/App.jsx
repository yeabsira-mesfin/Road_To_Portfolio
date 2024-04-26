import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomPage from './Pages/HomPage';
import MainLayout from './Layouts/MainLayout';
import JobsPage from './Pages/JobsPage';
import AddJob from './Pages/AddJob';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route path='/' element={<HomPage/>}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/addjobs' element={<AddJob/>}/>
    </Route>
)
);
const App = () => {

  return <RouterProvider router={router}/>
}

export default App