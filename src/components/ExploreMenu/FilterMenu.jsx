import React from 'react'
import { menu_list } from '../../assets/assets'

const FilterMenu = () => {
  return (
    <div id='explore-menu' className='flex flex-col gap-20 p-20'>
          <h1>explore menu</h1>
          <div  className='flex items-center justify-between text-center gap-1'>
               {
                    menu_list.map((item, index) => {
                         return (
                              <div  className='w-25 h-25 cursor-pointer rounded-full '>
                                   <img src={item.menu_image} alt="" />
                                   <p>{item.menu_name}</p>
                              </div>
                         )
                    })
               }
          </div>
    </div>
  )
}

export default FilterMenu