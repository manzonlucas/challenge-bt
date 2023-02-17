import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ProductsView from './pages/ProductsView';
import CreateProduct from './pages/CreateProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<ProductsView />}></Route>
        <Route path='/create' element={<CreateProduct />}></Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
