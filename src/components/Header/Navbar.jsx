import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HeaderUp from './HeaderUp';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarOpen } from '../../features/appSlice';
import './Navbar.css'

const Navbar = () => {
    const dispatch = useDispatch();
    const { isSidebar } = useSelector(state => state.app);
    const [isCat, setIsCat] = useState(false);
    const [isSubCat, setIsSubCat] = useState(false);
    return (
        <>
            <HeaderUp />

            <div className='lg:sticky lg:top-0 lg:z-40 lg:flex p-2 text-xl  md:justify-between lg:justify-evenly bg-slate-900 text-white hidden '>
                <div className='flex space-x-8 '>
                    <Link to='/'>
                        <div className="relative  group hover:transition hover:duration-300 lg:p-2 lg:px-4 rounded cursor-pointer bg-orange-600 text-stone-900  ">
                            <div>
                                <ArrowDropDownIcon /> Categories
                            </div>
                            <div className="p-3  bg-white shadow shadow-md rounded absolute w-[20vw] invisible group-hover:visible">
                                <div className="relative group2">
                                    <div className='hover:bg-gray-100'>
                                        Laptops
                                    </div>
                                    <div className="p-4 space-y-3 absolute w-[40vw] top-0 left-20 invisible shadow shadow-md rounded absolute bg-white group2-hover:visible ">
                                        <h1 className='font-bold hover:bg-gray-100'>Asus </h1>
                                        <h1 className='hover:bg-gray-100'>Rog </h1>
                                        <h1 className='font-bold hover:bg-gray-100'>Acer </h1>
                                        <h1 className='hover:bg-gray-100'>Predator </h1>
                                        <h1 className='hover:bg-gray-100'>Nitro </h1>
                                        <h1 className='font-bold hover:bg-gray-100'>Dell </h1>
                                        <h1 className='hover:bg-gray-100'>Inspiron </h1>
                                        <h1 className='hover:bg-gray-100'>Latitude </h1>
                                        <h1 className='hover:bg-gray-100'>Alienware </h1>
                                        <h1 className='font-bold hover:bg-gray-100'>HP</h1>
                                        <h1 className='hover:bg-gray-100'>Pavillion Series</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/'><h1 className='hover:transition hover:duration-300 lg:p-2 lg:px-4 hover:rounded cursor-pointer hover:bg-white  hover:text-black  '>Best Sellers</h1></Link>
                    <Link to='/about'><h1 className='hover:transition hover:duration-300  lg:p-2 lg:px-4 hover:rounded  cursor-pointer hover:bg-white hover:text-black   ' >Deals Today</h1></Link>
                    <Link to='/'><h1 className='hover:transition hover:duration-300  lg:p-2 lg:px-4 hover:rounded  cursor-pointer hover:bg-white hover:text-black   '>Blog</h1></Link>
                    {/*  <h1 className='hover:transition hover:duration-300  cursor-pointer hover:bg-white hover:text-black   '>PRODUCTS</h1> */}
                    <Link to='/contact-us'><h1 className='hover:transition hover:duration-300 lg:p-2 lg:px-4 hover:rounded  cursor-pointer hover:bg-white hover:text-black   '>Contact Us</h1></Link>

                </div>

            </div>



            {isSidebar && (<div className="z-10  fixed -top-0 -left-2  p-3 w-[70vw] h-screen shadow shadow-lg md:hidden list-none bg-white text-stone-800  ">
                <h1 className="text-right text-xl w-full my-2"><CloseIcon className='cursor-pointer' onClick={() => dispatch(sidebarOpen())} /></h1>
                <div className='mt-6'>
                    <h1 onClick={() => setIsCat(!isCat)} className='hover:transition hover:duration-300 p-4 rounded cursor-pointer bg-orange-600  '><ArrowDropDownIcon /> Categories</h1>
                    {isCat && <div className='ml-4 hover:transition hover:duration-300 p-4 hover:rounded cursor-pointer hover:bg-white  hover:text-black  '>
                        <h1 onClick={() => setIsSubCat(!isSubCat)}><ArrowDropDownIcon />  Laptops </h1>

                        {isSubCat && <div className='ml-8 space-y-3 hover:transition hover:duration-300 p-4 hover:rounded cursor-pointer hover:bg-white  hover:text-black '>
                            <h1 className='font-bold '>Asus </h1>
                            <h1 className=''>Rog </h1>
                            <h1 className='font-bold'>Acer </h1>
                            <h1 className=''>Predator </h1>
                            <h1 className=''>Nitro </h1>
                            <h1 className='font-bold'>Dell </h1>
                            <h1 className=''>Inspiron </h1>
                            <h1 className=''>Latitude </h1>
                            <h1 className=''>Alienware </h1>
                            <h1 className='font-bold'>HP</h1>
                            <h1 className=''>Pavillion Series</h1>

                        </div>}
                    </div>}
                    <Link to='/'><h1 className='hover:transition hover:duration-300 p-4 hover:rounded cursor-pointer hover:bg-white  hover:text-black  '>Best Sellers</h1></Link>
                    <Link to='/about'><h1 className='hover:transition hover:duration-300  p-4 hover:rounded  cursor-pointer hover:bg-white hover:text-black   ' >Deals Today</h1></Link>
                    <Link to='/plans'><h1 className='hover:transition hover:duration-300  p-4 hover:rounded  cursor-pointer hover:bg-white hover:text-black   '>Blog</h1></Link>
                    {/*  <h1 className='hover:transition hover:duration-300  cursor-pointer hover:bg-white hover:text-black   '>PRODUCTS</h1> */}
                    <Link to='/contact-us'><h1 className='hover:transition hover:duration-300 p-4 hover:rounded  cursor-pointer hover:bg-white hover:text-black   '>Contact Us</h1></Link>
                </div>
            </div>
            )

            }


        </>
    )
}

export default Navbar
