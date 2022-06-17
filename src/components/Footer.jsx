import React from 'react'


const Footer = () => {
    return (
        <>
        
            <div className='mt-20 bg-slate-900 p-10 lg:p-0 border-b border-gray-500 flex flex-col lg:flex-row gap-4 md:flex-row justify-evenly items-center'>
                <div className='hidden lg:inline-flex'>
                    <img src="https://www.paklap.pk/pub/media/wysiwyg/footer-image_1.png" alt="person" />
                </div>
                <div>
                    <h1 className='font-bold text-white '>Connect With Us</h1>
                    <h1 className=' text-white '>Email</h1>
                    <h1 className=' text-white '>abc@gmail.com</h1>
                    <h1 className=' text-white '>Phone</h1>
                    <h1 className='font-bold text-white '>5151515155</h1>


                </div>
                <div>
                    <h1 className='font-bold text-white '>Need Help?</h1>
                    <h1 className='font-bold text-gray-500 '>Lahore</h1>
                    <h1 className='font-bold text-gray-500 '>Gb11 Techno City</h1>
                    <h1 className='font-bold text-gray-500 '>i.i Chundrigar</h1>
                </div>
           

            </div>
            <div className='bg-slate-900 p-10 hidden lg:flex justify-center md:justify-evenly lg:justify-evenly flex-col gap-4 lg:flex-row md:flex-row items-center'>
                <div>
                    <h1 className='font-bold text-white '>Get Help</h1>
                    <h1 className='font-bold text-gray-500 '>Shipping</h1>
                    <h1 className='font-bold text-gray-500 '>Warranty</h1>
                    <h1 className='font-bold text-gray-500 '>Returns and exhchanges</h1>

                </div>
                <div>
                    <h1 className='font-bold text-white '>Get Help</h1>
                    <h1 className='font-bold text-gray-500 '>Shipping</h1>
                    <h1 className='font-bold text-gray-500 '>Warranty</h1>
                    <h1 className='font-bold text-gray-500 '>Returns and exhchanges</h1>

                </div>
                <div className=''>
                    <h1 className='font-bold text-white '>Learn Mode</h1>
                    <h1 className='font-bold text-gray-500 '>About Us</h1>
                    <h1 className='font-bold text-gray-500 '>Payment Options</h1>
                    <h1 className='font-bold text-gray-500 '>How to Buy</h1>

                </div>
               
            </div>
            <div className='p-4 text-center border-white border-t-2 bg-gray-100 shadow shadow-lg text-stone-800'>
                <div className=''>
                    <img className='object-contain mx-auto' src="https://www.paklap.pk/pub/static/version1621644568/frontend/Swissup/argento-stripes/en_US/images/payments.png" alt="footerimg" />
                </div>

                <p className='mt-2'>© 2021 All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer
