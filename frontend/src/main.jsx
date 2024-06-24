import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter ,createRoutesFromElements} from 'react-router-dom'
import SignIn from './Components/signin/Signin.jsx'
import Signup from './Components/signup/Signup.jsx'
import Home from './Components/home/Home.jsx'
import AddBlogs from './Components/add-blog/AddBlogs.jsx'
import Blog from './Components/blog/Blog.jsx'
import Profile from './Components/profile/profile.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/add-blogs' element={<AddBlogs/>}/>
      <Route path='/:id'  element={<Blog/>}/>
      <Route path='/profile/:id'  element={<Blog/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
