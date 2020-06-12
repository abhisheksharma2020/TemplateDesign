import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import orglogo from '../img/orglogo.png'
import userlogo from '../img/userLogo.png'
import ruleslogo from '../img/ruleslogo.png'
import gatewaylogo from '../img/gatewaylogo.png'

import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    root: {
        //flexGrow: 1,
        width: 450,
        //backgroundColor:"wheat",
        height:100
    },

});

export default function AcccessibleTable() {
    const classes = useStyles();

    return (
        <TableContainer>
            <Table  aria-label="caption table" size="small">
                <TableBody>
                    <TableRow >
                        <TableCell >
                            <Card className={classes.root}>
                            <CardActionArea>
                                <CardContent>
                                    <Box  display="flex"  p={1} >
                                        <Box p={1} width="100%"  alignSelf="flex-start">
                                            <Typography align="left" gutterBottom="true" variant="body1" color="textSecondary">22</Typography>
                                            <Typography align="left" gutterBottom="true" variant="body1" color="textSecondary">ORGANISATION</Typography>
                                        </Box>
                                        <Box flexShrink={0} >
                                            <img src={orglogo} style={{marginTop:"10px"}}/></Box>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card> </TableCell>
                        <TableCell align="right">
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
                        </TableCell>
                        <TableCell align="right" style={{backgroundColor:"#00a3e7",width:"400px"}} >
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
                        </Card></TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="right">
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
                            </Card> </TableCell>
                        <TableCell align="right">
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
                        </TableCell>
                        <TableCell align="right" style={{backgroundColor:"#00a3e7",width:"400px"}}>
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
                        </Card></TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    );
}
