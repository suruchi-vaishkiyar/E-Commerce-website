import { Fragment, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstants";
import "./login.css";
import {
  updateProfile,
  clearErrors,
  loadUser,
  updatePassword,
} from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.css";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  // const alert = useAlert();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };
  const updatePasswordForm = async (e) => {
    e.preventDefault();
    // try {
    dispatch(updatePassword(password));
    // } catch (err) {
    //   alert("invalid");
    // }
  };
  useEffect(() => {
    if (error) {
      // console.log(error);
      alert(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert("Password Updated Successfully");

      navigate("/account");

      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }
  }, [dispatch, error, isUpdated]);
  return (
    <div className="login-page">
      <form onSubmit={updatePasswordForm}>
        <h2>Change Password</h2>
        <input
          type="password"
          name="oldPassword"
          required
          autoComplete="on"
          placeholder="Old Password"
          value={password.oldPassword}
          onChange={onChangeInput}
        />
        <input
          type="password"
          name="newPassword"
          required
          autoComplete="on"
          placeholder="New Password"
          value={password.newPassword}
          onChange={onChangeInput}
        />
        <input
          type="password"
          name="confirmPassword"
          required
          autoComplete="on"
          placeholder="Confirm Password"
          value={password.confirmPassword}
          onChange={onChangeInput}
        />

        <div className="row">
          <button type="submit">Change</button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
