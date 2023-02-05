import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { removeFromCart, addToCart, removeOne } from "../actions/cartAction";
const CartComponent = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const remove = (e) => {
    // console.log(e);
    dispatch(removeFromCart(e));
  };
  const rmvOne = (e) => {
    dispatch(removeOne(e));
  };
  const send = (e) => {
    // console.log(e);
    dispatch(addToCart(e));
  };
  const renderList =
    cartItems &&
    cartItems.map((item) => {
      // const { _id, title, image, price, category, qnty } = item;
      return (
        <>
          <div key={item.product}>
            <Grid container spacing={2} style={{ border: "1px solid black" }}>
              <Grid item xs={2}>
                <img
                  src={item.image}
                  alt={item.title}
                  width="100"
                  height="120"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom variant="h5" component="div">
                  <Link to={`/product/${item.product}`}>{item.title}</Link>
                </Typography>
                <Typography variant="body2">₹{item.price}</Typography>
                <Typography variant="body2">{item.category}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Card>
                  <CardContent>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => remove(item)}
                    >
                      Remove
                    </Button>
                    <br></br>
                    <br></br>
                    <Button
                      size="small"
                      variant="contained"
                      onClick={
                        item.qnty <= 1 ? () => remove(item) : () => rmvOne(item)
                      }
                    >
                      -
                    </Button>{" "}
                    {item.qnty}{" "}
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => send(item)}
                    >
                      +
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              {/* <Grid item xs={6} md={8}></Grid> */}
            </Grid>
          </div>
          <br></br>
        </>
      );
    });
  return <>{renderList}</>;
};

export default CartComponent;
