import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Item from './Item'
import TotalPrice from './TotalPrice'

const Cart = () => {
  const { cart } = useSelector(state => state.cart);


  return (
    <div className='container mx-auto mt-20 mb-60'>
      {cart.length  ?
        <>
          <h1 className='text-2xl lg:text-5xl font-bold lg:px-28 lg:text-left text-center '>Shopping Cart</h1>
          <div className='flex flex-col lg:gap-6 justify-center md:flex-col lg:flex-row lg:px-28'>

            <Item />
            <TotalPrice />


          </div>
        </> : <div className=''>
          <h1 className='text-2xl lg:px-28 lg:text-left text-center '>No Items in the cart  <Link className='text-blue-400 text-xl border-b border-blue-400' to={'/'}> click to add</Link></h1>
        </div>}
    </div>
  )
}

export default Cart