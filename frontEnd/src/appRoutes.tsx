
import { Route, Routes } from 'react-router-dom';
import ProductSearch from './components/productSearch';
import ProductManager from './components/products';

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/productsManager" element={
        <ProductManager></ProductManager>
      }>
      </Route>

      <Route path="/productsSearch" element={
        <ProductSearch></ProductSearch>
      }>
      </Route>
      
    </Routes>
  );
}

export default AppRoutes;