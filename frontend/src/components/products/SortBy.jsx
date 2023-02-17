import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from '../../services/api';
import { Chart } from "react-google-charts";

export default function SortBy() {

  const [payload, setPayload] = useState({ sortBy: 'stock', category: 1, startDate: new Date(), endDate: new Date() });
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState(null);
  const [chartData, setChartData] = useState([]);

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  useEffect(() => {
    getCategories();
  }, [])

  async function getCategories() {
    try {
      const response = await axios.get(`${baseUrl}/categories`);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Query format:
  // http://localhost:3001/products/sort?startDate=2015-03-08&endDate=2030-03-08&category=1&sortBy=stock
  async function getProductsSortedBy() {
    try {
      const response = await axios.get(`${baseUrl}/products/sort?startDate=${payload.startDate}&endDate=${payload.endDate}&category=${payload.category}&sortBy=${payload.sortBy}`);
      setProducts(response.data);
      console.log(response.data);
      setPayload({ sortBy: 'stock', category: 1, startDate: '', endDate: '' });
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeForm(e) {
    setPayload({ ...payload, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    getProductsSortedBy(payload);

    let chartArray = [['Product', payload.sortBy]]
    products.map(product => {
      return chartArray.push([product.name, product.stock]);
    })
    console.log(chartArray);
    setChartData(chartArray);
  }

  const options = {
    is3D: true,
    backgroundColor: { fill: 'transparent' }
  };


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

        {products ?
          <Chart
            chartType="PieChart"
            data={chartData}
            options={options}
            width={"100%"}
            height={"400px"}
          />
          : 'no products'
        }
      </article>
    </section>
  )
}