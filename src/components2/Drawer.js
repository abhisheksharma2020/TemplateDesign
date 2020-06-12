import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
/*import {useTheme} from "@material-ui/core/styles";*/
import Box from '@material-ui/core/Box';
import Logo from '../img/logo.png'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import WorkIcon from "@material-ui/icons/Work";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ComputerOutlinedIcon from "@material-ui/icons/ComputerOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import GamesOutlinedIcon from "@material-ui/icons/GamesOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import NotificationBadges from './NotificationBadge'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuListItems from './ListItem'
import ResponsiveDrawerthree from "./component3/ResponsiveDrawer3";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.up("sm")]:{
            backgroundColor:"red"
        },
        [theme.breakpoints.up("md")]:{
            backgroundColor:"Green"
        },
            [theme.breakpoints.up("lg")]:{
                backgroundColor:"yellow"
            }


    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        color:"transparent",
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    dashboardButton:{
        height:"40px",width:"140px",fontSize:"15px"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        //backgroundColor:"green",
    },
    drawerPaper: {
        width: drawerWidth,
        //color:"red",
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        color:"wheat"
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
        color:"wheat"
    },
}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setClicked(true);
    };
    const [clicked, setClicked] = useState(false)

    return (

        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                //color="transparent"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,})}>

                <Toolbar>
                    {/*<IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <MenuIcon /> : <ChevronRightIcon />}
                    </IconButton>*/}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                      className={clsx(classes.menuButton, open && classes.hide)}>
                        {open?<ChevronRightIcon style={{textAlign:"right"}}/>:<MenuIcon/>}
                        {/*<MenuIcon/>*/}
                        {/*{theme.direction === 'ltr' ? <ChevronRightIcon /> : <MenuIcon />}*/}
                    </IconButton>
                    {matches?<img src={Logo} style={{width:"100%",height:"40px"}}/>:<NotificationBadges/>}
                    </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}>

                <Box color="black" >
                    {matches?"":<img src={Logo}/>}
                </Box>
                {matches?<MenuListItems/>:""}
                <div className={classes.drawerHeader}>
                    <Box color="black" >
                        {matches?"":
                            <Button variant="contained" color="primary" className={classes.dashboardButton}
                                            startIcon={<HomeOutlinedIcon />}> Dashboard </Button>}
                    </Box>
                    {/*<IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>*/}
                </div>
                <Typography variant="caption" gutterBottom align="left" color="textPrimary" style={{marginLeft:"15px"}}>
                    PAGES</Typography>

                <Divider/>
                <List >
                    <ListItem>
                        <ListItemIcon><WorkIcon/></ListItemIcon>
                        <Typography variant="subtitle1" gutterBottom>Assets</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><LocationOnOutlinedIcon/></ListItemIcon>
                        <Typography variant="subtitle1" gutterBottom>Map</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><ComputerOutlinedIcon/></ListItemIcon>
                        <Typography  variant="subtitle1" gutterBottom>Live Data</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><PhoneIphoneOutlinedIcon/></ListItemIcon>
                        <Typography variant="subtitle1" gutterBottom>Device Management</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><AccessTimeOutlinedIcon/></ListItemIcon>
                        <Typography variant="subtitle1" gutterBottom>Graph</Typography>
                        </ListItem>
                    <ListItem>
                        <ListItemIcon><GamesOutlinedIcon/></ListItemIcon>
                        <Typography variant="subtitle1" gutterBottom>Sensor</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><SettingsOutlinedIcon/></ListItemIcon>
                        <Typography variant="subtitle1" gutterBottom>Setting</Typography>
                    </ListItem>
                </List>
            </Drawer>
            <main className={clsx(classes.content,{[classes.contentShift]: open,})}>
                <div className={classes.drawerHeader} />
                {/*<CardLayout></CardLayout>*/}

                {/*<DisplayMaterial/>
                <Summary/>*/}
{/*                <Typography style={{marginTop:"10px"}}><Inline/></Typography>*/}
                {/*<Typography style={{marginTop:"10px"}}><Bottom/></Typography>*/}

            </main>
        </div>
    );
}
