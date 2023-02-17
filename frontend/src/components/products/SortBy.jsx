import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from '../../services/api';

export default function SortBy() {

  const [payload, setPayload] = useState({ sortBy: 'stock', category: 1, startDate: '', endDate: '' });
  const [categories, setCategories] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

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

  // Query format:
  // http://localhost:3001/products/sort?startDate=2015-03-08&endDate=2030-03-08&category=1&sortBy=stock
  async function getProductsSortedBy() {
    try {
      const response = await axios.get(`${baseUrl}/products/sort?startDate=${payload.startDate}&endDate=${payload.endDate}&category=${payload.category}&sortBy=${payload.sortBy}`);
      console.log(response.data);
      setPayload({ sortBy: 'stock', category: 1, startDate: '', endDate: '' });
      cleanForm();
      setErrorMsg(null);
    } catch (error) {
      console.log(error);
      setErrorMsg(error.response.data.message);
    }
  }

  function handleChangeForm(e) {
    setPayload({ ...payload, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    getProductsSortedBy(payload);
  }

  function cleanForm() {
    document.getElementById('sortBy').value = 'stock';
    document.getElementById('category').value = 1;
    document.getElementById('startDate').value = '';
    document.getElementById('endDate').value = '';
  }

  return (
    <section>

      <form action="" className="flex gap-4 justify-evenly" onSubmit={handleSubmit}>
        <article className="flex flex-col w-1/5">
          <label htmlFor="sortBy">Sort by</label>
          <select name="sortBy" id="sortBy" className="bg-indigo-50 rounded-md px-2 py-2 shadow-lg" onChange={handleChangeForm}>
            <option value="stock">Stock</option>
            <option value="price">Price</option>
          </select>
        </article>

        <div className="flex flex-col w-1/5">
          <label htmlFor="from">From</label>
          <input type="date" id="startDate" className="bg-indigo-50 rounded-md px-2 py-2 shadow-lg" onChange={handleChangeForm} />
        </div>

        <div className="flex flex-col w-1/5">
          <label htmlFor="to">To</label>
          <input type="date" id="endDate" className="bg-indigo-50 rounded-md px-2 py-2 shadow-lg" onChange={handleChangeForm} />
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
