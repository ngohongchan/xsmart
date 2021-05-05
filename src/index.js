import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from './context/products.context';
import { CategoryProvider } from './context/category_context';
import { BrandProvider } from './context/brand.context';
import { FilterProvider } from './context/filter.context';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { UserProvider } from './context/user.context';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <Router>
      <UserProvider>
        <ProductProvider>
        <CategoryProvider>
          <BrandProvider>
            <FilterProvider>
              
                <React.StrictMode>
                  <App />
                </React.StrictMode>
              
            </FilterProvider>
          </BrandProvider>
        </CategoryProvider>
      </ProductProvider>
      </UserProvider>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
