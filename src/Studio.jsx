import React from 'react';
import Header from './commonfile/Header';
import sudio from '../src/commonfile/img/sudio-nav-banner.png'
import studio from '../src/commonfile/img/studio-logo-new.svg'
import arrow from '../src/commonfile/img/chevron-right.svg'
import Footer from './footer';
import App from './App';
const Studio = () => {
    return (
        <div className='relative'>
            {/* <Header /> */}
            <App/>

            <div className="absolute top-[80px] left-[28%] border w-[500px] h-[450px] p-[10px] bg-white ">

                <img src={studio} alt="" width={120} className=' mx-auto my-[10px] ' />

                <p className='text-[grey] mb-[20px] text-center '>Your daily inspiration for everything fashion</p>
                <img src={sudio} alt="" width={500} />

                <button className='flex mx-auto border-[grey] border mt-[20px] text-[#535151] font-bold text-[14px] px-[20px] py-[10px] '>EXPLORE STUDIO <img src={arrow} alt="" className='text-[#535151] ' /></button>
            </div>
            <Footer />
        </div>
    );
}

export default Studio;
