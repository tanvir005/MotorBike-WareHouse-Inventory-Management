import React from 'react';

const DisplayInventoryItem = () => {
    return (
        <div className="flex gap-10 m-10 p-5 border-2 shadow-slate-50 rounded-2xl">

            <div>
                <img className="w-80 h-64 mx-auto hover:rotate-2" src={img} alt="" />
                <h3 className="text-2xl font-bold text-left ">{name}</h3>
                <p className="text-slate-500 text-justify">{details}</p>
                <p className="text-black text-justify font-bold text-lg my-5">Price:  ${price}</p>

                <button onClick={() => navigateToCheckOut(name)} className=" bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                    Book Now
                </button>

            </div>
        </div>
    );
};

export default DisplayInventoryItem;