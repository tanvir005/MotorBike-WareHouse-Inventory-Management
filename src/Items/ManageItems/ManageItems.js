import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventoryItemWithId from '../../Hooks/useInventoryItemWithId/useInventoryItemWithId';

const ManageItems = () => {
    const { id } = useParams();
    const [item, setItem] = useInventoryItemWithId(id);

    // for out of Stock 
    const [outStock, setOutStock] = useState(false);

    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = data => {
        const preQ = item.quantity;
        const newQuantity = parseInt(preQ) + parseInt(data.quantity);
        const newItem = { newQuantity };



        // //send data to server
        const url = `https://motor-bike-ware-house-inventory-management-server-7y42lzg6m.vercel.app/invenrotyitems/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                toast('Updeted Successfully.')
            })
    }


    const handleDelibered = () => {
        const newQuantity = item.quantity - 1;
        const UpdateProduct = { newQuantity };
        if (parseInt(newQuantity) <= 0) {
            setOutStock(true);
            console.log(outStock);
        }

        //send data to server
        const url = `https://motor-bike-ware-house-inventory-management-server-7y42lzg6m.vercel.app/invenrotyitems/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateProduct)
        })
            .then(res => res.json())
            .then(data => {
                item.quantity = newQuantity;
                setItem(item);
                toast('Delivered Successfully.')
            })

    }




    return (
        <div>
            <h2 className="text-green-600  font-bold text-5xl my-2 text-center">Manage Item Here</h2>
            <div className="border-2 shadow-green-50 rounded-2xl p-5 flex flex-col items-center">
                <div className="md:flex gap-10  mb-28">
                    <div className="md:w-1/2 p-10 border-2 shadow-green-50 rounded-2xl order-1 mb-5">
                        <img className="mx-auto hover:rotate-2" src={item?.img} alt="" />
                        <h3 className="text-2xl font-bold text-left ">{item?.name}</h3>
                        <p className="text-black text-justify">{item?.description}</p>
                        <p className="text-black text-justify font-bold text-lg my-5">Supplier Name: {item?.supplier}</p>
                        <p className="text-black text-justify font-bold text-lg my-5">Price:  ${item?.price}</p>
                        <p className="text-black text-justify font-bold text-lg my-5">Quantity: {item?.quantity}pcs</p>
                        {
                            outStock ?
                                <button disabled className="bg-red-800 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                                    Out of Stock
                                </button>
                                :

                                <button onClick={handleDelibered} className=" bg-green-800 hover:bg-green-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                                    Delivered
                                </button>
                        }

                    </div>
                    <div className="md:w-1/2 border-2 md:p-10 shadow-green-50 rounded-2xl order-2">
                        <h2 className="text-green-600  font-bold text-5xl my-8 text-center">Update the item Here</h2>
                        <form className="gap-2 bg-white shadow-md rounded md:px-4 pt-2 pb-4 flex flex-col mx-2 md:mx-32 border-2 shadow-green-50" onSubmit={handleSubmit(onSubmit)}>
                            <input className='mb-2 border-2  shadow-green-50 p-2' value={item.name} placeholder="Name" {...register("name")} />
                            <textarea className='mb-2 border-2  shadow-green-50 p-2' value={item.description} placeholder="Description" {...register("description")} />
                            <input className='mb-2 border-2  shadow-green-50 p-2' value={item.supplier} placeholder="Suplier Name" type="text"  {...register("suplier")} />
                            <input className='mb-2 border-2  shadow-green-50 p-2' value={item.img} placeholder="Photo URL" type="text" {...register("img")} />
                            <input className='mb-2 border-2  shadow-green-50 p-2' value={item.price} placeholder="Price" type="number" {...register("price")} />
                            <input className='mb-4 border-2  shadow-green-50 p-2' placeholder="Quantity" type="number"   {...register("quantity")} />

                            <input className="bg-green-800 hover:bg-green-700 text-white font-bold py-4 px-4 w-full p-2 rounded focus:outline-none focus:shadow-outline " type="submit" value="Update Item" />
                        </form>
                    </div>
                </div>
                <Link className="bg-green-500 hover:bg-green-700 text-white font-bold text-center py-4 px-4 w-full p-2 my-8 rounded focus:outline-none focus:shadow-outline"
                    to="/manageinventory">
                    Manage Inventory
                </Link>
            </div>

        </div>
    );
};

export default ManageItems;