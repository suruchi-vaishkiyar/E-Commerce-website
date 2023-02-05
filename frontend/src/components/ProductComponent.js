import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";



const ProductCard = styled(Card)`
height:100%;
padding:1rem;
@media (max-width:580px){
  width:280px

}



`;
const ProductGrid = styled(Grid)`

`



const ProductComponent = () => {
  const { products } = useSelector((state) => state.Products);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const renderList =
    products &&
    products.map((product) => {
      const { _id, title, image, price, category } = product;
      return (
        // <div className="four wide column" key={id}>
        //   <Link to={`/product/${id}`}>
        //     <div className="ui link cards">
        //       <div className="card">
        //         <div className="image">
        //           <img src={image} alt={title} />
        //         </div>
        //         <div className="content">
        //           <div className="header">{title}</div>
        //           <div className="meta price">$ {price}</div>
        //           <div className="meta">{category}</div>
        //         </div>
        //       </div>
        //     </div>
        //   </Link>
        // </div>
        <ProductGrid>
          <Link to={`/product/${_id}`}>
            <ProductCard className="productResponsive">
              <div>
                {/* <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{ display: "flex" }}
               
              /> */}
                <img src={image} alt={title} width="250" height="250" />
              </div>
              <CardContent>
                <Typography gutterBottom component="div">
                  {title}
                </Typography>

                <Typography variant="body2">₹{price}</Typography>
                <Typography variant="body2">{category}</Typography>
              </CardContent>
              {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
            </ProductCard>
          </Link>
        </ProductGrid>
      );
    });
  return <>{renderList}</>;
};

export default ProductComponent;
