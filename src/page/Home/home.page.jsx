import React from 'react';
import ProductTopSale from '../../components/ProductTopSale/product-top-sale.compnent';
import Banner from '../Banner/banner.page';
import JumbootronPage from '../JumbotronPage/jumbotron-page.page';
import ProductSalePage from '../ProductSalePage/product-sale.page';
import Services from '../Services/services.page';

const Home  = () => {
    return (
        <main>
            <ProductTopSale/>
            <Services/>
            <JumbootronPage/>
            <ProductSalePage/>
            <Banner/>
        </main>
    )
};

export default Home;