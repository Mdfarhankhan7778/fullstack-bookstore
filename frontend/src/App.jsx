import React from 'react'
import Home from './home/Home'
import Course from './courses/Courses'
import AdminSignup from './admin/AdminSignup.jsx'
import AdminHome from './AdminHome/AdminHome.jsx'

import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import {Toaster} from "react-hot-toast"
import { useAuth } from './context/AuthProvider'
import AdminLogin from './admin/AdminLogin.jsx'


function App() {
  const[authUser,setAuthUser]=useAuth();
  const isAdmin = authUser && authUser.role === 'admin';

  // const[isAdmin,setAdmin] = useAdminAuth()
  // const admin = true;
  console.log(authUser);

  return (
    <>
    
    <div className='dark:bg-slate-900 dark:text-white'>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/course" element={authUser?<Course/>:<Navigate to="/signup" />}></Route>
      <Route path="/signup" element={<Signup/>}></Route>

     
      {/* <Route path="/admin" element={<AdminHome/>}></Route> */}
       {/* <Route path="/dashboard" element={<AdminHome/>}></Route> 
      <Route path="/admin" element={isAdmin ? <AdminHome /> : <Navigate to="/admin/login" />} />
      <Route path="/admin/login" element={<AdminSignup/>}></Route> */}
       {/* <Route path="/admin" element={<AdminSignup/>}></Route>  */}
      <Route path="/admin" element={isAdmin ? <Navigate to="/admin/dashboard" /> : <AdminSignup />} />
          <Route path="/admin/dashboard" element={isAdmin ? <AdminHome /> : <Navigate to="/admin" />} />



      {/* {admin && 
        <>
        <Route path="/dashboard" element={<AdminDashboard/>}>
          <Route path="/users" element={<Users/>}/>
          <Route path="/books" element={<Books/>}/>
        </Route>
        </>
      } */}

    </Routes>
    <Toaster/>
    </div>
    </>
  )
}

export default App
