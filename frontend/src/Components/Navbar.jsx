import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className={`bg-gray-800 text-white p-4 transition-color ${isNavOpen ? 'duration-500' : 'duration-300'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-semibold">
                    <Link to="/" className="hover:text-gray-300 text-2xl lg:text-4xl">Kinder<span className='text-orange-500'>Garten</span></Link>
                </div>

                {/* Mobile Navigation Toggle */}
                <AiOutlineMenu size={25} onClick={toggleNav} className={`transition-transform cursor-pointer ${isNavOpen ? 'transform rotate-180 duration-500' : 'duration-500'}`} />

            </div>

            {/* Modal Navigation */}
            <div className={`fixed top-0 right-0 h-full w-1/3 bg-gray-800 text-white p-4 transform ${isNavOpen ? 'translate-x-0 opacity-100 duration-500' : 'translate-x-full opacity-0 duration-300'}`}>
                <div>
                    <AiOutlineClose size={25} onClick={toggleNav} className="text-white hover:text-gray-300 float-right transition-transform duration-300 cursor-pointer" />
                    <Link to="/" className="hover:text-gray-300 text-3xl font-bold">Kinder<span className='text-orange-500'>Garten</span></Link>
                </div>
                <ul className="flex flex-col space-y-4 mt-12 font-semibold text-xl">
                    <li>
                        <Link to="/" className="hover:text-gray-300 cursor-pointer">Home</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-300 cursor-pointer">About</Link>
                    </li>
                    <li>
                        <Link to="/plan" className="hover:text-gray-300 cursor-pointer">Plan</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-300 cursor-pointer">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
