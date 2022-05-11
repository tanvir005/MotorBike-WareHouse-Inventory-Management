import React from 'react';
import { useNavigate } from 'react-router';

const DisplayInventoryItem = ({ item }) => {


    const { _id, name, img, description, price, quantity, supplier } = item;

    const navigate = useNavigate();

    const navigateToManage = id => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className="flex gap-10 m-10 p-5 border-2 shadow-slate-50 rounded-2xl">

            <div>
                <img className="mx-auto hover:rotate-2" src={img} alt="" />
                <h3 className="text-2xl font-bold text-left ">{name}</h3>
                <p className="text-slate-500 text-justify">{description}</p>
                <p className="text-black text-justify font-bold text-lg my-5">Supplier Name: {supplier}</p>
                <p className="text-black text-justify font-bold text-lg my-5">Quantity: {quantity}pcs</p>
                <p className="text-black text-justify font-bold text-lg my-5">Price:  ${price}</p>

                <button onClick={() => navigateToManage(_id)} className="hover:bg-green-600 bg-green-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                    Manage Item
                </button>

            </div>
        </div>
    );
};

export default DisplayInventoryItem;