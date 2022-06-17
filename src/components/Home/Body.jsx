import React from 'react'
import ProductCard from './ProductCard';
import MiddleSec from './MiddleSec';
const Body = () => {

    return (

        <div className='lg:container mx-auto'>
            <MiddleSec />
            <div className='lg:px-40 mt-20 lg:space-y-4'>
                <div className='mb-10'>
                    <h1 className='text-orange-500 text-[40px] font-bold text-center '>Top Selling Laptops</h1>
                    <ProductCard />
                </div>
                <div className='mb-10'>
                    <h1 className='text-orange-500 text-[40px] font-bold text-center '>Top Selling Gaming Laptops</h1>
                    <ProductCard />
                </div>
                <div className='mb-10'>
                    <h1 className='text-orange-500 text-[40px] font-bold text-center '>Top Selling Macbooks</h1>
                    <ProductCard />
                </div>
                
            </div>


        </div>
    )
}

export default Body
