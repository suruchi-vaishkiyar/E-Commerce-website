import React, { Fragment, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  getUserDetails,
  clearErrors,
  deleteUser,
} from "../../actions/userAction.js";
import { DELETE_USER_RESET } from "../../constants/userConstants";
const User = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, user } = useSelector((state) => state.userDetails);
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
      navigate("/admin/dashboard");
      dispatch({ type: DELETE_USER_RESET });
    }

    dispatch(getUserDetails(userId));
  }, [dispatch, alert, error, deleteError, isDeleted]);
  return (
    <Fragment>
      <Container maxWidth="sm">
        <Box sx={{ flexGrow: 1 }}>
          <br></br>
          <Grid container spacing={2} style={{ border: "1px solid #0288d1" }}>
            <Grid
              item
              xs={12}
              style={{ border: "1px solid #0288d1", background: "#0288d1" }}
            >
              <center>
                <h1>User Profile</h1>
              </center>
              <br></br>
            </Grid>
            <br></br>
            <br></br>
            <Grid container item xs={12}>
              <Grid container item xs={12}>
                <Grid item xs={4}>
                  <h4>Full Name</h4>
                </Grid>
                <Grid item xs={8}>
                  <p>{user.name}</p>
                </Grid>
              </Grid>
              <br></br>
              <br></br>
              <Grid container item xs={12}>
                <Grid item xs={4}>
                  <h4>Email</h4>
                </Grid>
                <Grid item xs={8}>
                  <p>{user.email}</p>
                </Grid>
              </Grid>
              <br></br>
              <br></br>
              <Grid container item xs={12}>
                <Grid item xs={4}>
                  <h4>Role</h4>
                </Grid>
                <Grid item xs={8}>
                  <p>{user.role}</p>
                </Grid>
              </Grid>
              <br></br>
              <br></br>
              <Grid container item xs={12}>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteUserHandler(user._id)}
                  >
                    Delete User
                  </Button>
                </Grid>
                {/* <Grid item xs={4}>
                  <Button variant="contained">
                    <Link to="/update-password" style={{ color: "white" }}>
                      Update User
                    </Link>
                  </Button>
                </Grid> */}
                {/* <Grid item xs={4}>
                  <Button variant="contained">
                    <Link to="/update-profile" style={{ color: "white" }}>
                      Edit Profile
                    </Link>
                  </Button>
                </Grid> */}
                <br></br>
                <br></br>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  );
};

export default User;
