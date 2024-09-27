import React from 'react';
import { Link, Outlet } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import './Layout.css';

function Layout() {
  const [value, setValue] = React.useState(0);

  const handleNavigationChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
    console.info(event.target)
  };

  return (
    <div className="layout-container">
      {/* The Outlet will render the child route components */}
      <div className="content">
        <Outlet />
      </div>
      <BottomNavigation
        value={value}
        onChange={handleNavigationChange}
        showLabels
        className="bottom-nav"
      >
        <BottomNavigationAction 
          label="Home" 
          icon={<HomeIcon />} 
          component={Link} 
          to="/" 
        />
        <BottomNavigationAction 
          label="Settings" 
          icon={<SettingsIcon />} 
          component={Link} 
          to="/settings" 
        />
      </BottomNavigation>
    </div>
  );
}

export default Layout;
