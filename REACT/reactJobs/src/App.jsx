import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomPage from './Pages/HomPage';
import MainLayout from './Layouts/MainLayout';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomPage/>}/>
    </Route>
)
);
const App = () => {

  return <RouterProvider router={router}/>
}

export default App