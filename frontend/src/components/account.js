import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";

const Account = () => {
  // const dispatch = useDispatch();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  // const { _id, name, email, password, role } = user;

  // const fetchProductDetail = async (_id) => {
  //   const response = await axios.get(`/api/me/${_id}`).catch((err) => {
  //     console.log("Err: ", err);
  //   });
  //   dispatch(loadUser(response.data));
  // };
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
                <h1>My Profile</h1>
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
                  <Button variant="contained">
                    <Link to="/orders" style={{ color: "white" }}>
                      My Orders
                    </Link>
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained">
                    <Link to="/update-password" style={{ color: "white" }}>
                      Change Password
                    </Link>
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained">
                    <Link to="/update-profile" style={{ color: "white" }}>
                      Edit Profile
                    </Link>
                  </Button>
                </Grid>
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

export default Account;
