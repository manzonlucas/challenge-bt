import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="text-center flex flex-col items-center gap-10 bg-indigo-50 bg-opacity-50 w-4/6 m-auto p-4 rounded-md mb-4 mt-4">
        <div>
          <h1 className="text-6xl mb-4">BT Challenge</h1>
          <p>Objective-guided project developed by <b>Lucas Matías Manzón</b>, for applying for a position as a Front End Developer in a freelance project.</p>
        </div>
        <div>

          <h3 className="text-2xl underline">Main info:</h3>
          <ul>
            <li>Frontend developed in React with <a href="https://create-react-app.dev/" className="underline">Create React App</a></li>
            <li>Backend developed in NodeJs with <a href="https://nestjs.com/" className="underline">NestJS</a></li>
            <li>Data persistance in <a href="https://www.mysql.com/" className="underline">MySQL database</a>, using <a href="https://typeorm.io/" className="underline">TypeORM</a> as an object-relational mapping tool</li>
            <li>Styled with <a href="https://tailwindcss.com" className="underline">TailwindCSS</a> 3.2.6 classes</li>
          </ul>

          <br />

          <h3 className="text-2xl underline">Features:</h3>
          <ul>
            <li>List products hosted on the database</li>
            <li>Create products and persist them on the database</li>
            <li>Filter products by stock or price and creation date within certain category</li>
            <li>Success or error messages when requesting data from the backend</li>
            <li>Loading spinner on products page</li>
          </ul>

          <br />

          <h3 className="text-2xl underline">Other packages and utilities:</h3>
          <ul>
            <li><a href="https://reactrouter.com/" className="underline">React Router Dom 6.8.1</a></li>
            <li><a href="https://axios-http.com/" className="underline">Axios 1.3.3</a></li>
            <li><a href="https://www.react-google-charts.com/" className="underline">React Google Charts</a></li>
            <li><a href="class-validator" className="underline">NestJs class validator</a></li>
          </ul>

          <br />

          <p className="text-sm">*date format used on products page is Argentina actual one (dd/mm/yyyy)*</p>
        </div>
      </section>
    </Layout >
  )
}