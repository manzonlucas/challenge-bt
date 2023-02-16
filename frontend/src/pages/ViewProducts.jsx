import Layout from "../components/Layout";
import axios from 'axios';
import { useEffect, useState } from "react";
import { baseUrl } from '../services/api';
import { formatDate } from "../components/utils/formatDate";

export default function ViewProducts() {

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

  return (
    <Layout>
      <h2 className="text-6xl text-center">Query products</h2>

      <section className="flex flex-col gap-2 w-4/6 m-auto">
        <article className='bg-white p-2 rounded-md flex'>
          <span className="w-2/6 border-r-2 border-r-gray-200">Name</span>
          <span className="w-1/6 border-r-2 border-r-gray-200 text-center">Price</span>
          <span className="w-1/6 border-r-2 border-r-gray-200 text-center">Stock</span>
          <span className="w-1/6 border-r-2 border-r-gray-200 text-center">Creation date</span>
          <span className="w-1/6 text-center">Category</span>
        </article>

        {products.map(product => {
          return (
            <article key={product.id} className='bg-white p-2 rounded-md flex'>
              <span className="w-2/6 border-r-2 border-r-gray-200">{product.name}</span>
              <span className="w-1/6 border-r-2 border-r-gray-200 text-center">{product.price}</span>
              <span className="w-1/6 border-r-2 border-r-gray-200 text-center">{product.stock}</span>
              <span className="w-1/6 border-r-2 border-r-gray-200 text-center">{formatDate(product.creationDate)}</span>
              <span className="w-1/6 text-center">{product.category.name}</span>
            </article>
          )
        })}
      </section>
    </Layout >
  )
}