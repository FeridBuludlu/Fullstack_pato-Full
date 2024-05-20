import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../layout/admin/Header/Header'
import Footer from "../../layout/admin/Footer/Footer"

const AdminRoot = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default AdminRoot