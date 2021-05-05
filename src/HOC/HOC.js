import React from 'react';
import Footer from '../page/Footer/footer.page';
import HeaderHomePage from '../page/Header/header-home.page';

const HOC = (Component) => {
    return (props) => {
        return (
            <React.Fragment>
                <HeaderHomePage filter='invert(1)' color='black' logo='logo2.png' colorItem='#ef562c' colorText='white'/>
                <Component {...props}/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default HOC; 