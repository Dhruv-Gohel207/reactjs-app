// src/LoginPage.jsx
import React from 'react';


const LoginPage = () => {
    return (
        <aside className="my-5 relative overflow-hidden text-black bg-gradient-to-r from-indigo-400 to-sky-600 rounded-lg sm:mx-16 mx-2 sm:py-16">
    <div className="relative z-10 max-w-screen-xl  px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <div className="relative z-10 bg-white bg-opacity-20 backdrop-blur-sm p-8 rounded-lg shadow-lg ml-10 mt-5 max-w-sm w-full  ">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-100">Username</label>
                        <input type="text" id="username" name="username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-100">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                    </div>
                    <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-gradient-to-r from-sky-400 to-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
                </form>
            </div>
        </div>
    </div>

    <div className="absolute inset-0 ml-20 w-full sm:my-48 sm:mx-25 sm:pt-1 pt-12 h-full ">
        <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
    </div>
</aside>

    );
};

export default LoginPage;
