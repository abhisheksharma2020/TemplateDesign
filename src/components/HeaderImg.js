import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
       // color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <Grid container direction="row" justify="flex-end" alignItems="flex-start" spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Grid
                            container
                            direction="row"
                            spacing={0}
                            //justify="space-between"
                            >
                            <NotificationsNoneOutlinedIcon/>
                            <Typography style={{marginLeft:"5", fontSize:"15"}}>John Doe<br/>Available</Typography>
                        </Grid>

                        {/*<List >
                            <ListItem style={{fontSize:'20px'}}>
                                <ListItemIcon><NotificationsNoneOutlinedIcon/></ListItemIcon>
                                <ListItemText ><Typography align='left'>John Doe</Typography>
                                </ListItemText>
                            </ListItem>
                        </List>*/}

                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}