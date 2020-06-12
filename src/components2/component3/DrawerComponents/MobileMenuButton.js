import {makeStyles, useTheme} from "@material-ui/core/styles";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import React, {ReactPropTypes as PropTypes} from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem     from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from "@material-ui/core/CssBaseline";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import DataUsageOutlinedIcon from "@material-ui/icons/DataUsageOutlined";
import DevicesOutlinedIcon from "@material-ui/icons/DevicesOutlined";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import ShowChartOutlinedIcon from "@material-ui/icons/ShowChartOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import WorkIcon from "@material-ui/icons/Work";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ComputerOutlinedIcon from "@material-ui/icons/ComputerOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import GamesOutlinedIcon from "@material-ui/icons/GamesOutlined";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            display:'none'
        },
    },
    /*appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },*/
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        //width: 300,
        //backgroundColor:"red"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    menuButtonLeft: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            display: 'block',
        },
        display:"none"
    },
}));


/*const useStyles = makeStyles((theme) => ({

    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },

}));*/
export default function MobileMenuButton(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
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
                    </ListItemIcon>
                    Template
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
            {/*<List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>*/}
            <Divider />
            {/*<List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>*/}
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return(
        <div className={classes.root}>
            <CssBaseline />
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    edge="start"
                    style={{backgroundColor:"red"}}
                    className={classes.menuButtonLeft}
                    //className={clsx(classes.menuButtonLeft, open && classes.hide)}
                > {<MenuIcon />}
                </IconButton>
            </Toolbar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
        /*<IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            style={{backgroundColor:"red"}}
            className={classes.menuButtonLeft}
            //className={clsx(classes.menuButtonLeft, open && classes.hide)}
        > {<MenuIcon />}
        </IconButton>*/
    )

}

/*MobileMenuButton.propTypes = {

    window: PropTypes.func,
};*/
