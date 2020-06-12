import React from 'react';
import PersistentDrawerLeft from './Drawer'
import Demo from "./ResponsiveDesktop&MobileDrawer";
import MiniDrawer from './MiniDrawer'



export default function MyApp(){
    return (
        <div>
            {/*<AppBar position="static" style={{backgroundColor:"red"}}>
                <Toolbar style={{backgroundColor:"green"}}>
                    <MenuIcon/>
                </Toolbar>
            </AppBar>*/}
            {/*<Demo/>*/}
            <MiniDrawer/>
            {/*<PersistentDrawerLeft/>*/}

        </div>
    )
}