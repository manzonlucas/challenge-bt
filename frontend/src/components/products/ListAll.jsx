
import { formatDate } from "../../utils/formatDate";

export default function ListAll({ products }) {
  return (
    <section className="flex flex-col gap-2 w-full m-auto">
      <article className='bg-indigo-50 p-2 rounded-md flex font-bold'>
        <span className="w-2/6 border-r-2 border-r-gray-200">Name</span>
        <span className="w-1/6 border-r-2 border-r-gray-200 text-center">Price</span>
        <span className="w-1/6 border-r-2 border-r-gray-200 text-center">Stock</span>
        <span className="w-1/6 border-r-2 border-r-gray-200 text-center">Creation date</span>
        <span className="w-1/6 text-center">Category</span>
      </article>

      {products.map(product => {
        return (
          <article key={product.id} className='bg-indigo-50 p-2 rounded-md flex'>
            <span className="w-2/6 border-r-2 border-r-gray-200">{product.name}</span>
            <span className="w-1/6 border-r-2 border-r-gray-200 text-center">{product.price}</span>
            <span className="w-1/6 border-r-2 border-r-gray-200 text-center">{product.stock}</span>
            <span className="w-1/6 border-r-2 border-r-gray-200 text-center">{formatDate(product.creationDate)}</span>
            <span className="w-1/6 text-center">{product.category.name}</span>
          </article>
        )
      })}
    </section>
  )
}