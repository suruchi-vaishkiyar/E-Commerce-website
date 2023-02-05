import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../actions/productAction";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
import {
  getAllUsers,
  clearErrors,
  deleteUser,
} from "../../actions/userAction.js";
import { DELETE_USER_RESET } from "../../constants/userConstants";

const UserList = () => {
  const dispatch = useDispatch();
  const { error, users } = useSelector((state) => state.allUsers);
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.profile
  );

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert("user deleted successfully");
      //   history.push("/admin/users");
      dispatch({ type: DELETE_USER_RESET });
    }

    dispatch(getAllUsers());
  }, [dispatch, alert, error, deleteError, isDeleted]);

  return (
    <Box component="span">
      <center>
        <h1>ALL USERS</h1>
      </center>
      <hr></hr>
      <Container
      // maxWidth="sm"
      // sx={{
      //   border: "1px solid black",
      // }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableHead style={{ background: "#f8bbd0" }}>
              <TableRow>
                <TableCell style={{ fontSize: "15pt" }}> Sr. No.</TableCell>
                <TableCell style={{ fontSize: "15pt" }}> ID</TableCell>
                <TableCell style={{ fontSize: "15pt" }}> Name</TableCell>
                <TableCell style={{ fontSize: "15pt" }}>Email</TableCell>
                <TableCell style={{ fontSize: "15pt" }}> Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={user._id}>
                  <TableCell align="left">{index + 1}</TableCell>
                  <TableCell align="left">
                    {" "}
                    <Link
                      to={`/admin/user/${user._id}`}
                      // style={{ textDecoration: "none", color: "black" }}
                    >
                      {user._id}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{user.name}</TableCell>
                  <TableCell align="left">{user.email}</TableCell>
                  <TableCell align="left">{user.role}</TableCell>
                  {/* <TableCell align="left">
                  {" "}
                  <Button
                    color="error"
                    size="small"
                    variant="contained"
                    onClick={() => deleteTask(player.id)}
                  >
                    Delete
                  </Button>
                </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default UserList;
