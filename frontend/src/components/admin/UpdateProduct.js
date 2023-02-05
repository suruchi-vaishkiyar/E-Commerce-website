import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updateProduct } from "../../actions/productAction";
import { ActionTypes } from "../../constants/productConstants";
import "./login.css";
const UpdateProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  let { error, product } = useSelector((state) => state.ProductDetails);
  // const { _id, image, title, price, category, description } = product;
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.product);

  const [updatedProduct, setUpdatedProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  useEffect(() => {
    // if (product && product._id !== productId) {
    //   dispatch(getProductDetails(productId));
    // } else {
    //   setName(product.name);
    //   setDescription(product.description);
    //   setPrice(product.price);
    //   setCategory(product.category);
    //   setStock(product.Stock);
    //   setOldImages(product.images);
    // }
    // if (productId && productId !== "") {
    //   setUpdatedProduct(product);
    // }
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert("Product Updated Successfully");
      // history.push("/admin/products");
      dispatch({ type: ActionTypes.UPDATE_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, isUpdated, productId, product, updateError]);

  const updateThisProduct = async (e) => {
    e.preventDefault();

    dispatch(updateProduct(productId, updatedProduct));
  };

  return (
    <div className="login-page">
      <form onSubmit={updateThisProduct}>
        <h2>Update Product</h2>
        <input
          type="text"
          name="title"
          required
          placeholder="Title"
          value={updatedProduct.title}
          onChange={onChangeInput}
        />

        <input
          type="number"
          name="price"
          required
          placeholder="Price"
          value={updatedProduct.price}
          onChange={onChangeInput}
        />

        <input
          type="text"
          name="description"
          required
          autoComplete="on"
          placeholder="Description"
          value={updatedProduct.description}
          onChange={onChangeInput}
        />
        <input
          type="text"
          name="category"
          required
          autoComplete="on"
          placeholder="Category"
          value={updatedProduct.category}
          onChange={onChangeInput}
        />
        <input
          type="url"
          name="image"
          required
          placeholder="Image"
          value={updatedProduct.image}
          onChange={onChangeInput}
        />

        <div className="row">
          <button type="submit">Update</button>
          {/* <Link to="/login">Login</Link> */}
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
