import React from 'react';
import Header from './commonfile/Header';
import Footer from './footer';
import App from './App';

const Beauty = () => {
    return (
        <div className='relative'>
            {/* <Header /> */}
            <App/>

            <div className=" border-2 w-[86%] absolute top-[80px] left-[5%] grid grid-cols-5 bg-white ">

                <div className="bg-white pl-[20px] py-[20px] mt-[20px] ">
                    <h6 className='text-[#0DB7AF] font-bold text-[13px] cursor-pointer '>Makeup</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Lipstick</li>
                        <li className='hover:font-bold cursor-pointer '>Lip Gloss</li>
                        <li className='hover:font-bold cursor-pointer '>Lip Liner</li>
                        <li className='hover:font-bold cursor-pointer '>Mascara</li>
                        <li className='hover:font-bold cursor-pointer '>Eyeliner</li>
                        <li className='hover:font-bold cursor-pointer '>Kajal</li>
                        <li className='hover:font-bold cursor-pointer '>Eyeshadow</li>
                        <li className='hover:font-bold cursor-pointer '>Foundation</li>
                        <li className='hover:font-bold cursor-pointer '>Concealer</li>
                        <li className='hover:font-bold cursor-pointer '>Compact</li>
                        <li className='hover:font-bold cursor-pointer '>Nail Polish</li>
                    </ul>

                </div>

                {/* \\\\\\\\\\\\\\\\\\\\\\\\FIRST LI CLOSE/////////////////////// */}

                <div className="bg-[#F5F5F6] py-[20px] pl-[20px] mt-[20px] ">
                    <h6 className='text-[#0DB7AF] font-bold text-[13px] cursor-pointer '>Skincare, Bath & Body</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Face Moisturiser</li>
                        <li className='hover:font-bold cursor-pointer '>Cleanser</li>
                        <li className='hover:font-bold cursor-pointer '>Masks & Peel</li>
                        <li className='hover:font-bold cursor-pointer '>Sunscreen</li>
                        <li className='hover:font-bold cursor-pointer '>Serum</li>
                        <li className='hover:font-bold cursor-pointer '>Face Wash</li>
                        <li className='hover:font-bold cursor-pointer '>Lip Balm</li>
                        <li className='hover:font-bold cursor-pointer '>Body Lotion</li>
                        <li className='hover:font-bold cursor-pointer '>Body Wash</li>
                        <li className='hover:font-bold cursor-pointer '>Body Scrub</li>
                        <li className='hover:font-bold cursor-pointer '>Hand Cream</li>
                    </ul>
                    <hr className='w-[70%] my-[20px] ' />

                    {/* /////////////////////////////// */}

                    <h6 className='text-[#0DB7AF] font-bold text-[13px] cursor-pointer  leading-[30px]'>Baby Care</h6>
                    <h6 className='text-[#0DB7AF] font-bold text-[13px] cursor-pointer  leading-[30px]'>Masks</h6>

                </div>

                {/* \\\\\\\\\\\\\\\\\\\\\\\\SECOND LI CLOSE/////////////////////// */}


                <div className="bg-white pl-[20px] py-[20px] mt-[20px] ">
                    <h6 className='text-[#0DB7AF] font-bold text-[13px] cursor-pointer '>Haircare</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Shampoo</li>
                        <li className='hover:font-bold cursor-pointer '>Conditioner</li>
                        <li className='hover:font-bold cursor-pointer '>Hair Cream</li>
                        <li className='hover:font-bold cursor-pointer '>Hair Oil</li>
                        <li className='hover:font-bold cursor-pointer '>Hair Gel</li>
                        <li className='hover:font-bold cursor-pointer '>Hair Color</li>
                        <li className='hover:font-bold cursor-pointer '>Hair Serum</li>
                        <li className='hover:font-bold cursor-pointer '>Hair Accessory</li>
                    </ul>

                    <hr className='w-[70%] my-[10px] ' />

                    {/* ////////////////////////////////////////////////////////// */}

                    <h6 className='text-[#0DB7AF] font-bold text-[13px] cursor-pointer leading-[30px] '>Fragrances</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Perfume</li>
                        <li className='hover:font-bold cursor-pointer '>Deodorant</li>
                        <li className='hover:font-bold cursor-pointer '>Body Mist</li>
                    </ul>
                </div>

                {/* \\\\\\\\\\\\\\\\\\\\\\\\THIRD LI CLOSE/////////////////////// */}


                <div className="bg-[#F5F5F6] pl-[20px] py-[20px] mt-[20px] ">
                    <h6 className='text-[#0DB7AF] font-bold text-[13px] cursor-pointer '>Appliances</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Hair Straightener</li>
                        <li className='hover:font-bold cursor-pointer '>Hair Dryer</li>
                        <li className='hover:font-bold cursor-pointer '>Epilator</li>
                    </ul>

                    <hr className='w-[70%] my-[10px] ' />

                    {/* //////////////////////////////////////// */}

                    <h6 className='text-[#0DB7AF] font-bold text-[13px] cursor-pointer '>Men's Grooming</h6>

                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Trimmers</li>
                        <li className='hover:font-bold cursor-pointer '>Beard Oil</li>
                        <li className='hover:font-bold cursor-pointer '>Hair Wax</li>
                    </ul>

                    <hr className='w-[70%] my-[10px] ' />

                    {/* //////////////////////////////////////// */}


                    <h6 className='text-[#0DB7AF] font-bold text-[13px] cursor-pointer '>Beauty Gift & Makeup Set</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Beauty Gift</li>
                        <li className='hover:font-bold cursor-pointer '>Makeup Kit</li>
                    </ul>

                    <hr className='w-[70%] my-[10px] ' />

                    {/* //////////////////////////////////////// */}

                    <h6 className='text-[#0DB7AF] font-bold text-[13px] cursor-pointer leading-[30px]'>Premium Beauty</h6>
                    <h6 className='text-[#0DB7AF] font-bold text-[13px] cursor-pointer leading-[30px]'>Wellness & Hygiene</h6>
                </div>

                {/* \\\\\\\\\\\\\\\\\\\\\\\\FOURTH LI CLOSE/////////////////////// */}

                <div className="bg-white pl-[20px] py-[20px] mt-[20px] ">
                    <h6 className='text-[#0DB7AF] font-bold text-[13px] cursor-pointer '>Top Brands</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Lakme</li>
                        <li className='hover:font-bold cursor-pointer '>Maybelline</li>
                        <li className='hover:font-bold cursor-pointer '>LOreal</li>
                        <li className='hover:font-bold cursor-pointer '>Philips</li>
                        <li className='hover:font-bold cursor-pointer '>Bath & Body Works</li>
                        <li className='hover:font-bold cursor-pointer '>THE BODY SHOP</li>
                        <li className='hover:font-bold cursor-pointer '>Biotique</li>
                        <li className='hover:font-bold cursor-pointer '>Mamaearth</li>
                        <li className='hover:font-bold cursor-pointer '>MCaffeine</li>
                        <li className='hover:font-bold cursor-pointer '>Nivea</li>
                        <li className='hover:font-bold cursor-pointer '>Lotus Herbals</li>
                        <li className='hover:font-bold cursor-pointer '>LOreal Professionnel</li>
                        <li className='hover:font-bold cursor-pointer '>KAMA AYURVEDA</li>
                        <li className='hover:font-bold cursor-pointer '>M.A.C</li>
                        <li className='hover:font-bold cursor-pointer '>Forest Essentials</li>
                    </ul>
                </div>
                {/* \\\\\\\\\\\\\\\\\\\\\\\\FIFTH LI CLOSE/////////////////////// */}

            </div>
            <Footer/>
        </div>
    );
}

export default Beauty;
