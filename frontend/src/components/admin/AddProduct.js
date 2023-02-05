import React, { useState, useEffect } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createProduct, clearErrors } from "../../actions/productAction";
import { ActionTypes } from "../../constants/productConstants";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const createNewProduct = async (e) => {
    e.preventDefault();

    dispatch(createProduct(newProduct));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert("Product Created Successfully");
      navigate("/admin/dashboard");
      dispatch({ type: ActionTypes.NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, success]);

  return (
    <div className="login-page">
      <form onSubmit={createNewProduct}>
        <h2>Add New Product</h2>
        <input
          type="text"
          name="title"
          required
          placeholder="Title"
          value={newProduct.title}
          onChange={onChangeInput}
        />

        <input
          type="number"
          name="price"
          required
          placeholder="Price"
          value={newProduct.price}
          onChange={onChangeInput}
        />

        <input
          type="text"
          name="description"
          required
          autoComplete="on"
          placeholder="Description"
          value={newProduct.description}
          onChange={onChangeInput}
        />
        <input
          type="text"
          name="category"
          required
          autoComplete="on"
          placeholder="Category"
          value={newProduct.category}
          onChange={onChangeInput}
        />
        <input
          type="url"
          name="image"
          required
          placeholder="Image"
          value={newProduct.image}
          onChange={onChangeInput}
        />

        <div className="row">
          <button type="submit">Add</button>
          {/* <Link to="/login">Login</Link> */}
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
