'use client'
import Footer from './footer';
import App from './App';
import { Link } from 'react-router-dom';


const Profilecard = () => {

    return (
        <div className="relative ">

            <App />
            <div className='border-2 border-black w-[320px] py-[20px] px-[20px] absolute top-[95px] right-[18px] bg-white '>
                <h6 className='text-[#3E4152] text-[14px] font-[700] '>Welcome</h6>
                <p className='text-[#282C3F] mb-[10px] '>To access account and manage orders</p>

                <button type="submit" className='text-[#FF3F6C] mb-[20px] hover:border-[#FF3F6C] border rounded font-[700] py-[10px] text-[14px] px-[20px] '><Link to={'/Login'}>LOGIN</Link> / SIGNUP</button>
                <hr />

                <ul>
                    <li className='hover:font-bold text-[#3E4152] hover:text-[rgb(62, 65, 82)] cursor-pointer leading-[25px] '>Orders</li>
                    <li className='hover:font-bold text-[#3E4152] hover:text-[rgb(62, 65, 82)] cursor-pointer leading-[25px] '>Wishlist</li>
                    <li className='hover:font-bold text-[#3E4152] hover:text-[rgb(62, 65, 82)] cursor-pointer leading-[25px] '>Gift Cards</li>
                    <li className='hover:font-bold text-[#3E4152] hover:text-[rgb(62, 65, 82)] cursor-pointer leading-[25px] '>Contact Us</li>
                    <li className='hover:font-bold text-[#3E4152] hover:text-[rgb(62, 65, 82)] cursor-pointer leading-[25px] mb-[10px] '>Myntra Insider</li>
                </ul>
                <hr />

                <ul>
                    <li className='hover:font-bold text-[#3E4152] hover:text-[rgb(62, 65, 82)] cursor-pointer leading-[25px] mt-[10px] '>Myntra Credit</li>
                    <li className='hover:font-bold text-[#3E4152] hover:text-[rgb(62, 65, 82)] cursor-pointer leading-[25px] '>Coupons</li>
                    <li className='hover:font-bold text-[#3E4152] hover:text-[rgb(62, 65, 82)] cursor-pointer leading-[25px] '>Saved Cards</li>
                    <li className='hover:font-bold text-[#3E4152] hover:text-[rgb(62, 65, 82)] cursor-pointer leading-[25px] '>Saved VPA</li>
                    <li className='hover:font-bold text-[#3E4152] hover:text-[rgb(62, 65, 82)] cursor-pointer leading-[25px] '>Saved Addresses</li>
                </ul>
            </div>

            <Footer />
        </div>
    );
}

export default Profilecard;
