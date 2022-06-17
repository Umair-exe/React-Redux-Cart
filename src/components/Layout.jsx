import React from 'react'
import Navbar from './Header/Navbar'
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}

            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
