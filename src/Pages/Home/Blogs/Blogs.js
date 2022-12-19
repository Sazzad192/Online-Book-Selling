import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Blog from './Blog';


const blogImage = [
    'https://cdn.shopify.com/s/files/1/0622/2374/5251/articles/Sudha-murthy-books-for-sale.jpg?v=1667816822',
    'https://cdn.shopify.com/s/files/1/0622/2374/5251/articles/Buy_Chhaya_Prakashani_Books.jpg?v=1666001523',
    'https://cdn.shopify.com/s/files/1/0622/2374/5251/articles/buy-motivational-books-for-self-development.jpg?v=1669295714'
]
const Blogs = () => {
    return (
        <Box sx={{ mt: 8 }}>
            <Typography sx={{ fontSize: '20px', textAlign: 'left' }}>
                Blog Posts
            </Typography>

            <Grid container spacing={2}>
                {
                    blogImage.map((image, index) => <Grid item xs={12} sm={6} md={4} key={index}>
                        <Blog
                            image={image}
                            key={index}
                        ></Blog>
                    </Grid>)
                }
            </Grid>

        </Box>
    );
};

export default Blogs;