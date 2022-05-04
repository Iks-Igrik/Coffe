import React from 'react';
import CoffeeBlock from './components/CoffeBlock/CoffeBlock';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoffe } from './redux/actions/Coffee';
import LoadingBlock from './components/LoadingBlock';
import Sort from './components/Sort';
import { setCategory, setSortBy } from './redux/actions/filters';
import Categories from './components/Categories';



const sortItems = 
[
  { name: 'popularity', type: 'popular', order: 'desc', icon: 'ThumbsUp' },
  { name: 'price', type: 'price', order: 'desc', icon: 'Tag' }, 
  { name: 'alphabet', type: 'name', order: 'asc', icon: 'TextAa' }
  ]

const categoryNames = ['Arabica','Robusta','Arabica/Robusta','Maragozhin'];

  function Home () {
  const dispatch = useDispatch();
  const items = useSelector(({coffee}) => coffee.items); console.log(items);
  const cartItems = useSelector(({cart}) => cart.items);
  const isLoaded = useSelector(({coffee}) => coffee.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
 
  React.useEffect(() => {
    dispatch(fetchCoffe(sortBy, category));
     }, [category, sortBy]); 

   const onSelectCategory = React.useCallback((index) => {
   dispatch(setCategory(index));
   }, []);
   
   const onClickSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
    }, []);

    const handleAddCoffeToCart = (obj)=> {
     dispatch({
       type: 'ADD_COFFE_CART',
       payload: obj,
     });
    }

    return (
      <div className="content">
      <Categories
       activeCategory = {category}
       onClickCategory = {onSelectCategory}
       items={categoryNames} />
      
       <Sort activeSortType={sortBy.type} items={sortItems} onClickSortType={onClickSortType} /> 
        
        <div className="container">
        {/* <h2 className="content__title">All types of coffee</h2> */}
        <div className="content__items">
        
         {isLoaded ? items.map((obj) => (
            <CoffeeBlock 
            onClickAddCoffe={handleAddCoffeToCart}
            key={obj.id}
            addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} 
            {...obj}/>))
            : Array(10).fill(0).map((_, index) => <LoadingBlock key={index} />)} 
                      </div>
                 </div>     
  </div>
    )
}
              
export default Home;
