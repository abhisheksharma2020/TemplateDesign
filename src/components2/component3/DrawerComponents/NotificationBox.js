import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    notificationBox:{
        [theme.breakpoints.down("sm")]: {
            display: "none",
            flexShrink: 0,
        },
        [theme.breakpoints.up("lg")]: {
            display: "inline",
            flexShrink: 0,
        }
    },

}));


export default function Notification() {
    const classes = useStyles();
    const theme = useTheme();

    return(

        <Box
            position="absolute"
            right="10%"
            className={classes.notificationBox}
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

    )

}