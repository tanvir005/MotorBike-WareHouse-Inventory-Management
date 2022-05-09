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
            <footer className="static bottom-0 bg-black ">
                <div className="inline-grid p-20 md:flex md:justify-evenly py-16 text-green-700 gap-5">
                    <div className="text-start">
                        <h1 className="text-2xl font-bold mb-5 text-green-500">Quick Link</h1>
                        <ul className="inline-grid">
                            <Link to="/">Home</Link>
                            <Link to="/inventory">Inventory</Link>
                            <Link to="/about">About</Link>
                            <Link to="/register">Register</Link>
                        </ul>
                    </div>
                    <div className="text-start">
                        <h1 className="text-2xl font-bold mb-5 text-green-500">Top Selled Items</h1>
                        <ul className="inline-grid">
                            <Link to="/inventory/62780c5804a2f48727646e91">NINJA® ZX™-14R ABS</Link>
                            <Link to="/inventory/627806f404a2f48727646e8c">VULCAN® 900 CUSTOM</Link>
                            <Link to="/inventory/6278038c04a2f48727646e8a">Z H2 SE</Link>
                            <Link to="/inventory/6278045404a2f48727646e8b">VERSYS® 650</Link>
                        </ul>
                    </div>
                    <div className="text-start ">
                        <h1 className="text-2xl font-bold mb-5 text-green-500">Follow Me</h1>
                        <ul className="flex gap-5">
                            <a href="https://www.google.com/" target='_blank'><img className="w-5 h-5" src={google} alt="" /></a>
                            <a href="https://www.youtube.com" target='_blank'><img className="w-5 h-5" src={yt} alt="" /></a>
                            <a href="https://www.github.com" target='_blank'><img className="w-7 h-7 bg-white rounded-full p-1" src={git} alt="" /></a>
                            <a href=""><img className="w-5 h-5" src={spotify} alt="" /></a>
                        </ul>
                    </div>
                </div>
                <p className="text-center text-green-500 text-xs pb-4">
                    &copy;{date.getFullYear()} KAWASAKI Inc. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;