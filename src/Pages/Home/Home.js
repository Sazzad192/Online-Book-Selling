import { Button } from '@material-ui/core';
import React from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Blogs from './Blogs/Blogs';
import Banner from "./Banner/Banner"


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Blogs></Blogs>
            <Login></Login>
            <SignUp></SignUp>
        </div>
    );
};

export default Home;