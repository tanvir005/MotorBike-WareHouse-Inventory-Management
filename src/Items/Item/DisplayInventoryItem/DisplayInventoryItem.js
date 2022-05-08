import React from 'react';
import { useNavigate } from 'react-router';

const DisplayInventoryItem = ({ item }) => {

    const { _id, name, img, description, price } = item;

    const navigate = useNavigate();

    const navigateToCheckOut = id => {
        navigate(`/inventoryitems/${id}`)
    }

    return (
        <div className="flex gap-10 m-10 p-5 border-2 shadow-slate-50 rounded-2xl">

            <div>
                <img className="w-80 h-64 mx-auto hover:rotate-2" src={img} alt="" />
                <h3 className="text-2xl font-bold text-left ">{name}</h3>
                <p className="text-slate-500 text-justify">{description}</p>
                <p className="text-black text-justify font-bold text-lg my-5">Price:  ${price}</p>

                <button onClick={() => navigateToCheckOut(_id)} className=" bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                    Manage Item
                </button>

            </div>
        </div>
    );
};

export default DisplayInventoryItem;