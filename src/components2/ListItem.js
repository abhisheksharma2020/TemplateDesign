import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import WorkIcon from "@material-ui/icons/Work";
import Typography from "@material-ui/core/Typography";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ComputerOutlinedIcon from "@material-ui/icons/ComputerOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import GamesOutlinedIcon from "@material-ui/icons/GamesOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import List from "@material-ui/core/List";
import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

export default function MenuListItems(){
    return(
        <div>
            <List >
                <ListItem>
                    <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
                    <Typography variant="subtitle1" gutterBottom>DashBoard</Typography>
                </ListItem>
                <ListItem>
                    <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
                    <Typography variant="subtitle1" gutterBottom>Template</Typography>
                </ListItem>
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
        </div>
    )
}