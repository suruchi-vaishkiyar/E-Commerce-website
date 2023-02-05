// import React from "react";
// import { Button } from "@mui/material";
// import { Link } from "react-router-dom";
// import "./Home.css";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Item from "./Item";
// import img from "./images/banner.jpg";
const Home = () => {
  var items = [
    {
      name: "Random Name #1",
      // image: img,
      image:
        "https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148897328.jpg?w=1060&t=st=1659187166~exp=1659187766~hmac=55378854e4b4c3ef568910d18bbe50cc378f85a7ca45490256fa1276b86a6079",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      image:
        "https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1060&t=st=1659187272~exp=1659187872~hmac=cbd16e9817383fc8464f34517057db44e4244425f6f85c2f80b463744acaa519",
      description: "Hello World!",
    },
    {
      name: "Random Name #2",
      image:
        "https://img.freepik.com/free-psd/online-shopping-with-mobile-shopping-elements-mockup-template_1150-38884.jpg?w=826&t=st=1659187439~exp=1659188039~hmac=15ff7cfc1edf60506700a34f5723dab1bfc0482d932d7674e74423f496eeb74b",
      description: "Hello World!",
    },
    {
      name: "Random Name #2",
      image:
        "https://img.freepik.com/premium-photo/shopping-cart-is-concrete-podium-has-neon-illuminated-website-icon-back_172660-103.jpg?w=1060",
      description: "Hello World!",
    },
  ];
  return (
    // <div id="banner_image">
    //   <div id="banner_content">
    //     <Link to="/shop" style={{ textDecoration: "none", color: "white" }}>
    //       <Button variant="contained" size="large" color="error">
    //         Shop Now
    //       </Button>
    //     </Link>
    //   </div>
    // </div>
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default Home;
