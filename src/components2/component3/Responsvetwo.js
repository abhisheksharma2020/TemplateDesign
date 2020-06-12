import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import PersistentDrawerLeft from  '../Drawer'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ResponsiveDrawerthree from './ResponsiveDrawer3'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            //backgroundColor: "red",
        },
        [theme.breakpoints.up('md')]: {
            //backgroundColor: "orange",
        },
        [theme.breakpoints.up('lg')]: {
            //backgroundColor: green[500],
        },
    },
}));

export default function MediaQuery() {
    const classes = useStyles();
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('xs'))
    return (
        <div className={classes.root}>
            {matches?<ResponsiveDrawerthree/>:<PersistentDrawerLeft/>}
        </div>
    );
}
