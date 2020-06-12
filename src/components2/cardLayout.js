import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Orglogo from '../img/orglogo.png'
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        //flexGrow: 1,
        maxWidth: 345,
        //backgroundColor:"red"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor:"whitesmoke"
    },
}));

export default function CardLayout() {
    const classes = useStyles();

    return (
        <div>

        </div>

    );
}
/*<Paper className={classes.paper}>
    <Grid style={{backgroundColor:"red"}}  container>
        <Grid   s item xs={6} sm={4} container>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Box  display="flex"  p={1} >
                            <Box p={1} width="100%"  alignSelf="flex-start">
                                <Typography align="left" gutterBottom="true" variant="body2" color="textSecondary">22</Typography>
                                <Typography align="left" gutterBottom="true" variant="body2" color="textSecondary">Organisation</Typography>
                            </Box>
                            <Box flexShrink={0} >
                                <img src={Orglogo} style={{marginTop:"10px"}}/></Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        <Grid   s item xs={6} sm={4} container>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Box  display="flex"  p={1} >
                            <Box p={1} width="100%"  alignSelf="flex-start">
                                <Typography align="left" gutterBottom="true" variant="body2" color="textSecondary">22</Typography>
                                <Typography align="left" gutterBottom="true" variant="body2" color="textSecondary">Organisation</Typography>
                            </Box>
                            <Box flexShrink={0} >
                                <img src={Orglogo} style={{marginTop:"10px"}}/></Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        <Grid   s item xs={6} sm={4} container>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Box  display="flex"  p={1} >
                            <Box p={1} width="100%"  alignSelf="flex-start">
                                <Typography align="left" gutterBottom="true" variant="body2" color="textSecondary">22</Typography>
                                <Typography align="left" gutterBottom="true" variant="body2" color="textSecondary">Organisation</Typography>
                            </Box>
                            <Box flexShrink={0} >
                                <img src={Orglogo} style={{marginTop:"10px"}}/></Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    </Grid>
    <Grid style={{backgroundColor:"green"}}  container >
        <Grid   s item xs={6} sm={4} container>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Box  display="flex"  p={1} >
                            <Box p={1} width="100%"  alignSelf="flex-start">
                                <Typography align="left" gutterBottom="true" variant="body2" color="textSecondary">22</Typography>
                                <Typography align="left" gutterBottom="true" variant="body2" color="textSecondary">Organisation</Typography>
                            </Box>
                            <Box flexShrink={0} >
                                <img src={Orglogo} style={{marginTop:"10px"}}/></Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        <Grid   s item xs={6} sm={4} container>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Box  display="flex"  p={1} >
                            <Box p={1} width="100%"  alignSelf="flex-start">
                                <Typography align="left" gutterBottom="true" variant="body2" color="textSecondary">22</Typography>
                                <Typography align="left" gutterBottom="true" variant="body2" color="textSecondary">Organisation</Typography>
                            </Box>
                            <Box flexShrink={0} >
                                <img src={Orglogo} style={{marginTop:"10px"}}/></Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        <Grid   s item xs={6} sm={4} container>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Box  display="flex"  p={1} >
                            <Box p={1} width="100%"  alignSelf="flex-start">
                                <Typography align="left" gutterBottom="true" variant="body2" color="textSecondary">22</Typography>
                                <Typography align="left" gutterBottom="true" variant="body2" color="textSecondary">Organisation</Typography>
                            </Box>
                            <Box flexShrink={0} >
                                <img src={Orglogo} style={{marginTop:"10px"}}/></Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    </Grid>
</Paper>*/

/*
<Card className={classes.root}>
    <CardActionArea>
        <CardContent>
            <Box  display="flex"  p={1} >
                <Box p={1} width="100%"  alignSelf="flex-start">
                    <Typography align="left" gutterBottom="true" variant="body2" color="textSecondary">22</Typography>
                    <Typography align="left" gutterBottom="true" variant="body2" color="textSecondary">Organisation</Typography>
                </Box>
                <Box flexShrink={0} >
                    <img src={Orglogo} style={{marginTop:"10px"}}/></Box>
            </Box>
        </CardContent>
    </CardActionArea>
</Card>
<Card className={classes.root}>
    <CardActionArea>
        <CardContent>
            <Box  display="flex"  p={1} >
                <Box p={1} width="100%"  alignSelf="flex-start">
                    <Typography align="left" gutterBottom="true" variant="body2" color="textSecondary">22</Typography>
                    <Typography align="left" gutterBottom="true" variant="body2" color="textSecondary">Organisation</Typography>
                    <Typography align="left" gutterBottom="true" variant="body2" color="textSecondary">Organisation</Typography>
                </Box>
                <Box flexShrink={0} >
                    <img src={Orglogo} style={{marginTop:"10px"}}/></Box>
            </Box>
        </CardContent>
    </CardActionArea>
</Card>
</div>*/
