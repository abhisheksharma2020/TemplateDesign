import React from "react";
import CompanyLogo from "../../../img/logo.png";
import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles, useTheme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    companyLogo:{
        [theme.breakpoints.down("sm")]: {
            width:"50%",
            //maxWidth:"100",
            height:"10%",
            //overflow: ,
            //marginLeft: drawerWidth
            // width: appbarwidth
        },
        marginTop:5
        //width:"50%",
        //maxWidth:"100",
        //height:"10%",
        /*[theme.breakpoints.up("md")]: {
            justifyContent: "flex-start"
        },*/
    },

}));

export default function ProCloudLogo(){
    const classes = useStyles();
    const theme = useTheme();
    return(
        <img className={classes.companyLogo} src={CompanyLogo}/>
    )
}