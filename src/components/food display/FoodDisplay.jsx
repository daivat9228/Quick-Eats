import React, { useContext } from 'react';
import FoodItem from '../food item/FoodItem';
import  { storeContext } from '../../context/StoreContext';

const FoodDisplay = ({category}) => {

     const { food_list } = useContext(storeContext);

  return (
    <div>
     <div id="food_display" className='my-1 pt-10 pb-20 mx-20'>
          <h2 className='font-semibold text-3xl'>Top dishes near you</h2>
          <div id='food-display-list' className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5 mt-5'>
               {food_list.map((item,index) => {
                    if(category === "all" || category === item.category){
                   return <FoodItem key={index} item={item} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}  />
                    }
               })}
          </div>
     </div>
    </div>
  )
}

export default FoodDisplay