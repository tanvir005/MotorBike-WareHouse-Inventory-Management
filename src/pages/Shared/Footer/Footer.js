import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../../SocialLogoImg/images/google-logo.png';
import yt from '../../../SocialLogoImg/images/yt-logo.png';
import git from '../../../SocialLogoImg/images/git.png';
import spotify from '../../../SocialLogoImg/images/spotify-logo.png';

const Footer = () => {
    const date = new Date();

    return (
        <div className="absolute w-full">
            <footer className="static bottom-0 bg-slate-900 ">
                <div className="inline-grid p-20 md:flex md:justify-evenly py-16 text-slate-300 gap-5">
                    <div className="text-start">
                        <h1 className="text-2xl font-bold mb-5 text-white">Quick Link</h1>
                        <ul className="inline-grid">
                            <Link to="/">Home</Link>
                            <Link to="/services">Service</Link>
                            <Link to="/about">About</Link>
                            <Link to="/register">Register</Link>
                        </ul>
                    </div>
                    <div className="text-start">
                        <h1 className="text-2xl font-bold mb-5 text-white">Available Services</h1>
                        <ul className="inline-grid">
                            <Link to="/services">Basic Programming</Link>
                            <Link to="/services">Algorithms</Link>
                            <Link to="/services">Data Structures</Link>
                            <Link to="/services">Crack The Interview</Link>
                        </ul>
                    </div>
                    <div className="text-start ">
                        <h1 className="text-2xl font-bold mb-5 text-white">Follow Me</h1>
                        <ul className="flex gap-5">
                            <a href="https://www.google.com/" target='_blank'><img className="w-5 h-5" src={google} alt="" /></a>
                            <a href="https://www.youtube.com" target='_blank'><img className="w-5 h-5" src={yt} alt="" /></a>
                            <a href="https://www.github.com" target='_blank'><img className="w-5 h-5" src={git} alt="" /></a>
                            <a href=""><img className="w-5 h-5" src={spotify} alt="" /></a>
                        </ul>
                    </div>
                </div>
                <p className="text-center text-gray-500 text-xs pb-4">
                    &copy;{date.getFullYear()} YCPT Inc. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;