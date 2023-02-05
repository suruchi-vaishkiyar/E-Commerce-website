import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { register, clearErrors } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuthenticated, loading } = useSelector(
    (state) => state.user
  );
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    // try {
    dispatch(register(user));
    // await axios.post("/api/register", { ...user });

    // localStorage.setItem("firstLogin", true);

    // window.location.href = "/";
    //   if (isAuthenticated === true) {
    //     // alert("User Registered");
    //   }
    //   if (isAuthenticated === false) {
    //     alert("Invalid");
    //   }
    // } catch (err) {
    //   alert(err.response.data.msg);
    // }
  };
  useEffect(() => {
    if (error) {
      alert(error);

      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [dispatch, error, alert, isAuthenticated]);
  return (
    <div className="login-page">
      <form onSubmit={registerSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          value={user.name}
          onChange={onChangeInput}
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={user.email}
          onChange={onChangeInput}
        />

        <input
          type="password"
          name="password"
          required
          autoComplete="on"
          placeholder="Password"
          value={user.password}
          onChange={onChangeInput}
        />

        <div className="row">
          <button type="submit">Register</button>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;

// // import React from "react";
// import React, { useState, useEffect } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import { Link } from "react-router-dom";
// import Container from "@mui/material/Container";
// import Alert from "@mui/material/Alert";
// import { signup } from "../Services/taskService";
// import axios from "axios";
// import { register, clearErrors } from "../../redux/actions/userActions";
// import { useDispatch, useSelector } from "react-redux";

// const SignUp = () => {
//   const dispatch = useDispatch();
//   const { error, isAuthenticated } = useSelector((state) => state.user);

//   const [newUser, setNewUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     // error: "",
//     // success: false,
//   });

//   const { name, email, password } = newUser;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewUser({ ...newUser, [name]: value });
//   };

//   const clickSubmit = async (e) => {
//     e.preventDefault();
//     dispatch(register(newUser));
//     // console.log(error);
//   };
//   // console.log(error);
//   // const handleClick = async (e) => {
//   //   e.preventDefault();
//   //   await axios.post("http://localhost:4000/books", book);
//   // };

//   // const clickSubmit = (event) => {
//   //   event.preventDefault(); // so that browser does not reload
//   //   setValues({ ...values, error: false });

//   //   signup({ name, email, password }).then((data) => {
//   //     //   if (data.error) {
//   //     //     setValues({ ...values, error: data.error, success: false });
//   //     //   } else {
//   //     setValues({
//   //       ...values,
//   //       name: "",
//   //       email: "",
//   //       password: "",
//   //       error: "",
//   //       success: true,
//   //     });
//   //     //   }
//   //   }); // sending js object
//   //   // console.log(values);
//   // };

//   // const showError = () => (
//   //   <div
//   //     className="alert alert-danger"
//   //     style={{ display: error ? "" : "none" }}
//   //   >
//   //     <Alert severity="error">{error}</Alert>
//   //   </div>
//   // );

//   // const showSuccess = () => (
//   //   <div
//   //     className="alert alert-info"
//   //     style={{ display: success ? "" : "none" }}
//   //   >
//   //     <Alert severity="success">
//   //       New account is created. Please <Link to="/signin">Signin</Link>.
//   //     </Alert>
//   //   </div>
//   // );

//   return (
//     <>
//       {console.log("USER", newUser)}
//       <Container component="main" maxWidth="xs">
//         {/* {showSuccess()}
//       {showError()} */}
//         <CssBaseline />
//         <div>
//           {/* <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar> */}
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>

//           <form>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   autoComplete="off"
//                   onChange={handleChange}
//                   type="text"
//                   name="name"
//                   value={newUser.name}
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="name"
//                   label="Full Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   onChange={handleChange}
//                   type="email"
//                   value={newUser.email}
//                   autoComplete="off"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   onChange={handleChange}
//                   value={newUser.password}
//                   autoComplete="current-password"
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               onClick={clickSubmit}
//             >
//               Sign Up
//             </Button>
//             <Grid container justify="flex-end">
//               <Grid item>
//                 <Link to="/login" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </form>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default SignUp;
