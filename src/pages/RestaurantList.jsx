import React from 'react'
import categoryImg02 from "../assets/images/category-02.png";
import './restaurant.css';

function RestaurantList() {
  return (
    <div className='Restaurant_list'>
        <img src={categoryImg02} alt="" />
        <span>Sample Restaurant</span>

        <span>4.7KM | 20MINS</span>
    </div>
  )
}

export default RestaurantList