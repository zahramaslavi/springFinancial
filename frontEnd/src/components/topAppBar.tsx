import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const TopAppBar = () => {

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
            <Button color="inherit"><Link to="/productsSearch" style={{ color: "#FFF", textDecoration: "none" }}>Products Manager</Link></Button>

            <Button color="inherit"><Link to="/productsManager" style={{ color: "#FFF", textDecoration: "none" }}>Search Products</Link></Button>
        </Box>
        
      </Toolbar>
    </AppBar>
  );
}

export default TopAppBar;