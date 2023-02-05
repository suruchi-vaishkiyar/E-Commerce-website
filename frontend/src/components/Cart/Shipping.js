import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./login.css";
import { saveShippingInfo } from "../../actions/cartAction";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../Cart/CheckoutSteps";
const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shippingInfo } = useSelector((state) => state.cart);

  const [shippingDetails, setShippingDetails] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    phoneNo: "",
  });
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };
  const shippinghandler = async (e) => {
    e.preventDefault();
    // if (phoneNo.length < 10 || phoneNo.length > 10) {
    //   alert("Phone Number should be 10 digits Long");
    //   return;
    // }
    dispatch(saveShippingInfo(shippingDetails));
    alert("saved");
    navigate("/order/confirm");
  };

  return (
    <Fragment>
      <CheckoutSteps activeStep={0} />
      <div className="login-page">
        <form onSubmit={shippinghandler}>
          <h2>Shipping Details</h2>
          <input
            type="text"
            name="address"
            required
            placeholder="Address"
            value={shippingDetails.address}
            onChange={onChangeInput}
          />

          <input
            type="text"
            name="city"
            required
            placeholder="City"
            value={shippingDetails.city}
            onChange={onChangeInput}
          />

          <input
            type="text"
            name="state"
            required
            placeholder="State"
            value={shippingDetails.state}
            onChange={onChangeInput}
          />
          <input
            type="text"
            name="country"
            required
            placeholder="Country"
            value={shippingDetails.country}
            onChange={onChangeInput}
          />
          <input
            type="number"
            name="pinCode"
            required
            placeholder="Pincode"
            value={shippingDetails.pinCode}
            onChange={onChangeInput}
          />

          <input
            type="number"
            name="phoneNo"
            required
            placeholder="Phone No"
            value={shippingDetails.phoneNo}
            onChange={onChangeInput}
          />
          <div className="row">
            <button type="submit">Submit</button>

            {/* <Link to="/login">Login</Link> */}
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Shipping;
