import React from 'react';
import { Route, Switch } from 'react-router';
import './App.scss';
import BackgroundHome from './page/BackHome/background-home';
import Footer from './page/Footer/footer.page';
import Home from './page/Home/home.page';
import ProductSingleComponent from './page/SingleProductPage/single-product-page.page';
import HeaderHomePage from './page/Header/header-home.page';
import ProductsPage from './components/Products/products.components';
import CategoryProductPage from './components/CategoryProducts/categoryProducts.component';
import Modal from './components/Modal/modal.component';
import CartPage from './components/Cart/cart.component';
import ModalCart from './components/ModalCart/modal-cart.cmponent';
import Register from './components/register/register.component';
import LoginPage from './components/Login/login.component';

function App() {

  return (
    <>
    <Modal/>
    <ModalCart/>
        <Switch>  
   
              <Route exact path='/'> 
                <HeaderHomePage filter='none' color='white' logo='logo.png' colorItem='white' colorText='#ef562c'/>
                <BackgroundHome/>
                <Home/>
                <Footer/>
            </Route>

            <Route exact path='/product/:id' children={ProductSingleComponent}/>
            <Route exact path='/category-products/:id' children={CategoryProductPage}/>
            <Route exact path='/products'>
              <ProductsPage/>
            </Route>
            <Route path='/cart'>
              <CartPage/>
            </Route>
            <Route path='/register'>
              <Register/>
            </Route>
            <Route path='/login'>
              <LoginPage/>
            </Route>
        </Switch>
      {/* <Footer/> */}
    </>
  );
}



export default App;
