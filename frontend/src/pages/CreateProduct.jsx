import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { baseUrl } from '../services/api';

export default function CreateProduct() {

  const [payload, setPayload] = useState({ category: 1 });
  const [categories, setCategories] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    getCategories();
  }, [])

  async function getCategories() {
    try {
      const response = await axios.get(`${baseUrl}/categories`);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
      setErrorMsg(error.response.data.message);
    }
  }

  function handleChangeForm(e) {

    if (e.target.type === 'number' || e.target.type === 'select-one') {
      setPayload({ ...payload, [e.target.id]: parseInt(e.target.value) });
    }
    else {
      setPayload({ ...payload, [e.target.id]: e.target.value });
    }
  }

  async function postProduct(product) {
    try {
      const response = await axios.post(`${baseUrl}/products`, product,
        { headers: { "Content-Type": 'application/json' } });
      console.log(response);
      setPayload({ category: 1 });
      cleanForm();
      setSuccessMsg('Product created successfully');
      setErrorMsg(null);

    } catch (error) {
      console.log(error);
      setErrorMsg(error.response.data.message);
      setSuccessMsg('');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    postProduct(payload);
  }

  function cleanForm() {
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('stock').value = '';
    document.getElementById('category').value = 1;
  }

  return (

    <Layout>
      <div className="bg-indigo-50 bg-opacity-50 w-4/6 m-auto p-4 rounded-md mt-4">

        <h2 className="text-center text-2xl">Create new product</h2>

        <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>

          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="bg-indigo-50 rounded-md px-2 py-2 shadow-lg" onChange={handleChangeForm} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input type="number" id="price" className="bg-indigo-50 rounded-md px-2 py-2 shadow-lg" onChange={handleChangeForm} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="stock">Stock</label>
            <input type="number" id="stock" className="bg-indigo-50 rounded-md px-2 py-2 shadow-lg" onChange={handleChangeForm} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="category">Category</label>
            <select name="category" id="category" className="bg-indigo-50 rounded-md px-2 py-2 shadow-lg" onChange={handleChangeForm}>
              {categories.map(category => {
                return (
                  <option key={category.id} value={category.id}>{category.name}</option>
                )
              })}
            </select>
          </div>

          <button className='bg-indigo-50 rounded-md px-6 py-2 w-32 m-auto font-bold shadow-2xl
           hover:text-indigo-50 hover:bg-sky-500'>
            Submit
          </button>

          {errorMsg ?
            <div className="bg-red-200 rounded-md px-6 py-2 text-red-500 text-center font-bold">
              <p>Error creating the product:</p>
              <p>{errorMsg}</p>
            </div>
            : ''}

          {
            successMsg ?
              <div className="bg-green-200 rounded-md px-6 py-2 text-green-500 text-center font-bold">
                <p>{successMsg}</p>
              </div>
              : ''}
        </form>
      </div >
    </Layout >
  )
}