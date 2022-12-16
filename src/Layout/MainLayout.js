import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Nav from '../Pages/Shared/Navbar/Nav';

const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
                <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;