import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { Button, Grid, Stack, Card } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { FaDice } from "react-icons/fa6";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Demo.css'
function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            {props.value >= 100 && <CheckCircleIcon className='checkicon' />}
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
    const [progress, setProgress] = React.useState(20);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress >= 100 ? 100 : prevProgress + 20;
                if (newProgress === 100) {
                    clearInterval(timer);
                }
                return newProgress;
            });
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
            <div className="main-container">
                <div className="button-contain">
                    <Button className="back" variant='contained' startIcon={<ArrowBackIcon />}>Back</Button>
                </div>
                <div className='progress'>
                    <LinearProgressWithLabel color="secondary" value={progress} className="progress-bar" />
                </div>
            </div>
            <div className="second-container">
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={8} md={8}>
                        <div className="left-container">

                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4}>
                        <div className="right-container">
                            <Stack spacing={2} className='stack'>
                                <h2 className='tagline'>Pick a theme</h2>
                                <div className="tip">
                                    <p style={{ paddingLeft: '10px', width: 'fit-content' }}>While I get started, choose a theme.</p>
                                    <p style={{ paddingLeft: '10px', width: 'fit-content', color: 'gray' }}>Tip: You can customize fonts and colors later.</p>
                                </div>
                                <span>
                                    <Button
                                        variant='contained'
                                        className='surprisebtn'
                                        startIcon={<FaDice />}
                                    >Surprise me</Button>
                                </span>
                                <span>
                                    <Button
                                        variant='contained'
                                        className='continuebtn'
                                        endIcon={<ArrowForwardIcon />}
                                    >Continue</Button>
                                </span>
                            </Stack>
                            <div className='card-container'>
                                <div className="scrollable-container">
                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='grid-container'>
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container-wraper' style={{ width: '100%' }}>
                                                <div className="sub">
                                                    <Card  >
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
                                        {/* 2 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/default-black/defaultdark-1_e0d39490.jpg"
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
                                        {/* 3 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain2">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/oatmeal/oatmeal-01_4e7de307.jpg"
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
                                        {/* 4 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain3">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/marine/marine-01_4e09ec6d.jpg"
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
                                        {/* 5 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain4">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/atmosphere/atmosphere-2_39682e37.jpg"
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
                                        {/* 6 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain5">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/atacama/atacama-1_9ca4b4c9.jpg"
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
                                        {/* 7 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain6">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/pearl/pearl-01_c60d988c.jpg"
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
                                        {/* 8 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain7">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/vortex/vortex-01_95919ea6.jpg"
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
                                        {/* 9 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain8">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/icebreaker/icebreaker-2_7ea26d0d.jpg"
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
                                        {/* 10 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain9">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/blue-steel/bluesteel-1_bd3b46ef.jpg"
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
                                        {/* 11 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain10">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/oasis/oasis-01_95482e37.jpg"
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
                                        {/* 12 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain11">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/indigo/indigo-01_479f2e29_479f2e29.jpg"
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
                                        {/* 13 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain12">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/finesse/finesse-01_9a3a7352.svg"
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
                                        {/* 14 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain13">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/electric/electric-01_af7123ac.svg"
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
                                        {/* 15 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain14">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/dune/dune-1_3e057459.jpg"
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
                                        {/* 16 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain15">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/mocha/mocha-01_3eb3a5cd.jpg"
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
                                        {/* 17 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain16">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/flamingo/flamingo-01_3a8256df.jpg"
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
                                        {/* 18 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain17">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/velvet-tides/velvettides-1_e222b9c9.jpeg"
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
                                        {/* 19 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain18">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/prism/prism-1_91811f56.jpg"
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
                                        {/* 20 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain19">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/aurora/aurora-1_4ce4e774.jpg"
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
                                        {/* 21 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain20">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/gamma/gamma-1_6b981df6.jpg"
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
                                        {/* 22 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain21">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/incandescent/incandescent-2_e894ae17.jpg"
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
                                        {/* 23 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain22">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/sage/sage-02_a976bbfc.jpg"
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
                                        {/* 24 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain23">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/canaveral/canaveral-1_765fd42f.jpg"
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
                                        {/* 25 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain24">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/daydream/daydream-1_9ac78165.jpg"
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
                                        {/* 26 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain25">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/orbit/orbit-01_06406181.svg"
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
                                        {/* 27 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain26">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/terracotta/terracotta-01_2c5bf83a.png"
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
                                        {/* 28 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain27">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/piano/piano-01_a7cb7c28.jpg"
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
                                        {/* 29 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain28">
                                                    <Card >
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
                                        {/* 30 */}
                                        <Grid item xs={12} sm={6} md={6} lg={6} >
                                            <div className='card-container' style={{ width: '100%' }}>
                                                <div className="sub-contain29">
                                                    <Card >
                                                        <CardMedia
                                                            component="img"
                                                            height="50"
                                                            image="https://cdn.gamma.app/cdn-cgi/image/quality=80,fit=scale-down,onerror=redirect,width=250,height=250/https://cdn.gamma.app/theme_images/soft-coal/softcoal-1_fd1db395.jpg"
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
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </>
    );
}