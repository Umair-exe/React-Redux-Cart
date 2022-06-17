import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const TotalPrice = () => {
    const { cart } = useSelector(state => state.cart);
    const [total, setTotal] = useState(0);

    useEffect(() => {

        const calTotal = () => {
            return setTotal(cart.reduce((sum, acc) => sum + acc.price * acc.quantity, 0));
        }
        calTotal();

    }, [cart])




    return (

        <div className='w-full lg:mt-4 lg:w-[30vw] h-auto lg:h-[20vw] space-y-10 p-6  shadow shadow-md'>
            <div className='space-y-4'>
                <h1 className='font-bold text-lg'>Total</h1>
                <div className='flex justify-between text-lg italic'>
                    <h1>Subtotal</h1>
                    <h1>Rs.{total}</h1>
                </div>
                <div className='flex justify-between text-lg italic'>
                    <h1>Shipping Price</h1>
                    <h1>Rs.300</h1>
                </div>
            </div>
            <hr className='border mt-3 rounded' />
            <div className='flex justify-between text-lg '>
                <h1 className='font-bold'>Order Total</h1>
                <h1>${total + 300}</h1>
            </div>
            <button className='bg-green-500 font-bold text-white rounded p-3 w-full hover:opacity-80'>Proceed to Checkout</button>

        </div>
    )
}

export default TotalPrice