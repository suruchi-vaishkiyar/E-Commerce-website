import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";
import { useAlert } from "react-alert";

const UserOptions = ({ user }) => {
  //   const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  //   const alert = useAlert();
  const dispatch = useDispatch();
  const options = [
    { icon: <ListAltIcon />, name: "Orders", func: orders },
    { icon: <PersonIcon />, name: "Profile", func: account },
    { icon: <LogoutIcon />, name: "Logout", func: logoutUser },
  ];
  //if user is admin then this function will add dashboard option in the starting of the list
  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }
  function dashboard() {
    navigate("/admin/dashboard");
  }

  function orders() {
    navigate("/orders");
  }
  function account() {
    navigate("/account");
  }
  function cart() {
    navigate("/cart");
  }
  function logoutUser() {
    dispatch(logout());
    alert("Logout successfully");
    navigate("/home");
  }

  return (
    <Fragment>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        // onClose={() => setOpen(false)}
        // onOpen={() => setOpen(true)}
        // open={open}
        direction="down"
        icon={<SpeedDialIcon />}
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            // tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOptions;
