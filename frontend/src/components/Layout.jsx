
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='bg-gradient-to-r from-sky-900 via-cyan-600 to-indigo-400 grow'>
        {children}
      </main>
      <Footer />
    </>
  )
}
