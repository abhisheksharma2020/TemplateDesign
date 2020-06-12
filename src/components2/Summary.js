import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Graphlogo from '../img/graph1.png'
import Button from "@material-ui/core/Button";
import Maplogo from '../img/mapimage.png'
import SimpleMenu from './DropDown'

const useStyles = makeStyles((theme) => ({
    root: {
        //flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        //margin: 'auto',
        //maxWidth: 500,
    },
    img: {
        maxHeight: '110%',
    },
}));


export default function Summary() {
    const classes = useStyles();
    return(<div>
        <Grid container spacing={1} >
            <Grid item lg={6}>
                <Paper className={classes.paper} >
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm container>
                            <Grid item xs container direction="row" spacing={2}>
                                <Grid item>
                                    <Typography variant="body1" style={{ cursor: 'pointer' }}>
                                        Assets Summary
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <SimpleMenu></SimpleMenu>
                                {/*<Button variant="contained" color="primary">Assets</Button>*/}
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs container direction="column" style={{backgroundColor:"red"}}>
                        <img src={Graphlogo} className={classes.img}/></Grid>
                </Paper>
            </Grid>
            <Grid item lg={6} >
                <Paper className={classes.paper} style={{height:"356px"}}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm container>
                            <Grid item xs container direction="row" spacing={2}>
                                <Grid item>
                                    <Typography variant="body1" style={{ cursor: 'pointer' }}>
                                        Map Summary
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <SimpleMenu></SimpleMenu>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs container direction="column" >
                        <img src={Maplogo} className={classes.img}/></Grid>
                </Paper>
            </Grid>

        </Grid>

    </div>)

}