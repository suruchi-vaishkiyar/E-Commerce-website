// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Nav";
import Home from "./Home/Home";
import Shop from "./Shop";
import About from "./About/About";
import Contact from "./Contact/Contact";
import SignUp from "./SignUp/SignUp";
import Signin from "./SignIn/Signin";
import Cart from "./Cart/Cart";
import ProductDetails from "./ProductDetails";
import Account from "./account";
import UpdateProfile from "./UpdateProfile/updateProfile";
import UpdatePassword from "./UpdatePassword/UpdatePassword";
import store from "../store";
import { useEffect, useState } from "react";
import { loadUser } from "../actions/userAction";
import { useSelector } from "react-redux";
import UserOptions from "./UserOptions";
import DashBoard from "./admin/DashBoard";
import ProductList from "./admin/ProductList";
import Footer from "./Footer/Footer";
import AddProduct from "./admin/AddProduct";
import Product from "./admin/Product";
import UpdateProduct from "./admin/UpdateProduct";
import UserList from "./admin/UserList";
import User from "./admin/User";
import Search from "./Search";
import OrderList from "./admin/OrderList";
import OrderDetails from "./admin/OrderDetails";
import Shipping from "./Cart/Shipping";
import ConfirmOrder from "./Cart/ConfirmOrder";
// import axios from "axios";
// import Payment from "./Cart/Payment";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./Cart/OrderSuccess";
// import MyOrder from "./Order/MyOrder";

function MyApp() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  // const [stripeApiKey, setStripeApiKey] = useState("");
  // async function getStripeApiKey() {
  //   const { data } = await axios.get("/api/stripeapikey");

  //   setStripeApiKey(data.stripeApiKey);
  // }
  useEffect(() => {
    store.dispatch(loadUser());
    // getStripeApiKey();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        {/* {isAuthenticated && <UserOptions user={user} />} */}
        {/* {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            {isAuthenticated && user.role === "user" && (
              <Routes>
                <Route
                  path="process/payment"
                  element={<Payment></Payment>}
                ></Route>
              </Routes>
            )}
          </Elements>
        )} */}
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="home" element={<Home></Home>}></Route>
          <Route
            path="/product/:productId"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route path="products" element={<Shop></Shop>}></Route>
          <Route path="/products/:keyword" element={<Shop></Shop>}></Route>
          <Route path="search" element={<Search></Search>}></Route>
          <Route path="contact-us" element={<Contact></Contact>}></Route>
          <Route path="about" element={<About></About>}></Route>
          {isAuthenticated && user.role === "user" && (
            <Route path="cart" element={<Cart></Cart>}></Route>
          )}
          {isAuthenticated && user.role === "user" && (
            <Route path="shipping" element={<Shipping></Shipping>}></Route>
          )}
          {isAuthenticated && user.role === "user" && (
            <Route
              path="order/confirm"
              element={<ConfirmOrder></ConfirmOrder>}
            ></Route>
          )}
          {isAuthenticated && user.role === "user" && (
            <Route
              path="success"
              element={<OrderSuccess></OrderSuccess>}
            ></Route>
          )}
          {/* {isAuthenticated && user.role === "user" && (
            <Route path="orders" element={<MyOrder></MyOrder>}></Route>
          )} */}
          {/* {isAuthenticated && user.role === "user" && (
            <Route path="process/payment" element={<Payment></Payment>}></Route>
          )} */}

          <Route path="signup" element={<SignUp></SignUp>}></Route>
          <Route path="login" element={<Signin></Signin>}></Route>
          {isAuthenticated && (
            <Route path="account" element={<Account></Account>}></Route>
          )}
          {isAuthenticated && (
            <Route
              path="update-profile"
              element={<UpdateProfile></UpdateProfile>}
            ></Route>
          )}
          {isAuthenticated && (
            <Route
              path="update-password"
              element={<UpdatePassword></UpdatePassword>}
            ></Route>
          )}
          {isAuthenticated && user.role === "admin" && (
            <Route
              path="/admin/dashboard"
              element={<DashBoard></DashBoard>}
            ></Route>
          )}
          {isAuthenticated && user.role === "admin" && (
            <Route
              path="/admin/All-products"
              element={<ProductList></ProductList>}
            ></Route>
          )}
          {isAuthenticated && user.role === "admin" && (
            <Route
              path="/admin/Add-products"
              element={<AddProduct></AddProduct>}
            ></Route>
          )}
          {isAuthenticated && user.role === "admin" && (
            <Route
              path="/admin/product/:productId"
              element={<Product></Product>}
            ></Route>
          )}
          {isAuthenticated && user.role === "admin" && (
            <Route
              path="/admin/:productId/update-product"
              element={<UpdateProduct></UpdateProduct>}
            ></Route>
          )}
          {isAuthenticated && user.role === "admin" && (
            <Route path="/admin/users" element={<UserList></UserList>}></Route>
          )}
          {isAuthenticated && user.role === "admin" && (
            <Route path="/admin/user/:userId" element={<User></User>}></Route>
          )}
          {isAuthenticated && user.role === "admin" && (
            <Route
              path="/admin/All-orders"
              element={<OrderList></OrderList>}
            ></Route>
          )}
          {isAuthenticated && user.role === "admin" && (
            <Route
              path="/admin/order/:orderId"
              element={<OrderDetails></OrderDetails>}
            ></Route>
          )}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      <br></br>
      <br></br>
    </div>
  );
}

export default MyApp;
