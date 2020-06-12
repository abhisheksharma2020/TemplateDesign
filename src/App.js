import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersistentDrawerLeft from './components/SideBar'
import WithHeatMap from "./MapDesign/Mapcomponents/MainHeatMap";
import GoogleMapAPI from "./MapDesign/Mapcomponents/Map";
import MyApp from './components2/Appbar'
import ComplexGrid from './components/gridlayout'
//import PersistentDrawerLeft from './components2/component3/ResponsiveDrawer'



function App() {
  return (
    <div className="App">
        {/*<MyApp/>*/}
       {/* <PersistentDrawerLeft/>*/}
        {/*<MediaQuery/>*/}
       {/* <PersistentDrawerLeft/>*/}
        {/*<DrawerImports/>*/}
        <WithHeatMap/>



    </div>
  );
}

export default App;
