import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { baseUrl } from '../../services/api';

export default function SortBy() {

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
    <section>

      <form action="" className="flex gap-4 justify-evenly">
        <article className="flex flex-col w-1/5">
          <label htmlFor="sortBy">Sort by</label>
          <select name="sortBy" id="sortBy" className="bg-indigo-50 rounded-md px-2 py-2 shadow-lg" onChange={handleChangeForm}>
            <option value="stock">Stock</option>
            <option value="price">Price</option>
          </select>
        </article>

        <div className="flex flex-col w-1/5">
          <label htmlFor="from">From</label>
          <input type="date" id="from" className="bg-indigo-50 rounded-md px-2 py-2 shadow-lg" onChange={handleChangeForm} />
        </div>

        <div className="flex flex-col w-1/5">
          <label htmlFor="to">To</label>
          <input type="date" id="to" className="bg-indigo-50 rounded-md px-2 py-2 shadow-lg" onChange={handleChangeForm} />
        </div>

        <article className="flex flex-col w-1/5">
          <label htmlFor="category">In the category</label>
          <select name="category" id="category" className="bg-indigo-50 rounded-md px-2 py-2 shadow-lg" onChange={handleChangeForm}>
            {categories.map(category => {
              return (
                <option key={category.id} value={category.id}>{category.name}</option>
              )
            })}
          </select>
        </article>

        <button className='bg-indigo-50 rounded-md px-6 py-2 w-1/5 m-auto mb-1 font-bold shadow-2xl
           hover:text-indigo-50 hover:bg-sky-500'>
          Submit
        </button>

      </form>

      <article>
        <p>GRAFICO</p>
        {
          errorMsg ?
            <div className="bg-red-200 rounded-md px-6 py-2 text-red-500 text-center font-bold">
              <p>Error creating the product:</p>
              <p>{errorMsg}</p>
            </div>
            : ''
        }
      </article>
    </section>
  )
}