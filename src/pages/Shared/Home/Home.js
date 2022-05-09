import React from 'react';
import { Link } from 'react-router-dom';
import useInventoryItem from '../../../Hooks/useInventoryItem/useInventoryItem';
import bannerPic from '../../../images/banner-pic.png';
import DisplayInventoryItem from '../../../Items/DisplayInventoryItem/DisplayInventoryItem';
import bikeS from '../../../images/bike safety.jpg';
import safetyGears from '../../../images/saftygares.webp';

const Home = () => {

    // data load from custom hook 
    const [item, setItem] = useInventoryItem();
    return (
        <div>
            <div className="md:flex bg-black items-center justify-evenly pb-5 md:pb-0">
                <div className="md:w-10/12 mx-auto justify-items-end md:order-2"><img className="w-9/12" src={bannerPic} alt="" /></div>
                <div className="mx-auto md:w-4/12 md:ml-32 p-8 text-left">
                    <h1 className="md:text-2xl font-serif text-white text-lg font-semibold mb-5">SOME NEW 2023 VEHICLES
                        HAVE LAUNCHED</h1>
                    <h1 className="md:text-sm font-semibold text-white font-serif">STAY TUNED FOR THE NEXT LAUNCH JUNE 7TH AT 6 AM</h1>
                    <button className="border-2 border-green-600 hover:text-green-600  px-6 py-2 rounded text-white md:text-xs my-5 whitespace-nowrap">EXPLORE NEW VEHICLES</button>
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-bold mt-20 text-center" style={{ color: '#69bd27' }}>Inventory Items</h1>
                <div className="grid md:grid-cols-3">
                    {
                        item.slice(0, 6).map(item => <DisplayInventoryItem
                            key={item._id}
                            item={item}
                        ></DisplayInventoryItem>)

                    }
                </div>
            </div>
            <div className="flex">
                <Link className="bg-green-500 hover:bg-green-700 text-white font-bold text-center py-4 px-4 w-full p-2 m-8  rounded focus:outline-none focus:shadow-outline"
                    to="/additem">
                    ADD NEW ITEM
                </Link>
            </div>
            <div className="md:flex items-center gap-10 m-10 p-10">
                <img className="mb-5 w-1/2" src={bikeS} alt="" />
                <div>
                    <h1 className="md:text-5xl text-xl font-extrabold font-serif text-green-600">NEEDs of Bike SAFETY Gears</h1>
                    <p className="md:text-xl md:w-3/4 text-black text-justify mt-4">Safety in everything is paramount,
                        and motorcycling is no different. Whether you’re six months into your new adventure or 16 years passed that first ride,
                        motorcycle gear is an investment that will always pay for itself. Sure, there are cheaper ways to go.
                        Jeans and hiking boots are still in style. </p>

                    <div className="md:flex  gap-10 mx-auto mt-10 ">
                        <p className=" mt-10 hover:bg-blue-100 px-6 py-3 rounded font-bold text-teal-900 text-center">
                            289 <br />
                            Accident Case</p>
                        <p className="mt-10 hover:bg-slate-100 px-6 py-3 rounded font-bold text-teal-900 text-center">
                            64 <br />
                            Protected</p>
                        <p className=" mt-10 hover:bg-blue-100 px-6 py-3 rounded font-bold text-teal-900 text-center">

                            135 <br />
                            Injured Case</p>

                    </div>
                </div>
            </div>
            <div className="md:flex items-center gap-10 m-10 p-10">
                <img className="mb-5 w-1/2 md:order-2" src={safetyGears} alt="" />
                <div className="md:order-1">
                    <h1 className="md:text-5xl text-xl font-extrabold font-serif text-green-600">How to be SAFE in Your RIDING</h1>
                    <ul className="md:text-xl md:w-3/4 text-green-900 text-justify font-bold mt-8 list-disc ml-10">
                        <li>Take a safety course.</li>
                        <li>Check the weather before heading out.</li>
                        <li>Wear motorcycle gear.</li>
                        <li>Inspect your motorcycle before each ride.</li>
                        <li>Obey traffic rules, use your signals and drive the speed limit.</li>
                        <li>Stay at a safe distance</li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Home;

