'use client';

import App from "./App";

import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref, set } from "firebase/database";
import { app } from './firebase';



export default function Login() {
    const db = getDatabase(app);


    let userData = (e) => {
        e.preventDefault()

        let userObj = {
            name: e.target.uname.value,
            call: e.target.ucall.value,
            email: e.target.umail.value,
            pass: e.target.upass.value,
        }

        let uid = uuidv4();

        set(ref(db, "MYNTRA_DB/" + uid), userObj)
        alert('Happy 😄 Shopping🛍️')
    }


    return (
        <div className="relative">
            <App />

            <div className="cursor-pointer fixed left-[38%] top-10 shadow-2xl shadow-black mt-[5%] bg-[#8080807e] rounded-2xl p-4 w-[330px] m-auto hover:border-2 border-black">
                <form onSubmit={userData} className="max-w-sm mx-auto">
                    <span className='text-white absolute right-2 top-0 hover:text-[red] hover:font-bold'>X</span>
                    <h1 className='text-3xl text-white text-center mt-4 '>Login form</h1>
                    <div className="mb-5">
                        <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input id="terms" name="uname" type="text" className="shadow-xs cursor-pointer hover:border-green-600 bg-[#a8a8a87a] border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="call" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile no</label>
                        <input type="text" id="repeat-password" name="ucall" className="shadow-xs cursor-pointer hover:border-green-600 bg-[#a8a8a87a] border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
                    </div>
                    <div className="mb-5">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="umail" id="email" className="shadow-xs cursor-pointer hover:border-green-600 bg-[#a8a8a87a] border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-50 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="name@mail.com" required />
                    </div>
                    <div className="mb-5">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" name="upass" className="shadow-xs cursor-pointer hover:border-green-600 bg-[#a8a8a87a] border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
                    </div>


                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login / SignUp</button>
                </form>
            </div>


        </div>
    )
}



