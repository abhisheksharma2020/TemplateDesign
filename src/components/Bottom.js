import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import historicalImage from '../img/historicalImage.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Bottom() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            <Typography>Historical Data</Typography>
                            <Grid container
                                  direction="row"
                                  justify="flex-end"
                                  alignItems="center">
                                <Button style={{backgroundColor:"#e2ecff"}}>Today</Button>
                                <Button style={{margin:"5px"}} variant="contained" color="primary">30 Days</Button>
                                <Button variant="contained" color="primary">90 Days</Button>
                            </Grid>
                        </Grid>
                        <img src={historicalImage}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
