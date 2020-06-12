import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import graph1 from '../img/graph1.png'
import GoogleMapAPI from "../MapDesign/Mapcomponents/Map";
import mapimage from '../img/mapimage.png'
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width:800
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            Assets Summary<Button>Asset1</Button>
                        </Grid>
                        <img height="350" src={graph1}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} style={{height:"500"}}>
                        <Typography style={{textAlign:"left"}}>Map Summary</Typography>
                        {/*<img height="350" src={mapimage}/>*/}
                        <GoogleMapAPI/>

                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
