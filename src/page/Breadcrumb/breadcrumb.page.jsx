import React from 'react';
import { Link } from 'react-router-dom';
import './breadcrumb.style.scss';

const Breadcrumb = ({ breadcrumb }) => {
    return (
      <nav className="breadcrumbs">
        <div className='container'>
            <ul className="breadcrumb">
                <li className="breadcrumb-item" aria-current="page"><Link to='/'>Trang chủ</Link></li>
                <span>/</span> 
                <li className='breadcrumb-item'><Link className=' active' to='#'> { breadcrumb }</Link></li>
            </ul>
        </div>
      </nav>
    )
}

export default Breadcrumb;