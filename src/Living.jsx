import React from 'react';
import Header from './commonfile/Header';
import Footer from './footer';
import App from './App';

const Living = () => {
    return (
        <div className='relative'>
            {/* <Header /> */}
            <App/>
            <div className=" border-2 w-[86%] absolute top-[80px] left-[5%] grid grid-cols-5 bg-white ">

                <div className="bg-white pl-[20px] py-[20px] mt-[20px] ">
                    <h6 className='text-[#ffc400] font-bold text-[13px] cursor-pointer '>Bed Linen & Furnishing</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Bed Runners</li>
                        <li className='hover:font-bold cursor-pointer '>Bedsheets</li>
                        <li className='hover:font-bold cursor-pointer '>Bedding Sets</li>
                        <li className='hover:font-bold cursor-pointer '>Blankets, Quilts & Dohars</li>
                        <li className='hover:font-bold cursor-pointer '>Pillows & Pillow Covers</li>
                        <li className='hover:font-bold cursor-pointer '>Bed Covers</li>
                        <li className='hover:font-bold cursor-pointer '>Diwan Sets</li>
                        <li className='hover:font-bold cursor-pointer '>Sofa Covers</li>
                    </ul>

                    <hr className='w-[70%] my-[10px] ' />

                    {/* ////////////////////////////////////////////////////////// */}

                    <h6 className='text-[#ffc400] font-bold text-[13px] cursor-pointer '>Flooring</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Floor Runners</li>
                        <li className='hover:font-bold cursor-pointer '>Carpets</li>
                        <li className='hover:font-bold cursor-pointer '>Floor Mats & Dhurries</li>
                        <li className='hover:font-bold cursor-pointer '>Door Mats</li>
                    </ul>

                </div>

                {/* \\\\\\\\\\\\\\\\\\\\\\\\FIRST LI CLOSE/////////////////////// */}

                <div className="bg-[#F5F5F6] py-[20px] pl-[20px] mt-[20px] ">
                    <h6 className='text-[#ffc400] font-bold text-[13px] cursor-pointer '>Bath</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Bath Towels</li>
                        <li className='hover:font-bold cursor-pointer '>Hand & Face Towels</li>
                        <li className='hover:font-bold cursor-pointer '>Beach Towels</li>
                        <li className='hover:font-bold cursor-pointer '>Towels Set</li>
                        <li className='hover:font-bold cursor-pointer '>Bath Rugs</li>
                        <li className='hover:font-bold cursor-pointer '>Bath Robes</li>
                        <li className='hover:font-bold cursor-pointer '>Bathroom Accessories</li>
                    </ul>

                    <hr className='w-[70%] my-[10px] ' />

                    {/* ////////////////////////////////////////////////////////// */}

                    <h6 className='text-[#ffc400] font-bold text-[13px] cursor-pointer '>Lamps & Lighting</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Floor Lamps</li>
                        <li className='hover:font-bold cursor-pointer '>Ceiling Lamps</li>
                        <li className='hover:font-bold cursor-pointer '>Table LampsBeach Towels</li>
                        <li className='hover:font-bold cursor-pointer '>Wall Lamps</li>
                        <li className='hover:font-bold cursor-pointer '>Outdoor Lamps</li>
                        <li className='hover:font-bold cursor-pointer '>String Lights</li>
                    </ul>

                </div>

                {/* \\\\\\\\\\\\\\\\\\\\\\\\SECOND LI CLOSE/////////////////////// */}


                <div className="bg-white pl-[20px] py-[20px] mt-[20px] ">
                    <h6 className='text-[#ffc400] font-bold text-[13px] cursor-pointer '>Home Décor</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Plants & Planters</li>
                        <li className='hover:font-bold cursor-pointer '>Aromas & Candles</li>
                        <li className='hover:font-bold cursor-pointer '>Clocks</li>
                        <li className='hover:font-bold cursor-pointer '>Mirrors</li>
                        <li className='hover:font-bold cursor-pointer '>Wall Décor</li>
                        <li className='hover:font-bold cursor-pointer '>Festive Decor</li>
                        <li className='hover:font-bold cursor-pointer '>Pooja Essentials</li>
                        <li className='hover:font-bold cursor-pointer '>Fountains</li>
                        <li className='hover:font-bold cursor-pointer '>Wall Shelves</li>
                        <li className='hover:font-bold cursor-pointer '>Showpieces & Vases</li>
                        <li className='hover:font-bold cursor-pointer '>Ottoman</li>
                    </ul>

                    <hr className='w-[70%] my-[10px] ' />

                    {/* ////////////////////////////////////////////////////////// */}

                    <h6 className='text-[#ffc400] font-bold text-[13px] cursor-pointer leading-[30px] '>Cushions & Cushion Covers</h6>
                    <h6 className='text-[#ffc400] font-bold text-[13px] cursor-pointer leading-[30px] '>Curtains</h6>
                </div>

                {/* \\\\\\\\\\\\\\\\\\\\\\\\THIRD LI CLOSE/////////////////////// */}


                <div className="bg-[#F5F5F6] py-[20px] pl-[20px] mt-[20px] ">
                    <h6 className='text-[#ffc400] font-bold text-[13px] cursor-pointer '>Home Gift Sets</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Kitchen & Table</li>
                        <li className='hover:font-bold cursor-pointer '>Table Runners</li>
                        <li className='hover:font-bold cursor-pointer '>Dinnerware & Serveware</li>
                        <li className='hover:font-bold cursor-pointer '>Cups and Mugs</li>
                        <li className='hover:font-bold cursor-pointer '>Bakeware & Cookware</li>
                        <li className='hover:font-bold cursor-pointer '>Kitchen Storage & Tools</li>
                        <li className='hover:font-bold cursor-pointer '>Bar & Drinkware</li>
                        <li className='hover:font-bold cursor-pointer '>Table Covers & Furnishings</li>
                    </ul>

                    <hr className='w-[70%] my-[10px] ' />

                    {/* //////////////////////////////////////// */}

                    <h6 className='text-[#ffc400] font-bold text-[13px] cursor-pointer leading-[30px]'>Storage</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>Bins</li>
                        <li className='hover:font-bold cursor-pointer '>Hangers</li>
                        <li className='hover:font-bold cursor-pointer '>Organisers</li>
                        <li className='hover:font-bold cursor-pointer '>Hooks & Holders</li>
                        <li className='hover:font-bold cursor-pointer '>Laundry Bags</li>
                    </ul>

                </div>

                {/* \\\\\\\\\\\\\\\\\\\\\\\\FOURTH LI CLOSE/////////////////////// */}


                <div className="bg-white pl-[20px] py-[20px] mt-[20px] ">
                    <h6 className='text-[#ffc400] font-bold text-[13px] cursor-pointer '>Brands</h6>
                    <ul className='text-[14px] text-gray-600 leading-[25px] '>
                        <li className='hover:font-bold cursor-pointer '>H&M</li>
                        <li className='hover:font-bold cursor-pointer '>Marks & Spencer</li>
                        <li className='hover:font-bold cursor-pointer '>Home Centre</li>
                        <li className='hover:font-bold cursor-pointer '>Spaces</li>
                        <li className='hover:font-bold cursor-pointer '>D'Decor</li>
                        <li className='hover:font-bold cursor-pointer '>Story@Home</li>
                        <li className='hover:font-bold cursor-pointer '>Pure Home & Living</li>
                        <li className='hover:font-bold cursor-pointer '>Swayam</li>
                        <li className='hover:font-bold cursor-pointer '>Raymond Homee</li>
                        <li className='hover:font-bold cursor-pointer '>Maspar</li>
                        <li className='hover:font-bold cursor-pointer '>My Trident</li>
                        <li className='hover:font-bold cursor-pointer '>Cortina</li>
                        <li className='hover:font-bold cursor-pointer '>Random</li>
                        <li className='hover:font-bold cursor-pointer '>Ellementry</li>
                        <li className='hover:font-bold cursor-pointer '>ROMEE</li>
                        <li className='hover:font-bold cursor-pointer '>SEJ by Nisha Gupta</li>

                    </ul>

                </div>
                {/* \\\\\\\\\\\\\\\\\\\\\\\\FIFTH LI CLOSE/////////////////////// */}

            </div>
            <Footer />
        </div>
    );
}

export default Living;
