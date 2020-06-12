import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import React from "react";

export default function NotificationBadges(){
    return(
        <Box color="white" position="absolute" right="10%">
            <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={4} color="secondary">
                    <NotificationsRoundedIcon style={{fontSize:"25px",color:"black"}}/>
                </Badge>
                <Typography style={{marginLeft:"15px",fontSize:"15px",color:"black"}} variant="h6" noWrap>
                    John Doe <br/> <Typography style={{fontSize:"12px",marginLeft:"5px",color:"black"}} variant="body1" >
                    Available
                </Typography>
                </Typography>
                <Avatar style={{marginLeft:"15px",fontSize:"15px"}} alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
            </IconButton>
        </Box>
    )
}

