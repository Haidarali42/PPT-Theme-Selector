import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, Stack } from '@mui/material'
import './Index.css'



export default function RecipeReviewCard() {


    return (
        <>
            <div className='card-container'>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='grid-container'>
                    <Grid item xs={12} sm={6} md={6} lg={6} >
                        <div className='card-container'>
                            <div className="sub">
                                <Card sx={{ maxWidth: 220 }} className='card1'>
                                    <CardMedia
                                        component="img"
                                        height="50"
                                        image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/soft-cloud/softcloud-1_d0942735.jpg"
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            <div>
                                                <p className='bodytag'>Body & <a href="">Link</a></p>
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} >
                        <div className='card-container'>
                            <div className="sub">
                                <Card sx={{ maxWidth: 220 }} className='card1'>
                                    <CardMedia
                                        component="img"
                                        height="50"
                                        image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/soft-cloud/softcloud-1_d0942735.jpg"
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            <div>
                                                <p className='bodytag'>Body & <a href="">Link</a></p>
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
{/* <Card sx={{ maxWidth: 220 }} className='card1'>
                <CardMedia
                    component="img"
                    height="50"
                    image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/soft-cloud/softcloud-1_d0942735.jpg"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <div>
                            <p className='bodytag'>Body & <a href="">Link</a></p>
                        </div>
                    </Typography>
                </CardContent>
            </Card> */}

            