import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Blog = ({ image }) => {
    return (
        <Card sx={{
            maxWidth: 345, minWidth: 345, mt: 2,

        }}>
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'left' }}>
                    Why Every Kid Should Read Sudha Murty’s Books?
                </Typography>
                <Typography sx={{
                    textAlign: 'left',
                    variant: 'body2',
                    color: 'text.secondary',
                    fontSize: '11px'
                }}>
                    NOVEMBER 7, 2022
                </Typography>
                <Typography variant="body2" color="text.primary" sx={{
                    textAlign: 'left', mt: 2
                }}>
                    We all live in a world where we are surrounded by extraordinary people. We seek inspiration from these saintly figures and try to follow in their footsteps. They leave their....
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Blog;