import React from 'react';
import { useFilterContext } from '../../context/filter.context';
import './button.style.scss';
import './button-responsive.style.scss';

const ButtonOpenSideBar = () => {
    const { showSidebarFilter, isSideBarFilter } = useFilterContext();
    return (
        <React.Fragment>
            {
                !isSideBarFilter ? (
                    <div className='open-filter' onClick={showSidebarFilter}>
                        <i className="fa fa-align-right" aria-hidden="true"></i>
                 </div>
                ) :  null
            }
        </React.Fragment>
    );
};

export default ButtonOpenSideBar;