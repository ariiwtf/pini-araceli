import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

    const style = {
        borderRadius: '100%',
        border: '2px blueviolet solid',
        position: 'absolute',
        padding: '50px 50px',
        marginLeft: '90%'
      };

      const buttonStyle = {
        margin: '20px'
      }

    return(
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className="general_container">
                <img src='/LOGO.jpg'></img>
                <Button style={buttonStyle} color="inherit">HOME</Button>
                <Button style={buttonStyle} color="inherit">PRODUCTOS</Button>
                <Button style={buttonStyle} color="inherit">NOSOTRXS</Button>
                <Button style={buttonStyle} color="inherit">SANTUARIO SALVAJES</Button>

                <Button style={style}> <CartWidget/> </Button>
                </Toolbar>
            </AppBar>
            </Box>
    
    )
}

export default NavBar