import React, { useEffect } from 'react';
import Slider from '../Slider';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    return (
        <div>
            <Slider text='About' />

            <div className='bg-gray-100 flex flex-col space-y-3 lg:space-x-10 lg:flex-row md:flex-col justify-center text-center lg:text-left px-0 py-20 sm:px-96 sm:py-20 md:py-20 md:px-20 items-center'>
                <div className='h-56 w-56 lg:h-auto lg:w-auto flex-1'>
                    <img src="https://www.StormFiber.com/wp-content/uploads/2016/12/gadgets.png" alt="pic" />
                </div>
                <div className='flex-1 justify-center items-center'>
                    <h1 className='text-3xl font-bold transition transition-150 ease-in-out'>A WHOLE NEW</h1>
                    <p className='text-xl ' >Internet Experience</p>
                    <p className='text-gray-900  '>
                        Consumers across the globe are switching to fiber backed connectivity; a medium that offers you
                        faster speeds when compared to conventional wired/wireless service
                        providers. Greennet lets you tap into the true power of the Internet.
                    </p>
                </div>

            </div>

            <div className='bg-stone-800 text-white  flex flex-col md:flex-col space-y-3 lg:space-x-10 lg:space-y-0 lg:flex-row justify-center items-center lg:justify-between text-center lg:text-left px-0 py-20 sm:px-96 md:px-0 sm:py-20  '>
                <div className='h-56 w-56 lg:h-auto lg:w-auto flex-1'>
                    <img className='transition duration-500 hover:-translate-y-1 hover:scale-110 ease-in-out'
                        src="https://www.StormFiber.com/wp-content/themes/stormfiber/images/icontv/tele.png" alt="pic" />
                </div>
                <div className='flex-1 justify-start items-center px-12 lg:px-0'>
                    <h1 className='text-3xl font-bold transition transition-150 ease-in-out'>WHY YOU SHOULD CHOOSE US</h1>
                    <p className='text-gray-100 mt-3'>
                        1. What differentiates Greennet from other internet and television service providers is its quality of service.
                    </p>
                    <p className='text-gray-100 mt-3'>
                        2. At Greennet, we know that consumers expect entertainment to be available on demand.
                    </p>
                    <p className='text-gray-100 mt-3 '>
                        3. Other internet and television service providers bank on unreliable copper based technology.
                    </p>
                    <p className='text-gray-100 mt-3 '>
                        4. We have invested in building a fiber based network that brings reliable, fast, affordable and convenient services to your doorstep
                    </p>
                </div>

            </div>
        </div>
    );
};

export default About;
