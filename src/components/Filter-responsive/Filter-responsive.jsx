import React from 'react';
import { useBrandContext } from '../../context/brand.context';
import { useCategoryContext } from '../../context/category_context';
import { useFilterContext } from '../../context/filter.context';
import './Filter-responsive.style.scss';
import './Filter-responsive-show.style.scss';

const FilterResponsive = () => {
    const { 
        filters: {
            brandFilter,
            price,
            categoryFilter,
        },
        updateFilter,
        ScrollFilter,
        isSideBarFilter,
        closeSidbarFilter } = useFilterContext();

        const { brand } = useBrandContext();

        const { category } = useCategoryContext();


        if(!brand){
            return null;
        }

    return (
        <React.Fragment>
            {
                isSideBarFilter ? (
                    <div className={`${isSideBarFilter ? 'filter-res filter-res-default' : 'filter-res' }`}>
                    <div className='close-siderbarfilter' onClick={closeSidbarFilter}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <h2 className='filter-res__title'>Bộ lọc</h2>
                    <div className='filter-res__form'>
                        <h2 className='filter-res__form--title'>Thương hiệu</h2>
                        <div className="checkbox-group">
                            <input onChange={updateFilter} type="radio" value="all" name="brandFilter" checked={brandFilter === 'all'} className="checkbox-group__checkboxAll" />
                            <span>Tất cả</span>
                        </div>
        
                        {
                            brand.map(bra => {
                                return (
                                    <div className="checkbox-group" key={bra.id}>
                                        <input onClick={ScrollFilter} onChange={updateFilter} type="radio" value={bra.id} name="brandFilter" checked={parseInt(brandFilter) === parseInt(bra.id)} className="checkbox-group__checkboxAll" />
                                        <span>{bra.brand_name}</span>
                                    </div>
                                )
                            })
                        }
        
                    </div>
        
                    <div className='filter-res__form'>
                        <h2 className='filter-res__form--title'>Thể Loại</h2>
                        <div className="checkbox-group">
                            <input onChange={updateFilter} type="radio" value="all" name="categoryFilter" checked={categoryFilter === 'all'} className="checkbox-group__checkboxAll" />
                            <span>Tất cả</span>
                        </div>
        
                        {
                            category.map(cat => {
                                return (
                                    <div className="checkbox-group" key={cat.id}>
                                    <input onChange={updateFilter} type="radio" value={cat.id} name="categoryFilter" checked={parseInt(categoryFilter) === parseInt(cat.id)} className="checkbox-group__checkboxAll" />
                                    <span>{cat.category_name}</span>
                                </div>
                                )
                            })
                        }
        
                    </div>
        
        
                    <div className='filter-res__form'>
                        <h2 className='filter-res__form--title'>Mức giá</h2>
        
                        <div className="checkbox-group">
                            <input type="radio" value="all" name="price" onChange={updateFilter} checked={price === "all"} className="checkbox-group__checkboxAll" />
                            <span>Tất cả</span>
                        </div>
                        <div className="checkbox-group">
                            <input type="radio" value="3000000" name="price" onChange={updateFilter} checked={parseInt(price) === 3000000} className="checkbox-group__checkboxAll" />
                            <span>Dưới 3 triệu</span>
                        </div>
                        <div className="checkbox-group">
                            <input type="radio" value="3500000" name="price" onChange={updateFilter} checked={parseInt(price) === 3500000} className="checkbox-group__checkboxAll" />
                            <span>Từ 5 - 6 triệu</span>
                        </div>
                        <div className="checkbox-group">
                            <input type="radio" value="6000000" name="price" onChange={updateFilter} checked={parseInt(price) === 6000000} className="checkbox-group__checkboxAll" />
                            <span>Trên 6 triệu</span>
                        </div>
        
                    </div>
        
                </div>
                ) : null
            }
        </React.Fragment>
    );
};

export default FilterResponsive;