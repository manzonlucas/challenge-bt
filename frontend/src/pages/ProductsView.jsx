import Layout from "../components/Layout";
import axios from 'axios';
import { useEffect, useState } from "react";
import { baseUrl } from '../services/api';
import ListAll from "../components/products/ListAll";
import SortBy from "../components/products/SortBy"

export default function ProductsView() {

  const [viewAllProducts, setViewAllProducts] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [])

  async function getProducts() {
    try {
      const response = await axios.get(`${baseUrl}/products`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSetViewAll() {
    setViewAllProducts(true)
  }

  function handleSetViewSort() {
    setViewAllProducts(false)
  }

  return (
    <Layout>

      <nav className=" flex justify-around m-auto w-2/5 text-lg p-4">
        <button onClick={handleSetViewAll} className={`bg-indigo-50 rounded-md px-10 py-2 ${viewAllProducts ? 'active' : ''}`}>View all</button>
        <button onClick={handleSetViewSort} className={`bg-indigo-50 rounded-md px-10 py-2 ${!viewAllProducts ? 'active' : ''}`}>Sort by</button>
      </nav>

      {viewAllProducts ?
        <ListAll products={products} />
        :
        <SortBy />}
    </Layout >
  )
}