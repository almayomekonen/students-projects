import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import logo from "../../assets/square.png";
import ButtonElem from "../Button/Button";

const drawerWidth = 240;
const navItems = ["Home", "About", "Register", "Projects"];

// eslint-disable-next-line react/prop-types
function Navbar({ user, onLogout }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const filteredNavItems = user
    ? navItems.filter((item) => item !== "Register")
    : navItems;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {filteredNavItems.map((navItem) => (
          <ListItem key={navItem} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => console.log("Navigating to", navItem)}
            >
              <Link to={`/${navItem.toLowerCase()}`}>
                <ListItemText primary={navItem} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/home">
              <img
                src={logo}
                alt="icon"
                style={{ height: "40px", width: "auto", cursor: "pointer" }}
              />
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {filteredNavItems.map((navItem) => (
              <Button key={navItem} sx={{ color: "#fff" }}>
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={`/${navItem.toLowerCase()}`}
                >
                  {navItem}
                </Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ ml: "auto" }}>
            {user && (
              <>
                <ButtonElem onClick={onLogout} style={{ color: "white" }}>
                  LogOut
                </ButtonElem>
              </>
            )}
          </Box>
          <Box sx={{ ml: "auto" }}>
            {user && <h1>Welcome {user?.username || "Guest"}</h1>}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Navbar;
