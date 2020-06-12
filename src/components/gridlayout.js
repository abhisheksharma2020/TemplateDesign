import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import logo from '../img/orglogo.png'
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
       // margin: 'auto',
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
/*<Grid item>
    <ButtonBase className={classes.image}>
        <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
    </ButtonBase>
</Grid>*/
export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    22
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    ORGANIZATION
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <img src={logo}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    22
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    ORGANIZATION
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <img src={logo}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
