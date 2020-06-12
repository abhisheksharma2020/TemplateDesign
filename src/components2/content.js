import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import orglogo from '../img/orglogo.png'
import userlogo from '../img/userLogo.png'
import ruleslogo from '../img/ruleslogo.png'
import gatewaylogo from '../img/gatewaylogo.png'
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        //backgroundColor:"red"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor:"whitesmoke"
    },
}));

export default function SpacingGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid style={{backgroundColor:"white"}}  container spacing={3}>
                    <Grid   s item xs={6} sm={4} container>
                        <Grid  item xs container direction="column" spacing={2}>
                            <Typography gutterBottom variant="subtitle1" style={{textAlign:"left",marginLeft:"15px"}}>
                                22
                            </Typography>
                            <Typography variant="body2" gutterBottom style={{textAlign:"left",marginLeft:"15px"}}>
                                ORGANIZATION
                            </Typography>
                        </Grid>
                        <Grid  item>
                            <img src={orglogo}/>
                        </Grid>
                    </Grid>
                    <Grid spacing={1}  s item xs={6} sm={4} container>
                        <Grid  item xs container direction="column" spacing={2}>
                            <Typography gutterBottom variant="subtitle1" style={{textAlign:"left",marginLeft:"15px"}}>
                                1,297
                            </Typography>
                            <Typography variant="body2" gutterBottom style={{textAlign:"left",marginLeft:"15px"}}>
                                USER
                            </Typography>
                        </Grid>
                        <Grid  item>
                            <img style={{marginLeft:"0px"}} src={userlogo}/>
                        </Grid>
                    </Grid>
                    <Grid style={{backgroundColor:"blue"}}  s item xs={6} sm={4} container>
                        <Grid  item xs container direction="column" spacing={2}>
                            <Typography gutterBottom variant="subtitle1" style={{color:"white",textAlign:"left",marginLeft:"15px",marginRight:"10px"}}>
                                20
                            </Typography>
                        </Grid>
                        <Grid  item>
                            <Typography variant="body2" gutterBottom style={{color:"white",textAlign:"left",marginLeft:"15px",marginRight:"10px"}}>
                                ACTIVE ASSETS
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container spacing={2} >
                    <Grid s item xs={6} sm={4} container>
                        <Grid  item xs container direction="column" spacing={2}>
                            <Typography gutterBottom variant="subtitle1" style={{textAlign:"left",marginLeft:"15px"}}>
                                22
                            </Typography>
                            <Typography variant="body2" gutterBottom style={{textAlign:"left",marginLeft:"15px"}}>
                                RULES
                            </Typography>
                        </Grid>
                        <Grid  item>
                            <img src={ruleslogo}/>
                        </Grid>
                    </Grid>
                    <Grid   s item xs={6} sm={4} container>
                        <Grid  item xs container direction="column" spacing={2}>
                            <Typography gutterBottom variant="subtitle1" style={{textAlign:"left",marginLeft:"5"}}>
                                01
                            </Typography>
                            <Typography variant="body2" gutterBottom style={{textAlign:"left",marginLeft:"5"}}>
                                GATEWAY
                            </Typography>
                        </Grid>
                        <Grid  item>
                            <img src={gatewaylogo}/>
                        </Grid>
                    </Grid>
                    <Grid style={{backgroundColor:"blue"}}  s item xs={6} sm={4} container>
                        <Grid  item xs container direction="column" spacing={2}>
                            <Typography gutterBottom variant="subtitle1" style={{color:"white",textAlign:"left",marginLeft:"15px",marginRight:"10px"}}>
                                2230
                            </Typography>

                        </Grid>
                        <Grid  item>
                            <Typography variant="body2" gutterBottom style={{color:"white",textAlign:"left",marginLeft:"15px",marginRight:"10px"}}>
                                TOTAL ASSESTS
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
           {/* <Grid container spacing={2}>
                <Grid item xs={6} sm={4}>
                    <Paper className={classes.paper}>
                        <ListItem><Typography>22<br/> ORGANIZATION </Typography></ListItem>
                        <Grid item><img src={orglogo}/></Grid>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Paper className={classes.paper}>
                        <ListItem><Typography>1297<br/> USERS </Typography></ListItem></Paper>
                </Grid>
                <Grid item xs={6} sm={4} >
                    <Paper className={classes.paper} style={{backgroundColor:'blue'}}>
                        <ListItem><Typography>20 <br/> ACTIVE ASSETS </Typography></ListItem></Paper>
                </Grid>

            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={4}>
                    <Paper className={classes.paper}>
                        <ListItem><Typography>22<br/> RULES </Typography></ListItem></Paper>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Paper className={classes.paper}>
                        <ListItem><Typography>01<br/> GATEWAY </Typography></ListItem></Paper>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Paper className={classes.paper} style={{backgroundColor:'blue'}}>
                        <ListItem><Typography>2230 <br/> ACTIVE ASSETS </Typography></ListItem></Paper>
                </Grid>

            </Grid>*/}
        </div>
    );
}