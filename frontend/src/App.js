import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateProduct from './pages/CreateProduct';
import Home from './pages/Home';
import ViewProducts from './pages/ViewProducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<CreateProduct />}></Route>
        <Route path='/products' element={<ViewProducts />}></Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
