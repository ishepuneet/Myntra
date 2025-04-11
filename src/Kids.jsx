import React from 'react';
import Header from './commonfile/Header';
import Footer from './footer';
import App from './App';

const Kids = () => {
    return (
        <div className='relative'>
            {/* <Header /> */}
            <App/>
            <div className=" border-2 w-[86%] absolute top-[80px] left-[5%] grid grid-cols-5 bg-white ">

                <div className="bg-white pl-[20px] py-[20px] mt-[20px] ">
                    <h6 className='text-[#ff6600] font-bold text-[13px] cursor-pointer '>Boys Clothing</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>T-Shirts</li>
                        <li className='hover:font-bold cursor-pointer '>Shirts</li>
                        <li className='hover:font-bold cursor-pointer '>Shorts</li>
                        <li className='hover:font-bold cursor-pointer '>Jeans</li>
                        <li className='hover:font-bold cursor-pointer '>Trousers</li>
                        <li className='hover:font-bold cursor-pointer '>Clothing Sets</li>
                        <li className='hover:font-bold cursor-pointer '>Ethnic Wear</li>
                        <li className='hover:font-bold cursor-pointer '>Track Pants & Pyjamas</li>
                        <li className='hover:font-bold cursor-pointer '>Jacket, Sweater & Sweatshirts</li>
                        <li className='hover:font-bold cursor-pointer '>Compact</li>
                        <li className='hover:font-bold cursor-pointer '>Party Wear</li>
                        <li className='hover:font-bold cursor-pointer '>Innerwear & Thermalsr</li>
                        <li className='hover:font-bold cursor-pointer '>Nightwear & Loungewear</li>
                        <li className='hover:font-bold cursor-pointer '>Value Packs</li>
                    </ul>

                </div>

                {/* \\\\\\\\\\\\\\\\\\\\\\\\FIRST LI CLOSE/////////////////////// */}

                <div className="bg-[#F5F5F6] py-[20px] pl-[20px] mt-[20px] ">
                    <h6 className='text-[#ff6600] font-bold text-[13px] cursor-pointer '>Girls Clothing</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Dresses</li>
                        <li className='hover:font-bold cursor-pointer '>Tops</li>
                        <li className='hover:font-bold cursor-pointer '>Tshirts</li>
                        <li className='hover:font-bold cursor-pointer '>Clothing Sets</li>
                        <li className='hover:font-bold cursor-pointer '>Lehenga choli</li>
                        <li className='hover:font-bold cursor-pointer '>Kurta Sets</li>
                        <li className='hover:font-bold cursor-pointer '>Party wear</li>
                        <li className='hover:font-bold cursor-pointer '>Skirts & shorts</li>
                        <li className='hover:font-bold cursor-pointer '>Tights & Leggings</li>
                        <li className='hover:font-bold cursor-pointer '>Jeans, Trousers & Capris</li>
                        <li className='hover:font-bold cursor-pointer '>Jacket, Sweater & Sweatshirts</li>
                        <li className='hover:font-bold cursor-pointer '>Innerwear & Thermals</li>
                        <li className='hover:font-bold cursor-pointer '>Nightwear & Loungewear</li>
                        <li className='hover:font-bold cursor-pointer '>Value Packs</li>
                    </ul>

                </div>

                {/* \\\\\\\\\\\\\\\\\\\\\\\\SECOND LI CLOSE/////////////////////// */}


                <div className="bg-white pl-[20px] py-[20px] mt-[20px] ">
                    <h6 className='text-[#ff6600] font-bold text-[13px] cursor-pointer '>Footwear</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Casual Shoes</li>
                        <li className='hover:font-bold cursor-pointer '>Flipflops</li>
                        <li className='hover:font-bold cursor-pointer '>Sports Shoes</li>
                        <li className='hover:font-bold cursor-pointer '>Flats</li>
                        <li className='hover:font-bold cursor-pointer '>Sandals</li>
                        <li className='hover:font-bold cursor-pointer '>Heels</li>
                        <li className='hover:font-bold cursor-pointer '>School Shoes</li>
                        <li className='hover:font-bold cursor-pointer '>Socks</li>
                    </ul>

                    <hr className='w-[70%] my-[10px] ' />

                    {/* ////////////////////////////////////////////////////////// */}

                    <h6 className='text-[#ff6600] font-bold text-[13px] cursor-pointer leading-[30px] '>Toys & Games</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Learning & Development</li>
                        <li className='hover:font-bold cursor-pointer '>Activity Toys</li>
                        <li className='hover:font-bold cursor-pointer '>Soft Toys</li>
                        <li className='hover:font-bold cursor-pointer '>Action Figure / Play set</li>
                    </ul>

                </div>

                {/* \\\\\\\\\\\\\\\\\\\\\\\\THIRD LI CLOSE/////////////////////// */}


                <div className="bg-[#F5F5F6] py-[20px] pl-[20px] mt-[20px] ">
                    <h6 className='text-[#ff6600] font-bold text-[13px] cursor-pointer '>Infants</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Bodysuits</li>
                        <li className='hover:font-bold cursor-pointer '>Rompers & Sleepsuits</li>
                        <li className='hover:font-bold cursor-pointer '>Clothing Sets</li>
                        <li className='hover:font-bold cursor-pointer '>Tshirts & Tops</li>
                        <li className='hover:font-bold cursor-pointer '>Dresses</li>
                        <li className='hover:font-bold cursor-pointer '>Bottom wear</li>
                        <li className='hover:font-bold cursor-pointer '>Innerwear & Sleepwear</li>
                        <li className='hover:font-bold cursor-pointer '>Infant Care</li>
                    </ul>

                    <hr className='w-[70%] my-[10px] ' />

                    {/* //////////////////////////////////////// */}

                    <h6 className='text-[#ff6600] font-bold text-[13px] cursor-pointer leading-[30px]'>Home & Bath</h6>
                    <h6 className='text-[#ff6600] font-bold text-[13px] cursor-pointer leading-[30px]'>Personal Care</h6>

                </div>

                {/* \\\\\\\\\\\\\\\\\\\\\\\\FOURTH LI CLOSE/////////////////////// */}


                <div className="bg-white pl-[20px] py-[20px] mt-[20px] ">
                    <h6 className='text-[#ff6600] font-bold text-[13px] cursor-pointer '>Kids Accessories</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Bags & Backpacks</li>
                        <li className='hover:font-bold cursor-pointer '>Watches</li>
                        <li className='hover:font-bold cursor-pointer '>Jewellery & Hair accessory</li>
                        <li className='hover:font-bold cursor-pointer '>Sunglasses</li>
                        <li className='hover:font-bold cursor-pointer '>Masks & Protective Gears</li>
                        <li className='hover:font-bold cursor-pointer '>Caps & Hats</li>

                    </ul>

                    <hr className='w-[70%] my-[20px] ' />

                    {/* //////////////////////////////////////// */}

                    <h6 className='text-[#ff6600] font-bold text-[13px] cursor-pointer '>Brands</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>H&M</li>
                        <li className='hover:font-bold cursor-pointer '>Max Kids</li>
                        <li className='hover:font-bold cursor-pointer '>Pantaloons</li>
                        <li className='hover:font-bold cursor-pointer '>United Colors Of Benetton Kids</li>
                        <li className='hover:font-bold cursor-pointer '>YK</li>
                        <li className='hover:font-bold cursor-pointer '>U.S. Polo Assn. Kids</li>
                        <li className='hover:font-bold cursor-pointer '>Mothercare</li>
                        <li className='hover:font-bold cursor-pointer '>HRX</li>
                    </ul>

                </div>
                {/* \\\\\\\\\\\\\\\\\\\\\\\\FIFTH LI CLOSE/////////////////////// */}

            </div>
            <Footer />
        </div>
    );
}

export default Kids;
