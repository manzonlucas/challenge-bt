import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { baseUrl } from '../services/api';

export default function CreateProduct() {

  const [payload, setPayload] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, [])

  async function getCategories() {
    try {
      const response = await axios.get(`${baseUrl}/categories`);
      setCategories(response.data);
      console.log(categories);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeForm(e) {
    setPayload({ ...payload, [e.target.id]: e.target.value });
    console.log(payload);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (

    <Layout>
      <div className="bg-indigo-50 bg-opacity-50 w-4/6 m-auto p-4 rounded-md mt-4" onSubmit={handleSubmit}>

        <h2>Create new product</h2>

        <form action="" className="flex flex-col">

          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="bg-indigo-50 rounded-md px-2 py-2" onChange={handleChangeForm} />

          <label htmlFor="price">Price</label>
          <input type="number" id="price" className="bg-indigo-50 rounded-md px-2 py-2" onChange={handleChangeForm} />

          <label htmlFor="stock">Stock</label>
          <input type="number" id="stock" className="bg-indigo-50 rounded-md px-2 py-2" onChange={handleChangeForm} />

          <label htmlFor="category">Category</label>
          <select name="category" id="category" className="bg-indigo-50 rounded-md px-2 py-2" onChange={handleChangeForm}>
            {categories.map(category => {
              return (
                <option key={category.id} value={category.id}>{category.name}</option>
              )
            })}
          </select>
          <button>Submit</button>
        </form>
      </div>
    </Layout>
  )
}