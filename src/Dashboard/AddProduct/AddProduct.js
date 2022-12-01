import React, { useContext } from "react";
import Toast, { toast } from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const AddProduct = () => {
  const {user} = useContext(AuthContext)
  const email = user?.email;
  const verify = 'null'
  const addNewProduct = (event) => {
    event.preventDefault();
    const form = event.target;
     const image = form.img.value;
     const name = form.name.value;
     const price = form.price.value;
     const number = form.number.value;
     const location = form.location.value;
     const useTime = form.useTime.value;
     const condition = form.condition.value;
     const category_id = form.category.value;
     const description = form.description.value

  const product = {

        image,
        name,
        price,
        number,
        location,
        useTime,
        condition,
        category_id  ,
        description,
        email,
        verify

       }
       console.log(product)
    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        toast.success('product added successful')
      }
    })
  };

  return (
    <div>
      <div className="card w-100 bg-base-100 shadow-xl">
        <form onSubmit={addNewProduct} className="card-body">
          <div className="form-control grid grid-cols-2 gap-4">
          <label className="input-group mb-3 input-group-vertical">
              <span>Product Image</span>
              <input
                type="url"
                name="img"
                placeholder="Product Image"
                className="input input-bordered"
              />
            </label>
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
                <option value='1'>Vivo</option>
                <option value='2'>Oppo</option>
                <option value='3'>Samsung</option>
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
