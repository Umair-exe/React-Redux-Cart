import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Slider';
const Plan = () => {
    const packages = [
        { id: 1, name: "20MBPS", charges: 4999 },
        { id: 2, name: "100MBPS", charges: 14999, },
        { id: 3, name: "30MBPS", charges: 7999, },
        { id: 4, name: "10MBPS", charges: 2999, },
    ]

    useEffect(() => {
        window.scrollTo(0,0)

    },[])
    return <div>
        <Slider text='Packages' />
        <div className='flex flex-col sm:flex-row md:flex-col md:space-y-4 justify-evenly p-10 transition transition-duration-500 ease-in-out px-9 space-y-4 sm:space-y-0 sm:p-20 '>
            {packages.map((p) => (
                <div key={p.id} className='flex flex-col shadow-lg shadow-black hover:shadow-lime-600 justify-center items-center bg-white px-0 sm:px-14 py-7 sm:py-9   space-y-5 sm:space-y-10  rounded-lg '>
                    <h1 className='text-3xl font-bold text-lime-600' >{p.name}</h1>
                    <p className='text-md font-bold'>{p.charges} (w/o tax)</p>
                    <p className='text-md' >One time installation cost</p>

                    <p className='text-md'>Pay for installation and enjoy</p>
                    <p className='text-md font-bold text-lime-600'>1 month of Free</p>
                    <p className='text-md font-bold'><b>Internet + TV</b></p>
                    <Link to='/contact-us'><button className='bg-lime-600 p-3 px-8 text-white  hover:border-lime-600 hover:opacity-75 cursor-pointer'>Contact Us</button></Link>
                </div>
            ))}
        </div>

        <div className='bg-gray-100 flex flex-col sm:flex-row md:flex-col md:space-y-4 justify-evenly p-10 transition transition-duration-500 ease-in-out px-9 space-y-4 sm:space-y-0 sm:p-20 '>
            {packages.map((p) => (
                <div key={p.id} className='flex flex-col shadow-lg shadow-black hover:shadow-lime-600 justify-center items-center bg-white px-0 sm:px-14 py-7 sm:py-9   space-y-5 sm:space-y-10  rounded-lg '>
                    <h1 className='text-3xl font-bold text-lime-600' >{p.name}</h1>
                    <p className='text-md font-bold'>{p.charges} (w/o tax)</p>
                    <p className='text-md' >One time installation cost</p>
                    <p className='text-md'>Pay for installation and enjoy</p>
                    <p className='text-md font-bold text-lime-600'>1 month of Free</p>
                    <p className='text-md font-bold'><b>Internet + TV</b></p>
                    <Link to='/contact-us'><button className='bg-lime-600 p-3 px-8 text-white  hover:border-lime-600 hover:opacity-75 cursor-pointer'>Contact Us</button></Link>
                </div>
            ))}
        </div>
    </div>;
};

export default Plan;
