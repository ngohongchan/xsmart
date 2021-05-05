import React from 'react';
import Jumbotron from '../../components/Jumbotron/jumbotron.component';
import { useProductsContext } from '../../context/products.context';

function JumbootronPage() {
   const { productHot } = useProductsContext();
   const productFirst = productHot[Math.floor(Math.random() * productHot.length - 1)];
   const productSecond = productHot[Math.floor(Math.random() * productHot.length - 1)];
    return (
       <main className='jumbotron-page' 
        style={{ background: '#f7f7f7',  padding: '70px 0 40px' }}>
           <h1 
            style={{ textAlign: 'center', textTransform:'uppercase', fontWeight: '700', marginBottom: '50px' }}>
            smart watch</h1>
            <Jumbotron direction='row' img='banner_smw_1.jpg' productFirst={productFirst} productSecond={productSecond}/>
            <Jumbotron direction='row-reverse' img='banner_smw_2.jpg' productFirst={productFirst} productSecond={productSecond}/>
       </main>
    );
}


export default JumbootronPage;