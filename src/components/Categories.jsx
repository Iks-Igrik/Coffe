import React from 'react';
import './../css/categories.module.css';

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory}) {

/*  const onSelectItem = (index) => {
  onClickItem(index);
}*/

    return (
        <>
           <div className="categories">
            <ul className="active_top">
              <li className={activeCategory === null ? 'active' : ''} onClick = {() => onClickCategory(null)}>
            Categories
              </li>
              {items && items.map((name, index) => (
              <li 
                  className={activeCategory === index ? 'active' : ''}
                  onClick={() => onClickCategory(index)}
                  key={`$(name)_$(index)`}>{name}</li>
              ))}
            </ul>
          </div>  
        </>
    );
}
);
export default Categories;