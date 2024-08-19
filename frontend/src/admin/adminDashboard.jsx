import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import AdminMenu from '../components/AdminMenu'
import { Outlet } from 'react-router-dom'

function AdminDashboard() {
  return (
    <div>
    <AdminMenu/>
    <Outlet /> 
    <Footer/>
    </div>
  )
}

export default AdminDashboard;
