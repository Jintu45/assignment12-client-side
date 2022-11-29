import React from "react";
import Toast from "react-hot-toast";

const AddProduct = () => {
  const addNewProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const product = {
      name: form.name.value,
      price: form.price.value,
      number: form.number.value,
      location: form.location.value,
      useTime: form.useTime.value,
      condition: form.condition.value,
      category: form.category.value,
      description: form.description.value,
    };
    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    }).then((data) => {
      if (data.ok) {
        Toast.success("Product Added To The Server");
        form.name.value = "";
        form.price.value = "";
        form.number.value = "";
        form.location.value = "";
        form.useTime.value = "";
        form.condition.value = "";
        form.category.value = "";
        form.description.value = "";
      } else {
        Toast.error("Something is Wrong");
      }
    });
  };

  return (
    <div>
      <div className="card w-100 bg-base-100 shadow-xl">
        <form onSubmit={addNewProduct} className="card-body">
          <div className="form-control grid grid-cols-2 gap-4">
            <label className="input-group mb-3 input-group-vertical">
              <span>Product Name</span>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                className="input input-bordered"
              />
            </label>
            <label className="input-group mb-3 input-group-vertical">
              <span>Product Price</span>
              <input
                type="text"
                name="price"
                placeholder="Product Price"
                className="input input-bordered"
              />
            </label>
            <label className="input-group mb-3 input-group-vertical">
              <span>Number</span>
              <input
                type="text"
                name="number"
                placeholder="Seller Phone Number"
                className="input input-bordered"
              />
            </label>
            <label className="input-group mb-3 input-group-vertical">
              <span>Location</span>
              <input
                type="text"
                name="location"
                placeholder="Seller Location"
                className="input input-bordered"
              />
            </label>
            <label className="input-group mb-3 input-group-vertical">
              <span>Description</span>
              <textarea
                name="description"
                className="textarea input input-bordered"
                placeholder="Say Something About This Product"
              ></textarea>
            </label>
            <label className="input-group mb-3 input-group-vertical">
              <span>Use Time</span>
              <input
                type="text"
                name="useTime"
                placeholder="ex: 2 month/year"
                className="input input-bordered"
              />
            </label>
            <label className="input-group mb-3 input-group-vertical">
              <span>Condition Type</span>
              <select
                name="condition"
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  Select Condition
                </option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </label>
            <label className="input-group mb-3 input-group-vertical">
              <span>Category</span>
              <select name="category" className="select select-bordered w-full">
                <option disabled selected>
                  Select Category
                </option>
                <option>Oppo</option>
                <option>Samsung</option>
                <option>Fair</option>
              </select>
            </label>
          </div>
          <div className="card-actions justify-end">
            <input
              type="submit"
              className="btn btn-primary"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
