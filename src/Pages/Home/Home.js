import { Button } from '@material-ui/core';
import React from 'react';
import Blogs from './Blogs/Blogs';


const Home = () => {
    return (
        <div>
            <Button variant="contained">Default</Button>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button variant="contained" color="primary" href="#contained-buttons">
                Link
            </Button>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;