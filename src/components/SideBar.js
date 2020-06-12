import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Box from "@material-ui/core/Box";
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import WorkIcon from '@material-ui/icons/Work';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import GamesOutlinedIcon from '@material-ui/icons/GamesOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HeaderImg from "./HeaderImg";
import SpacingGrid from './content'
import Bottom from './Bottom'
import SpacingGridtwo from './contenttwo'
import logo from '../img/logo.png'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        //backgroundColor:"red"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,

        }),
        backgroundColor:"white"
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,

        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color:"black"

    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,

    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        //backgroundColor:"black",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'center',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    boxDesing:{
        backgroundColor:"#00a3e7"
    },
    homeicon:{
        marginTop:15,
        color:"red"
    }
}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <HeaderImg></HeaderImg>
                    {/*<Typography variant="h6" noWrap>
                        Persistent drawer
                    </Typography>*/}
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

                <Box>
                    <img src={logo}/>
                </Box>
                <Box className={classes.boxDesing}>
                    <List>
                        <ListItem><ListItemIcon><HomeOutlinedIcon/></ListItemIcon><Typography>Dashboard</Typography></ListItem>
                    </List>
                </Box>

                <Divider />
                <List >
                    <ListItem style={{fontSize:'20px'}}><ListItemIcon><WorkIcon/></ListItemIcon>Assets</ListItem>
                    <ListItem style={{fontSize:'20px'}}><ListItemIcon><LocationOnOutlinedIcon/></ListItemIcon>Map</ListItem>
                    <ListItem style={{fontSize:'20px'}}><ListItemIcon><ComputerOutlinedIcon/></ListItemIcon>Live Data</ListItem>
                    <ListItem style={{fontSize:'20px'}}><ListItemIcon><PhoneIphoneOutlinedIcon/></ListItemIcon>Device Management</ListItem>
                    <ListItem style={{fontSize:'20px'}}><ListItemIcon><AccessTimeOutlinedIcon/></ListItemIcon>Graph</ListItem>
                    <ListItem style={{fontSize:'20px'}}><ListItemIcon><GamesOutlinedIcon/></ListItemIcon>Sensor</ListItem>
                    <ListItem style={{fontSize:'20px'}}><ListItemIcon><SettingsOutlinedIcon/></ListItemIcon>Setting</ListItem>
                </List>
            </Drawer>
            <main  className={clsx(classes.content, {[classes.contentShift]: open,  })}>
                <div className={classes.drawerHeader} />
                <Typography paragraph> <SpacingGrid/></Typography>
                <Typography><SpacingGridtwo/></Typography>
                <Typography paragraph><Bottom/></Typography>
            </main>
        </div>
    );
}
