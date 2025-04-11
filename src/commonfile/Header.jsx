"use client"
import React, { useEffect } from 'react';
import img from './logo.jpeg'
import { Link } from 'react-router-dom';
import '../../src/heading.css';
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";


const Header = () => {

    return (
        <div>
            <div className="shadow-black py-[10px] shadow-md ">

                <div className="flex max-w-screen-2xl m-auto">
                    <div className="ml-[2%] mb-[10px] w-[120px] ">
                        <Link to={'/'}><img src={img} alt="" /></Link>
                    </div>

                    <div className="flex justify-between text-[#282C3F] text-[14px] font-[700] w-[500px] ">
                        <Link to={'/Men'} className='men hover:border-b-4 border-[#EE5F73] py-[24px] '>MEN</Link>
                        <Link to={'/women'} className='hover:border-b-4 border-[#FB56C1] py-[24px] '>WOMEN</Link>
                        <Link to={'/Kids'} className='hover:border-b-4 border-[#F26A10] py-[24px] '>KIDS</Link>
                        <Link to={'/Living'} className='hover:border-b-4 border-[#F2C210] py-[24px] '>HOME & LIVING</Link>
                        <Link to={'/Beauty'} className='hover:border-b-4 border-[#0DB7AF] py-[24px] '>BEAUTY</Link>
                        <Link to={'/Studio'} className='hover:border-b-4 border-[#FF3F6C] py-[24px] '>STUDIO</Link>
                    </div>

                    <div className="flex">

                        <div className="ml-[5%] mt-[8px] relative ">
                            <span className='absolute top-[12px] left-[10px] text-gray-500 text-[20px] '><IoSearchSharp /></span>
                            <input type="search" placeholder="Search for products, brands and more" id="" className='bg-[#F5F5F6] rounded-sm py-[10px] w-[370px] text-center hover:border hover:bg-white ' />
                        </div>

                        <div className=" ml-[20%] flex justify-between ">

                            <Link to={'/Profilecard'}>
                                <div className=" py-[10px] ">
                                    <span className='text-[20px] font-normal '><FaRegUser /></span>
                                    <h2 className='text-[12px] font-[600] leading-[20px]'>Profile</h2>
                                </div>
                            </Link>

                            <div className="mx-[25px] py-[10px]  ">
                                <span className='text-[20px] font-normal '><IoHeartOutline /></span>
                                <h2 className='text-[12px] font-[600] '>Wishlist</h2>
                            </div>

                            <div className=" py-[10px] ">
                                <span className='text-[20px] font-normal '><HiOutlineShoppingBag /></span>
                                <h2 className='text-[12px] font-[600] '>Bags</h2>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;
