import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/cartAction";
import {
  selectedProduct,
  deleteProduct,
  clearErrors,
} from "../../actions/productAction";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ActionTypes } from "../../constants/productConstants";
const Product = () => {
  const { productId } = useParams();
  // const navigate = useNavigate();

  let product = useSelector((state) => state.ProductDetails);
  const { _id, image, title, price, category, description } = product;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const fetchProductDetail = async (_id) => {
    const response = await axios.get(`/api/product/${_id}`).catch((err) => {
      console.log("Err: ", err);
    });
    dispatch(selectedProduct(response.data));
  };
  //   const deleteThisProduct = (e) => {
  //     dispatch(deleteProduct(e));
  //     alert("Product deleted");
  //     // navigate("/cart");
  //   };

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  );

  const deleteThisProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail(productId);
    }
    if (deleteError) {
      alert(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert("Product Deleted Successfully");
      navigate("/admin/dashboard");
      dispatch({ type: ActionTypes.DELETE_PRODUCT_RESET });
    }
  }, [dispatch, alert, deleteError, isDeleted, productId]);

  //   useEffect(() => {
  //     if (productId && productId !== "") fetchProductDetail(productId);

  //     // return () => {
  //     //   dispatch(removeSelectedProduct());
  //     // };
  //   }, [productId]);
  return (
    <>
      <br></br>
      <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img
                    className="ui fluid "
                    src={image}
                    width="300"
                    height="350"
                  />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  {/* <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div> */}
                  {/* <div className="visible content">Add to Cart</div> */}
                  <Link
                    to={`/admin/${_id}/update-product`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button variant="contained">Update Product</Button>
                  </Link>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteThisProduct(_id)}
                  >
                    Delete Product
                  </Button>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
