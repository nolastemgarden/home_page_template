

//  NOT IN USE AT THIS TIME 

// SEE MobileLandingCards.js



import React from 'react';
import { Link as RouterLink } from "react-router-dom";

// MY images
// import chessclub from "../images/chess_demo_board.jpg";
// import chessclub from "../images/chess_club_college_track.jpg";
// import balance_scale from "../images/balance_scale_waldorf.jpg";
// import multiple_choice from "../images/multiple_choice_test.jpg";
// import banana_papaya_harvest from "../images/banana-papaya-harvest.JPG";
// import profile_pic from "../images/profile-pic.jpg";
// import fret_measuring from "../images/guitar_fret_spacing_crop1.jpg";

// MUI Imports
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';

const cardHeight = '1000px';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    card: {
        height: '100%',
        width: '100%',
        // color: theme.palette.common.white,
        // backgroundColor: theme.palette.common.black,
        // backgroundColor: theme.palette.common.white,
        // backgroundColor: theme.palette.primary.light,
        // backgroundColor: '#444',
        backgroundColor: '#ddd',
        padding: '0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    cardImage: {
        height: 0,
        paddingTop: '100%', // 1:1  Sets the "height" in terms of the Width since % units for padding are based on the width
        // paddingTop: '56.25%', // 16:9
        // width: '100%',
    },
    cardButtonArea: {
        height: { cardHeight },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    }

}));

// DESCRIPTION:  There will be only 4 cards on the landing page: About the Garden, Teaching Services, Chess Clubs, and Meet Nigel

export default function MobileLandingCards(props) {
    const classes = useStyles();



    return (
        <Container
            className={classes.mobileCardGrid}
            maxWidth='lg'
        >
            <Grid container
                className={classes.gridContainer}
                id='grid'
                spacing={3}

            >

                {/* TEACHING SERVICES */}
                <Grid item xs={12} sm={6} >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.cardImage}
                                // image={fret_measuring}
                                alt="Student measuring a guitar"
                                title="Student measuring a guitar"
                            />
                            <CardContent>
                                <Typography component="h3" variant="h5" >
                                    Teaching Services
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textPrimary"
                                >
                                    I am a licensed math teacher offering private tutoring in any K-12 or AP
                                    math class. If you have fallen behind, want to get ahead, or
                                    simply want to learn in a more fun and hands-on way, call today!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                component={RouterLink}
                                to='/teach'
                                variant='contained'
                                size="medium"
                                color="primary"
                            >
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>


                {/* ABOUT THE GARDEN */}
                <Grid item xs={12} sm={6} >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.cardImage}
                                alt="Homegrown Bananas and Papayas"
                                // image={banana_papaya_harvest}
                                title="Homegrown Bananas and Papayas"
                            />
                            <CardContent>
                                <Typography component="h3" variant="h5" >
                                    About the Garden
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textPrimary"
                                >
                                    Established in 2016, the garden started as a blighted lot and gradually
                                    evolved into an oasis of turmeric and fruit trees.

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardButtons} >
                            <Button
                                component={RouterLink}
                                to='/garden_story'
                                variant='contained'
                                size="medium"
                                color="primary"
                            >
                                Our Story
                            </Button>
                            <Button
                                component={RouterLink}
                                to='/garden_gallery'
                                variant='contained'
                                size="medium"
                                color="primary"
                            >
                                Photo Gallery
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>


                {/* CHESS CLUBS and LESSONS */}
                <Grid item xs={12} sm={6} >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.cardImage}
                                // image={chessclub}
                                alt="Students playing chess"
                                title="Students playing chess"
                            />
                            <CardContent>
                                <Typography component="h3" variant="h5" >
                                    Chess Clubs and Lessons
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textPrimary"
                                >
                                    Playing chess is a fun way for kids to develop their skills at problem solving,
                                    time-management, and communication, as well as persistence and sportsmanship.
                                    We offer private and small group lessons and partner with schools to help
                                    them establish chess clubs.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                component={RouterLink}
                                to='/teach/chess'
                                variant='contained'
                                size="medium"
                                color="primary"
                            >
                                Lessons
                            </Button>
                            <Button
                                component={RouterLink}
                                to='/teach/chess'
                                variant='contained'
                                size="medium"
                                color="primary"
                            >
                                Clubs
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>


                {/* MEET NIGEL */}
                <Grid item xs={12} sm={6} >
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.cardImage}
                                // image={profile_pic}
                                title="founder's profile picture"
                                alt="founder's profile picture"
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Meet Nigel
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    I am a jack of all trades who rejoices in helping kids see the world from new points of view.
                                    Get to know me by checking out some of my projects besides gardening and teaching!
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                component={RouterLink}
                                to='/about_me'
                                variant='contained'
                                size="medium"
                                color="primary"
                            >
                                About Me
                        </Button>
                            <Button
                                component={RouterLink}
                                to='/my_projects'
                                variant='contained'
                                size="medium"
                                color="primary"
                            >
                                My Projects
                        </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>



    )

}