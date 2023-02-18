export default function Footer() {
  return (
    <footer className="bg-indigo-50 flex justify-between">
      <p className="w-1/4 text-center">A project developed by Lucas Matías Manzón</p>
      <div className="flex justify-around w-1/4">
        <a href="https://www.linkedin.com/in/manzonlucas/" className="underline px-10 hover:text-indigo-50 hover:bg-sky-500">LinkedIn</a>
        <a href="https://github.com/manzonlucas" className="underline px-10 hover:text-indigo-50 hover:bg-sky-500">GitHub</a>
      </div>
    </footer>
  )
}