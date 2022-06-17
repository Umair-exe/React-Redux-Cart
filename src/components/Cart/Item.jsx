import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import {decrementCart, deleteFromCart, incrementCart } from '../../features/cartRedux';
import toast from 'react-hot-toast';



const Item = () => {
    const { cart } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const HandleIncrement = (p) => {
   
        dispatch(incrementCart(p))

    }
    const HandleDecrement = (p) => {
        dispatch(decrementCart(p))
        if (p.quantity === 1) {
            dispatch(deleteFromCart(p.id));
            toast(() => (
                <div className='text-sm'>
                    <h1>Items have been removed from the cart</h1>
                </div>
            ));
        }
    }


    const handleDelete = (id) => {
        dispatch(deleteFromCart(id));
        toast(() => (
            <div className='text-sm'>
                <h1>Items have been removed from the cart</h1>
            </div>
        ));
    }


    return (


        <div className='shadow shadow-md p-6 mt-4 mb-40'>

            {cart?.map((p) => (
                <div className='flex-1' key={p.id}>
                    <div className='flex lg:flex-row flex-col items-center gap-3 h-auto lg:h-[14.5vw] '>
                        <img className='object-contain h-60 w-60' src={p.img} alt='productimg' />
                        <h1 className='text-xl '>{p.name}</h1>
                        <h1 className='text-2xl text-gray-700'>${p.price}</h1>
                    </div>
                    <div className='flex items-center  justify-between'>
                        <div className='flex items-center'>
                            <span onClick={() => HandleDecrement(p)} className='p-2 px-4 cursor-pointer bg-gray-200 mr-2 shadow '>-</span>{p.quantity} <span onClick={() => HandleIncrement(p)} className='ml-2 p-2 px-4 cursor-pointer bg-gray-200 mr-2 shadow '>+</span>
                        </div>
                        <div onClick={() => handleDelete(p.id)}>
                            <h1 className=" text-xl w-full my-2"><CloseIcon className='cursor-pointer' /></h1>
                        </div>
                    </div>

                    <hr className='border mt-3 rounded' />
                </div>
            ))}



        </div>

    )
}

export default Item