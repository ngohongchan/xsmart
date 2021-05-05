import React from 'react';
import { useBrandContext } from '../../context/brand.context';
import { useCategoryContext } from '../../context/category_context';
import { useFilterContext } from '../../context/filter.context';
import './filter.style.scss';
import './filter-responsive.style.scss';

const Filter = () => {
    const { 
        filters: {
            brandFilter,
            price,
            categoryFilter,
        },
        updateFilter,
        ScrollFilter } = useFilterContext();

        const { brand } = useBrandContext();

        const { category } = useCategoryContext();


        if(!brand){
            return null;
        }

    return (
        <div className='filter'>
            <h2 className='filter__title'>Bộ lọc</h2>
            <div className='filter__form'>
                <h2 className='filter__form--title'>Thương hiệu</h2>
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

            <div className='filter__form'>
                <h2 className='filter__form--title'>Thể Loại</h2>
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


            <div className='filter__form'>
                <h2 className='filter__form--title'>Mức giá</h2>

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
    );
};

export default Filter;