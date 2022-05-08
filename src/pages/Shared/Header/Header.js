import React, { useState } from 'react';
import CustomLink from '../../CustomLink/CustomLink';
import { XIcon, MenuIcon } from '@heroicons/react/solid';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from '@firebase/auth';
import commonPic from '../../../images/man-icon-vector-260nw-1040084344.png';
import mainLogo from '../../../images/main-logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
    const [open, setOpen] = useState(false);
    const [user, loading, error] = useAuthState(auth);


    return (
        <nav className="w-full bg-black top-0 sticky">
            <div className=" md:flex md:justify-between">
                <div>
                    <Link to="/" > <img className="w-4/12 p-2 ml-4" src={mainLogo} alt="" /></Link>
                </div>
                <div>
                    <div onClick={() => setOpen(!open)} className="md:hidden w-full p-2 bg-black" style={{ backgroundColor: '#69bd27' }}>
                        {open ? <XIcon className="md:hidden w-7 h-7 "></XIcon> : <MenuIcon className="md:hidden  font-bold w-7 h-7"></MenuIcon>}
                    </div>
                    <ul className={`inline-grid md:flex text-sm bg-black font-bold text-gray-200 md:gap-2 md:justify-center text-left justify-start absolute left-1 duration-500 ease-in md:sticky px-5 pt-5 ${open ? 'top-15' : 'top-[-860px]'}`}>
                        <CustomLink className="px-2 inline-block h-14 rounded hover:border-b-green-600 hover:border-b-8  duration-300 ease-in" to="/">Home</CustomLink>
                        <CustomLink className="px-2 inline-block h-14 rounded hover:border-b-green-600 hover:border-b-8  duration-300 ease-in" to="/services">Service</CustomLink>
                        <CustomLink className="px-2 inline-block h-14 rounded hover:border-b-green-600 hover:border-b-8  duration-300 ease-in" to="/blogs">Blogs</CustomLink>
                        <CustomLink className="px-2 inline-block h-14 rounded hover:border-b-green-600 hover:border-b-8  duration-300 ease-in" to="/about">About</CustomLink>
                        <CustomLink className="px-2 inline-block h-14 rounded hover:border-b-green-600 hover:border-b-8  duration-300 ease-in" to="/checkout">Checkout</CustomLink>
                        {
                            user ? <div className="inline-grid md:flex md:gap-10 md:justify-center text-left justify-start">
                                <img className="w-12 h-12 rounded-full border-2" src={user?.photoURL ? user?.photoURL : commonPic} alt="" />
                                {/* <button onClick={() => signOut(auth)} className="px-2 inline-block h-14 rounded hover:border-b-green-600 hover:border-b-8 font-bold  duration-300 ease-in" >{user?.displayName}</button> */}
                                <button onClick={() => signOut(auth)} className="px-2 inline-block h-14 rounded hover:border-b-green-600 hover:border-b-8 font-bold  duration-300 ease-in" >Sign Out</button>


                            </div>
                                :
                                <div className="inline-grid md:flex md:gap-2 md:justify-center text-left justify-start">
                                    <CustomLink className="px-2 inline-block h-14 rounded hover:border-b-green-600 hover:border-b-8  duration-300 ease-in" to="/login">Login</CustomLink>
                                    <CustomLink className="px-2 inline-block h-14 rounded hover:border-b-green-600 hover:border-b-8  duration-300 ease-in" to="/register">Register</CustomLink>
                                </div>

                        }


                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;

