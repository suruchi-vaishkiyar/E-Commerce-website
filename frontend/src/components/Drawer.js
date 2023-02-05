import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../actions/userAction";
// const pages = ["Products", "Services", "ABoutUs", "ContactUs"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  function logoutUser() {
    dispatch(logout());
    alert("Logout successfully");
    navigate("/home");
  }
  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {!isAuthenticated || user.role === "user" ? (
            <ListItem button onClick={() => navigate("/")}>
              <ListItemText>Home</ListItemText>
            </ListItem>
          ) : (
            <ListItem button onClick={() => navigate("/admin/dashboard")}>
              <ListItemText>DashBoard</ListItemText>
            </ListItem>
          )}
          {!isAuthenticated || user.role === "user" ? (
            <ListItem button onClick={() => navigate("/products")}>
              <ListItemText>Shop</ListItemText>
            </ListItem>
          ) : (
            <ListItem button onClick={() => navigate("/admin/All-products")}>
              <ListItemText>Products</ListItemText>
            </ListItem>
          )}
          {!isAuthenticated || user.role === "user" ? (
            <ListItem button onClick={() => navigate("/contact-us")}>
              <ListItemText>Contact Us</ListItemText>
            </ListItem>
          ) : (
            <ListItem button onClick={() => navigate("/admin/All-orders")}>
              <ListItemText>Orders</ListItemText>
            </ListItem>
          )}
          {!isAuthenticated || user.role === "user" ? (
            <ListItem button onClick={() => navigate("/about")}>
              <ListItemText>About Us</ListItemText>
            </ListItem>
          ) : (
            <></>
          )}
          {isAuthenticated && user.role === "user" ? (
            <ListItem button onClick={() => navigate("/cart")}>
              <ListItemText>Cart</ListItemText>
            </ListItem>
          ) : (
            <></>
          )}
          {isAuthenticated ? (
            <ListItem button onClick={() => navigate("/account")}>
              <ListItemText>Profile</ListItemText>
            </ListItem>
          ) : (
            <ListItem button onClick={() => navigate("/login")}>
              <ListItemText>Login</ListItemText>
            </ListItem>
          )}
          {isAuthenticated ? (
            <ListItem button onClick={logoutUser}>
              <ListItemText>Logout</ListItemText>
            </ListItem>
          ) : (
            <ListItem button onClick={() => navigate("/signup")}>
              <ListItemText>Signup</ListItemText>
            </ListItem>
          )}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
