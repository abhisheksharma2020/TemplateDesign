import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import WorkIcon from "@material-ui/icons/Work";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ComputerOutlinedIcon from "@material-ui/icons/ComputerOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import GamesOutlinedIcon from "@material-ui/icons/GamesOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import List from "@material-ui/core/List";
import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import DataUsageOutlinedIcon from "@material-ui/icons/DataUsageOutlined";
import DevicesOutlinedIcon from "@material-ui/icons/DevicesOutlined";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import ShowChartOutlinedIcon from "@material-ui/icons/ShowChartOutlined";

const useStyles = makeStyles((theme) => ({

    desktopList: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
    },

}));

export default function DesktopListMain(){
    const classes = useStyles();
    const theme = useTheme();

    return (
        <List className={classes.desktopList}>
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
    )
}