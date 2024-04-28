import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomPage from './Pages/HomPage';
import MainLayout from './Layouts/MainLayout';
import JobsPage from './Pages/JobsPage';
import JobPage, { jobLoader } from './Pages/JobPage';
import AddJobPage from './Pages/AddJobPage';
import NotFoundPage from './Pages/NotFoundPage';

const App = () => {
  const addJob = (newJob) => {
    console.log(newJob)
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route path='/' element={<HomPage/>}/>
        <Route path='/jobs' element={<JobsPage/>}/>
        <Route path='/jobs/:id' element={<JobPage />} loader = {jobLoader}/>
        <Route path='/addjobs' element={<AddJobPage/>} addJobSubmit={addJob}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
  )
  );

  return <RouterProvider router={router}/>
}

export default App