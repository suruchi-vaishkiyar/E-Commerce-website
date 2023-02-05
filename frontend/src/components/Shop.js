import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, clearErrors } from "../actions/productAction";
import ProductComponent from "./ProductComponent";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Search from "./Search";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

const GridContainer = styled(Grid)`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap:1rem;

@media (max-width:1045px){
  grid-template-columns: 1fr 1fr 1fr;
  
}
@media (max-width:860px){
   grid-template-columns: 1fr 1fr;

}
@media (max-width:580px){
   grid-template-columns: 1fr;
   place-items:center;

}

`;
const Shop = () => {
  const { keyword } = useParams();
  // const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  // const [price, setPrice] = useState([0, 25000]);
  // const [category, setCategory] = useState("");

  // const [ratings, setRatings] = useState(0);
  const {
    products,
    loading,
    error,
    productsCount,

    filteredProductsCount,
  } = useSelector((state) => state.Products);
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword));
  }, [dispatch, keyword, alert, error]);

  // const fetchProducts = async () => {
  //   const response = await axios.get("/api/products").catch((err) => {
  //     console.log("Err: ", err);
  //   });
  //   dispatch(setProducts(response.data));
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // console.log("Products :", products);
  return (
    // <>
    //   <br></br>
    //   <div className="ui grid container">
    //     <ProductComponent />{" "}
    //   </div>
    // </>
    <>
      <br></br>
      <Container>
        <center>
          <h1>ALL PRODUCTS</h1>

          <hr></hr>
          <Search />
          <hr></hr>
        </center>
        <br></br>
        <Box >
          <br></br>
          <GridContainer>
            <ProductComponent />
          </GridContainer>
        </Box>
      </Container>
    </>
  );
};

export default Shop;
