import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarOpen } from '../../features/appSlice';


const HeaderUp = () => {
    const dispatch = useDispatch();
    const [isSearch, setIsSearch] = useState(false);
    const { cart } = useSelector(state => state.cart);


    return (
        <div className='border-b-[1px] border-gray-600  '>
            <div className='bg-slate-900 p-2 text-center border border-gray-600 text-gray-300 hidden lg:block'>
                <h1>Due to currency devaluation price may change without any prior notice, Confirm price before placing order. بسم الله الرحمن الرحيم</h1>
            </div>
            <div className='bg-slate-900 p-10 flex justify-between lg:justify-evenly items-center  '>
                <div className='cursor-pointer flex items-center '>
                    <div className='lg:hidden md:inline-flex mr-2' onClick={() => dispatch(sidebarOpen())}>
                        <DehazeIcon style={{ fontSize: '30px' }} className='cursor-pointer text-white' />
                    </div>
                    <Link to='/'><img className='object-contain rounded-md h-30 w-40 ' src={'https://www.paklap.pk/pub/media/logo/stores/1/2-01_2.png'} alt='logo' /></Link>
                </div>
                <div className=''>
                    <form className='hidden lg:inline-flex'>
                        <input type="text" style={{ width: '500px' }} placeholder='Search...' className='p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 ' />
                        <button className='bg-orange-600 p-2 px-3 border border-2 border-white' type='submit'>
                            <SearchIcon style={{ color: 'white' }} />
                        </button>
                    </form>
                </div>


                <div className='flex items-center relative'>
                    <div className='lg:hidden cursor-pointer ml-3'><SearchIcon onClick={() => setIsSearch(!isSearch)} style={{ color: 'white', fontSize: '30px' }} /></div>
                    <Link to="cart">
                        <button className='flex items-center lg:bg-green-500 text-white rounded p-2 lg:px-6 hover:opacity-80' type='submit'>
                            <ShoppingCartIcon style={{ color: 'white', fontSize: '30px' }} />
                            <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full '>{cart.length}</span>
                        </button>
                    </Link>
                </div>

            </div>
            {isSearch && <div className='bg-slate-900 w-full'>
                <form className='flex '>
                    <input type="text" placeholder='Search...' className='p-2 w-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 ' />
                    <button className='bg-orange-600 p-2 px-3 border border-2 border-white' type='submit'>
                        <SearchIcon style={{ color: 'white' }} />
                    </button>
                </form>
            </div>}
        </div>
    )
}

export default HeaderUp