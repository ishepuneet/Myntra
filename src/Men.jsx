"use client"
import React, { useState } from 'react';
// import Header from './commonfile/Header';
import Footer from './footer';
import App from './App';
import { Link } from 'react-router-dom';
// import Menstopwear from './Menstopwear';

const Men = () => {

    return (
        <div className=' relative'>
            {/* <Header /> */}
            <App />

            <div className=" men-section w-[86%] absolute top-[80px] left-[5%] grid grid-cols-5 bg-white border-black border-2 ">

                <div className="bg-white pl-[20px] py-[20px] mt-[20px] ">

                    <h6 className='text-[#EE5F73] font-bold text-[13px] cursor-pointer '><Link to={'/Menstopwear'}>Topwear</Link></h6>
                    
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>T-Shirts</li>
                        <li className='hover:font-bold cursor-pointer '>Casual Shirts</li>
                        <li className='hover:font-bold cursor-pointer '>Formal Shirts</li>
                        <li className='hover:font-bold cursor-pointer '>Sweatshirts</li>
                        <li className='hover:font-bold cursor-pointer '>Sweaters</li>
                        <li className='hover:font-bold cursor-pointer '>Jackets</li>
                        <li className='hover:font-bold cursor-pointer '>Blazers & Coats</li>
                        <li className='hover:font-bold cursor-pointer '>Suits</li>
                        <li className='hover:font-bold cursor-pointer '>Rain Jackets</li>
                    </ul>
                    <hr className='w-[70%] my-[20px] ' />

                    {/* ///////////////////////////////////////// */}

                    <h6 className='text-[#EE5F73] font-bold text-[13px] cursor-pointer'>Indian & Festive Wear</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Kurtas & Kurta Sets</li>
                        <li className='hover:font-bold cursor-pointer '>Sherwanis</li>
                        <li className='hover:font-bold cursor-pointer '>Nehru Jackets</li>
                        <li className='hover:font-bold cursor-pointer '>Dhotis</li>
                    </ul>

                </div>

                {/* \\\\\\\\\\\\\\\\\\\\\\\\FIRST LI CLOSE/////////////////////// */}

                <div className="bg-[#F5F5F6] pl-[20px] py-[20px] mt-[20px] ">
                    <h6 className='text-[#EE5F73] font-bold text-[13px] cursor-pointer '>Bottomwear</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Jeans</li>
                        <li className='hover:font-bold cursor-pointer '>Casual Trousers</li>
                        <li className='hover:font-bold cursor-pointer '>Formal Trousers</li>
                        <li className='hover:font-bold cursor-pointer '>Shorts</li>
                        <li className='hover:font-bold cursor-pointer '>Track Pants & Joggers</li>
                    </ul>
                    <hr className='w-[70%] my-[20px] ' />

                    {/* /////////////////// */}

                    <h6 className='text-[#EE5F73] font-bold text-[13px] cursor-pointer '>Innerwear & Sleepwear</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Briefs & Trunks</li>
                        <li className='hover:font-bold cursor-pointer '>Boxers</li>
                        <li className='hover:font-bold cursor-pointer '>Vests</li>
                        <li className='hover:font-bold cursor-pointer '>Sleepwear & Loungewear</li>
                        <li className='hover:font-bold cursor-pointer '>Thermals</li>
                    </ul>
                    <hr className='w-[70%] my-[20px] ' />

                    {/* /////////////////////////////// */}

                    <h6 className='text-[#EE5F73] font-bold text-[13px] cursor-pointer '>Plus Size</h6>

                </div>

                {/* \\\\\\\\\\\\\\\\\\\\\\\\SECOND LI CLOSE/////////////////////// */}


                <div className="bg-white pl-[20px] py-[20px] mt-[20px] ">
                    <h6 className='text-[#EE5F73] font-bold text-[13px] cursor-pointer '>Footwear</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Casual Shoes</li>
                        <li className='hover:font-bold cursor-pointer '>Sports Shoes</li>
                        <li className='hover:font-bold cursor-pointer '>Formal Shoes</li>
                        <li className='hover:font-bold cursor-pointer '>Sneakers</li>
                        <li className='hover:font-bold cursor-pointer '>Sandals & Floaters</li>
                        <li className='hover:font-bold cursor-pointer '>Flip Flops</li>
                        <li className='hover:font-bold cursor-pointer '>Socks</li>
                    </ul>
                    <hr className='w-[70%] my-[20px] ' />

                    {/* ////////////////////////////////////////////////////////// */}

                    <h6 className='text-[#EE5F73] font-bold text-[13px] cursor-pointer leading-[30px] '>Personal Care & Grooming</h6>
                    <h6 className='text-[#EE5F73] font-bold text-[13px] cursor-pointer leading-[30px] '>Sunglasses & Frames</h6>
                    <h6 className='text-[#EE5F73] font-bold text-[13px] cursor-pointer leading-[30px] '>Watches</h6>
                </div>

                {/* \\\\\\\\\\\\\\\\\\\\\\\\THIRD LI CLOSE/////////////////////// */}


                <div className="bg-[#F5F5F6] pl-[20px] py-[20px] mt-[20px] ">
                    <h6 className='text-[#EE5F73] font-bold text-[13px] cursor-pointer '>Sports & Active Wear</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Sports Shoes</li>
                        <li className='hover:font-bold cursor-pointer '>Sports Sandals</li>
                        <li className='hover:font-bold cursor-pointer '>Active T-Shirts</li>
                        <li className='hover:font-bold cursor-pointer '>Track Pants & Shorts</li>
                        <li className='hover:font-bold cursor-pointer '>Tracksuits</li>
                        <li className='hover:font-bold cursor-pointer '>Jackets & Sweatshirts</li>
                        <li className='hover:font-bold cursor-pointer '>Sports Accessories</li>
                        <li className='hover:font-bold cursor-pointer '>Swimwear</li>
                    </ul>
                    <hr className='w-[70%] my-[20px] ' />

                    {/* //////////////////////////////////////// */}
                    <h6 className='text-[#EE5F73] font-bold text-[13px] cursor-pointer '>Gadgets</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Smart Wearables</li>
                        <li className='hover:font-bold cursor-pointer '>Fitness Gadgets</li>
                        <li className='hover:font-bold cursor-pointer '>Headphones</li>
                        <li className='hover:font-bold cursor-pointer '>Speakers</li>
                    </ul>
                </div>

                {/* \\\\\\\\\\\\\\\\\\\\\\\\FOURTH LI CLOSE/////////////////////// */}


                <div className="bg-white pl-[20px] py-[20px] mt-[20px] ">
                    <h6 className='text-[#EE5F73] font-bold text-[13px] cursor-pointer '>Fashion Accessories</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Wallets</li>
                        <li className='hover:font-bold cursor-pointer '>Belts</li>
                        <li className='hover:font-bold cursor-pointer '>Perfumes & Body Mists</li>
                        <li className='hover:font-bold cursor-pointer '>Trimmers</li>
                        <li className='hover:font-bold cursor-pointer '>Deodorants</li>
                        <li className='hover:font-bold cursor-pointer '>Ties, Cufflinks & Pocket Squares</li>
                        <li className='hover:font-bold cursor-pointer '>Accessory Gift Sets</li>
                        <li className='hover:font-bold cursor-pointer '>Caps & Hats</li>
                        <li className='hover:font-bold cursor-pointer '>Mufflers, Scarves & Gloves</li>
                        <li className='hover:font-bold cursor-pointer '>Phone Cases</li>
                        <li className='hover:font-bold cursor-pointer '>Rings & Wristwear</li>
                        <li className='hover:font-bold cursor-pointer '>Helmets</li>
                    </ul>
                    <hr className='w-[70%] my-[20px] ' />

                    {/* //////////////////////////////////////////////// */}

                    <h6 className='text-[#EE5F73] font-bold text-[13px] cursor-pointer leading-[30px]'>Bags & Backpacks</h6>
                    <h6 className='text-[#EE5F73] font-bold text-[13px] cursor-pointer leading-[30px]'>Luggages & Trolleys</h6>
                </div>
                {/* \\\\\\\\\\\\\\\\\\\\\\\\FIFTH LI CLOSE/////////////////////// */}

            </div>

            <Footer />
        </div>
    );
}

export default Men;
