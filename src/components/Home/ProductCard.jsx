import React from 'react'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useState } from 'react';
import { packages } from '../../data';
import { useDispatch} from 'react-redux';
import { addToCart} from '../../features/cartRedux';
import toast from 'react-hot-toast';



const ProductCard = () => {
    const dispatch = useDispatch();
    const [items,setItems] = useState(packages);
  
    const HandleIncrement = (id) => {
       setItems((items) => items.map( item => item.id === id ? {...item, quantity: item.quantity +1 }: item ))
    
    }
    const HandleDecrement = (id) => {
        setItems((items) => items.map(item => item.id===id? {...item, quantity: item.quantity > 1 ? item.quantity- 1: item.quantity}: item))
    }

    const handleCart = (product ) => {
        dispatch(addToCart(product));
        toast.success('Items added to cart');

    }


    return (
        <div className='flex flex-col lg:flex-row flex-shrink-0  md:flex-row lg:justify-evenly  shadow shadow-md  lg:space-y-0'>
            {items?.map((p) => (
                <div key={p.id} className='flex flex-col p-4 items-center flex-1  hover:shadow-xl cursor-pointer'>
                    <img className='object-contain h-auto w-auto' src={p.img} alt='product' />
                    <p className='text-md font-bold uppercase'><b>{p.name}</b></p>
                    <p className='text-md font-bold text-orange-500 '><b>${p.price}</b></p>
                    <div className='flex items-center mt-3 mb-2'>
                        <span onClick={() => HandleDecrement(p.id)} className='p-2 px-4 cursor-pointer bg-gray-200 mr-2 shadow '>-</span> {p.quantity} <span onClick={() => HandleIncrement(p.id)} className='ml-2 p-2 px-4 cursor-pointer bg-gray-200 mr-2 shadow '>+</span>
                    </div>

                    <button className='bg-lime-600 rounded p-3 px-8 mt-2 text-white space-x-4   hover:border-lime-600 hover:opacity-75 cursor-pointer' onClick={() => handleCart(p)}><ShoppingCartIcon />Add to Cart</button>
                </div>
            ))}
        </div>
    )
}

export default ProductCard