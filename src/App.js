import logo from './logo.svg';
import './App.css';
import ProductContext from './ProductContext';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import AuthorApp from './AuthorApp';
import CityCookie from './CityCookie';
import DetailCookie from './DetailCookie';
import { useReducer } from 'react';
import CityApp from './City';
import ProductReducer from './ProductReducer';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import TodoApp from './TodoApp';
import Dishes from './Dishes';
import Category from './Category';
function App() {
  const myProduct = [];
  const [state, dispatch] = useReducer(ProductReducer, myProduct);
  const value = { state, dispatch };
  return (
    <div className='App'>
      {/* <nav
        className='navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light'
        id='ftco-navbar'
      >
        <div className='container'>
          <a className='navbar-brand' href='/content'>
            Rent<span>Car</span>
          </a>
          <div>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item '>
                <a href='/city' className='nav-link'>
                  CityCookie
                </a>
              </li>
              <li className='nav-item '>
                <a href='/detail' className='nav-link'>
                  DetailCookie
                </a>
              </li>
              <li className='nav-item '>
                <a href='/category' className='nav-link'>
                  Category
                </a>
              </li>
              <li className='nav-item '>
                <a href='/dishes' className='nav-link'>
                  Dishes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <CityCookie />
      <DetailCookie />
      <Dishes />
      <Category />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/city' element={<CityCookie />} />
          <Route path='/detail' element={<DetailCookie />} />
          <Route path='/category' element={<Category />} />
          <Route path='/dishes' element={<Dishes />} />
        </Routes>
      </BrowserRouter>  */}
      {/* <ProductContext.Provider value={value}>
                <ProductForm />
                <ProductList />
            </ProductContext.Provider> */}
      {/* <CityApp></CityApp> */}
      {/* <AuthorApp></AuthorApp>
      <TodoApp></TodoApp> */}
    </div>
  );
}

export default App;
