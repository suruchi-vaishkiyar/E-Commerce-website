import { Fragment, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstants";
import "./login.css";
import { updateProfile, clearErrors, loadUser } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.css";
const UpdateProfile = () => {
  const dispatch = useDispatch();
  // const alert = useAlert();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };
  const updateProfileForm = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateProfile(userProfile));
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  useEffect(() => {
    if (isUpdated) {
      alert("Profile Updated Successfully");
      dispatch(loadUser());
      navigate("/account");

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, user, isUpdated]);

  return (
    <div className="login-page">
      <form onSubmit={updateProfileForm}>
        <h2>Update Profile</h2>
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          value={userProfile.name}
          onChange={onChangeInput}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={userProfile.email}
          onChange={onChangeInput}
        />

        <div className="row">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
