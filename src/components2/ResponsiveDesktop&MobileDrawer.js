import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Box from "@material-ui/core/Box";
import MiniDrawer from './MiniDrawer'
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ComputerOutlinedIcon from "@material-ui/icons/ComputerOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import GamesOutlinedIcon from "@material-ui/icons/GamesOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import WorkIcon from "@material-ui/icons/Work";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import DataUsageOutlinedIcon from "@material-ui/icons/DataUsageOutlined";
import DevicesOutlinedIcon from "@material-ui/icons/DevicesOutlined";
import ShowChartOutlinedIcon from "@material-ui/icons/ShowChartOutlined";
import CompanyLogo from '../img/logo.png'
import Badge from "@material-ui/core/Badge";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
const drawerWidth = 240;
const appbarwidth=0

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - 0px)`,
           // appbarwidth: `calc(100% - 0px)`,
            //marginLeft: drawerWidth
        },
        [theme.breakpoints.up("md")]: {
           // backgroundColor:"red"
            //marginLeft: drawerWidth,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,

            }),
        },
        [theme.breakpoints.up("lg")]: {
            //backgroundColor:"white"
            //color:"transpar"

            marginLeft: drawerWidth
        },
        /*transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })*/
    },
    hide: {
        display: "none"
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
        },
        [theme.breakpoints.up("md")]: {
            width: drawerWidth,
            flexShrink: 0,
            marginTop:70,
        },
    },
    drawerPaper: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
        },
        [theme.breakpoints.up("md")]: {
            width: drawerWidth,
            flexShrink: 0,
            zIndex: 0,
            marginTop:70,
        },
        [theme.breakpoints.up("lg")]: {
            width: drawerWidth,
            flexShrink: 0,
            //marginTop:2
        }
    },
    /*drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up("md")]: {
            color:"green"
        },
        //color:"green"
    },*/
    drawerHeader: {
        [theme.breakpoints.up("sm")]: {
            display:'block',
            //backgroundColor:"wheat"
        },
        [theme.breakpoints.up("md")]: {
            width: drawerWidth,
            flexShrink: 0,
        },
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    notificationBox: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
        [theme.breakpoints.down("md")]: {
            display: "none",
            backgroundColor:"red"
        },
    },
    menuButtonLeft: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: 'block',
        },
        [theme.breakpoints.up("md")]: {
            display: 'none',
        },
        [theme.breakpoints.up("lg")]: {
            display: 'block',
        }
    },
    menuButtonRight:{
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        },
        [theme.breakpoints.up("md")]: {
            display: 'inline',
            marginLeft: 5
        },
        [theme.breakpoints.up("lg")]: {
            display: 'none',
        }
    },
    tabletnotificationBox:{
        [theme.breakpoints.up("md")]: {
            display: "inline",
           // backgroundColor:"red"
        },
        [theme.breakpoints.down("sm")]: {
            display: "none",
            flexShrink: 0,
        },
        [theme.breakpoints.up("lg")]: {
            display: "none",
            flexShrink: 0,
        }
    },
    mobileList: {
        [theme.breakpoints.down("sm")]: {
            display: "block"
        },
        [theme.breakpoints.down("md")]: {
            display: "block"
        },

        display: "none"
    },
    desktopList: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
        [theme.breakpoints.down("md")]: {
            display: "none"
        },

    },
    drawerHeaderIcon: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
        [theme.breakpoints.down("md")]: {
            display: "none"
        }

    },
    companyLogo:{
        [theme.breakpoints.down("sm")]: {
            width:"50%",
            maxWidth:"100",
            height:"10%",
            //overflow: ,
            //marginLeft: drawerWidth
           // width: appbarwidth
        },
            [theme.breakpoints.up("md")]: {
                justifyContent: "flex-start"
        },
    },
    dashBoardButton:{
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },[theme.breakpoints.down("md")]: {
            display: "none"
        }

    }
}));

export default function Demo() {
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
                color="transparent"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButtonLeft, open && classes.hide)}
                    > {<MenuIcon />}
                    </IconButton>



                    <Box
                        position="absolute"
                        right="10%"
                        className={classes.notificationBox}
                    >
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsRoundedIcon
                                    style={{ fontSize: "25px", color: "black", }}
                                />
                            </Badge>
                            <Typography
                                style={{
                                    marginLeft: "15px",
                                    fontSize: "15px",
                                    color: "black",
                                    textAlign: "center"
                                }}
                                variant="h6"
                                noWrap
                            >
                                John Doe <br />{" "}
                                <Typography
                                    style={{
                                        fontSize: "12px",
                                        marginLeft: "5px",
                                        color: "black"
                                    }}
                                    variant="body1" >
                                    Available
                                </Typography>
                            </Typography>
                            <Avatar style={{marginLeft:"15px",fontSize:"15px"}} alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />

                        </IconButton>
                    </Box>
                    <Box
                        position="absolute"
                        right="10%"
                        className={classes.tabletnotificationBox}
                    >
                        <IconButton aria-label="show 17 new notifications" color="inherit" style={{padding:"15px"}}>
                            <Badge badgeContent={4} color="primary"  style={{padding:"1px",marginLeft:"5px",}}>
                                <NotificationsRoundedIcon style={{ fontSize: "25px", color: "black",marginLeft:"5px" }}/>
                            </Badge>
                            <Badge badgeContent={2} color="primary" style={{padding:"5px",marginLeft:"5px"}}>
                                <MailOutlineOutlinedIcon style={{ fontSize: "25px", color: "black", padding:"2px",marginLeft:"5px" }}/>
                            </Badge>
                            <Avatar style={{marginLeft:"25px",fontSize:"10px"}} src="/broken-image.jpg" />
                            {/*<Avatar style={{marginLeft:"15px",fontSize:"15px"}} alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />*/}

                        </IconButton>
                    </Box>

                    <img className={classes.companyLogo} src={CompanyLogo}/>
                    <IconButton
                        className={clsx(classes.menuButtonRight, open && classes.hide)}>
                        {open?(<MenuIcon onClick={handleDrawerClose} />):(<MenuIcon onClick={handleDrawerOpen} />)}
                    </IconButton>
                </Toolbar>
            </AppBar>
            {/*<div style={{marginTop:"50px",backgroundColor:"red"}}>
                <MiniDrawer/>
            </div>*/}
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.drawerHeader} style={{marginTop:"10px"}}>
                    <Button variant="contained" color="primary" className={classes.dashBoardButton}
                            startIcon={<HomeOutlinedIcon />}> Dashboard </Button>
                    <IconButton
                        className={classes.drawerHeaderIcon}
                        onClick={handleDrawerClose}
                    >
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>

                <List className={classes.mobileList}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeOutlinedIcon />
                        </ListItemIcon>
                        DashBoard
                    </ListItem>
                    <ListItem button>

                            <ListItemIcon>
                                <HomeOutlinedIcon />
                            </ListItemIcon> Template

                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DataUsageOutlinedIcon />
                        </ListItemIcon>
                        Device Management
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeOutlinedIcon />
                        </ListItemIcon>
                        Document Upload
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DevicesOutlinedIcon />
                        </ListItemIcon>
                        Assets
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <MapOutlinedIcon />
                        </ListItemIcon>
                        Map
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ShowChartOutlinedIcon />
                        </ListItemIcon>
                        Graph
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsOutlinedIcon />
                        </ListItemIcon>
                        Setting
                    </ListItem>
                </List>
                <List className={classes.desktopList}>
                    <ListItem button>
                        <ListItemIcon>
                            <WorkIcon />
                        </ListItemIcon>Assets
                        {/*<Typography variant="subtitle1" gutterBottom>

                        </Typography>*/}
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <LocationOnOutlinedIcon />
                        </ListItemIcon>Map
                        {/*<Typography variant="subtitle1" gutterBottom>

                        </Typography>*/}
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ComputerOutlinedIcon />
                        </ListItemIcon>Live Data
                        {/*<Typography variant="subtitle1" gutterBottom>

                        </Typography>*/}
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <PhoneIphoneOutlinedIcon />
                        </ListItemIcon>Device Management
                        {/*<Typography variant="subtitle1" gutterBottom>

                        </Typography>*/}
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AccessTimeOutlinedIcon />
                        </ListItemIcon>Graph
                        {/*<Typography variant="subtitle1" gutterBottom>

                        </Typography>*/}
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <GamesOutlinedIcon />
                        </ListItemIcon>Sensor
                        {/*<Typography variant="subtitle1" gutterBottom>

                        </Typography>*/}
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsOutlinedIcon />
                        </ListItemIcon>Setting
                        {/*<Typography variant="subtitle1" gutterBottom>

                        </Typography>*/}
                    </ListItem>
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open
                })}
            >
                <div className={classes.drawerHeader} />
                <Typography paragraph />
                <Typography paragraph />
            </main>
        </div>
    );
}
