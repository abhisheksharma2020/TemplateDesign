import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Graphlogo from '../img/graph1.png'
import Button from "@material-ui/core/Button";
import Maplogo from '../img/mapimage.png'
import SimpleMenu from './DropDown'
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const useStyles = makeStyles((theme) => ({
    root: {
        //flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        //margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function Inline() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        <TableRow >
                            <TableCell >
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
                                                <SimpleMenu>Simple Menu</SimpleMenu>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs container direction="column" style={{backgroundColor:"red"}}>
                                        <img src={Graphlogo} className={classes.img}/></Grid>
                                </Paper>
                            </TableCell>
                            <TableCell align="right">
                                <Paper className={classes.paper}>
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

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs container direction="column" >
                                        <img src={Maplogo} className={classes.img}/></Grid>
                                </Paper>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

/*

export default function Inline() {
    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item sm={6} style={{backgroundColor:"red"}}>
                    <h1>Grid1</h1>
                </Grid>
                <Grid item  sm={6}style={{backgroundColor:"green"}}>
                    <h1>Grid2</h1>
                </Grid>
            </Grid>
        </div>
*/
        /*<div className={classes.root} >
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            Assets Summary<Button>Asset1</Button>
                        </Grid>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Grid
                            container

                            justify="space-between"
                            alignItems="center">
                            Assets Summary<Button>Asset1</Button>
                        </Grid>

                    </Paper>

                </Grid>
            </Grid>
        </div>*/
/*
    );
*/
//}
