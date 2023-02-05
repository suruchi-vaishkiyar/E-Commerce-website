import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import UserOptions from "./UserOptions";
import { useMediaQuery, useTheme } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import DrawerComp from "./Drawer";
import { logout } from "../actions/userAction";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch } from "react-redux";
export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  function logoutUser() {
    dispatch(logout());
    alert("Logout successfully");
    navigate("/home");
  }
  function account() {
    navigate("/account");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#f06292" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to="home"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "25pt",
              }}
            >
              LifeStyle Store
            </Link>
          </Typography>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              {!isAuthenticated || user.role === "user" ? (
                <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
                  <Link
                    to="home"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Home
                  </Link>
                </Typography>
              ) : (
                <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
                  <Link
                    to="/admin/dashboard"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Dashboard
                  </Link>
                </Typography>
              )}
              {!isAuthenticated || user.role === "user" ? (
                <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
                  <Link
                    to="products"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Shop
                  </Link>
                </Typography>
              ) : (
                <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
                  <Link
                    to="/admin/All-products"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Products
                  </Link>
                </Typography>
              )}

              {!isAuthenticated || user.role === "user" ? (
                <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
                  <Link
                    to="contact-us"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Contact Us
                  </Link>
                </Typography>
              ) : (
                <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
                  <Link
                    to="/admin/All-orders"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Orders
                  </Link>
                </Typography>
              )}
              {!isAuthenticated || user.role === "user" ? (
                <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
                  <Link
                    to="about"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    About Us
                  </Link>
                </Typography>
              ) : (
                <></>
              )}
              {isAuthenticated && user.role === "user" ? (
                <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
                  <Link
                    to="cart"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <IconButton
                      size="large"
                      aria-label="search"
                      color="inherit"
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                  </Link>
                </Typography>
              ) : (
                <>{/* <h1>Please login</h1> */}</>
              )}
              {/* <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
            <Link
              to="search"
              style={{ textDecoration: "none", color: "white" }}
            >
              <IconButton size="large" aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton>
            </Link>
          </Typography> */}
              {isAuthenticated ? (
                <>
                  {" "}
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 0.5 }}
                  >
                    <Button onClick={account}>
                      <PersonIcon sx={{ color: "white" }} />
                    </Button>
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 0.5 }}
                  >
                    <Button onClick={logoutUser}>
                      <LogoutIcon sx={{ color: "white" }} />
                    </Button>
                  </Typography>
                </>
              ) : (
                <>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 0.5 }}
                  >
                    <Link
                      to="login"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Login
                    </Link>
                  </Typography>
                </>
              )}
            </>
          )}
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
