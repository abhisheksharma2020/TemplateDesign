import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Graphlogo from '../img/graph1.png'
import Button from "@material-ui/core/Button";
import Maplogo from '../img/mapimage.png'
import ButtonBase from '@material-ui/core/ButtonBase';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Orglogo from '../img/orglogo.png'
import ruleslogo from "../img/ruleslogo.png";
import userlogo from "../img/userLogo.png";
import gatewaylogo from "../img/gatewaylogo.png";
import SimpleMenu from './DropDown'

const useStyles = makeStyles((theme) => ({

}));

export default function DisplayMaterial() {
    const classes = useStyles();
    return(<div>
            <Grid container spacing={1}>
                <Grid item lg={4} >
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
                <Grid item lg={4} >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardContent>
                                <Box  display="flex"  p={1} >
                                    <Box p={1} width="100%"  alignSelf="flex-start">
                                        <Typography align="left" gutterBottom="true" variant="body1" color="textSecondary">1,297</Typography>
                                        <Typography align="left" gutterBottom="true" variant="body1" color="textSecondary">USERS</Typography>
                                    </Box>
                                    <Box flexShrink={0} >
                                        <img src={userlogo} style={{marginTop:"1px",height:"60px",backgroundColor:"red"}}/></Box>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={4} style={{backgroundColor:"#00a3e7"}}>
                    <Card className={classes.root} style={{backgroundColor:"#0598d5"}}>
                        <CardActionArea>
                            <CardContent>
                                <Box  display="flex"  p={1} >
                                    <Box p={1} width="100%"  alignSelf="flex-start">
                                        <Typography align="left" gutterBottom="true" variant="body2" style={{color:"white"}}>20</Typography>
                                    </Box>
                                    <Box flexShrink={0} >
                                        <Typography style={{marginTop:"2px",backgroundColor:"#0598d5",color:"white"}} align="left" gutterBottom="true" variant="body2" color="textSecondary">ACTIVE ASSETS</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>


            </Grid>
            <Grid container spacing={1} >
                <Grid item lg={4} >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardContent>
                                <Box  display="flex"  p={1} >
                                    <Box p={1} width="100%"  alignSelf="flex-start">
                                        <Typography align="left" gutterBottom="true" variant="body1" color="textSecondary">22</Typography>
                                        <Typography align="left" gutterBottom="true" variant="body1" color="textSecondary">RULES</Typography>
                                    </Box>
                                    <Box flexShrink={0} >
                                        <img src={ruleslogo} style={{marginTop:"1px",height:"60px"}}/></Box>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={4} >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardContent>
                                <Box  display="flex"  p={1} >
                                    <Box p={1} width="100%"  alignSelf="flex-start">
                                        <Typography align="left" gutterBottom="true" variant="body1" color="textSecondary">01</Typography>
                                        <Typography align="left" gutterBottom="true" variant="body1" color="textSecondary">GATEWAY</Typography>
                                    </Box>
                                    <Box flexShrink={0} >
                                        <img src={gatewaylogo} style={{marginTop:"1px",height:"60px"}}/></Box>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={4} style={{backgroundColor:"#00a3e7"}}>
                    <Card className={classes.root} style={{backgroundColor:"#0598d5"}}>
                        <CardActionArea>
                            <CardContent>
                                <Box  display="flex"  p={1} >
                                    <Box p={1} width="100%"  alignSelf="flex-start">
                                        <Typography align="left" gutterBottom="true" variant="body1" style={{color:"white"}}>2230</Typography>
                                    </Box>
                                    <Box flexShrink={0} >
                                        <Typography align="left" gutterBottom="true" variant="body1"style={{color:"white"}}>TOTAL ASSETS</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

        </div>


    )

}