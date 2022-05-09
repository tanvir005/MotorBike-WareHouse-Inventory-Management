import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import useInventoryItemWithId from '../../Hooks/useInventoryItemWithId/useInventoryItemWithId';

const ManageItems = () => {
    const { id } = useParams();
    const [item, setItem] = useInventoryItemWithId(id);

    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = data => {

    }


    const handleDelibered = () => {

        const newQ = item.quantity - 1;
        const UpdateProduct = { newQ };

        //send data to server
        const url = `http://localhost:5000/invenrotyitems/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateProduct)
        })
            .then(res => res.json())
            .then(data => {
                item.quantity = newQ;
                setItem(item);
                toast('Delivered Successfully.')
            })
    }

    const handleSupplierName = event => {
        console.log(event.target.value);
        const { supplier, ...rest } = item;
        const newSupplier = event.target.value;

        const newItem = { supplier: newSupplier, ...rest };
        setItem(newItem);
    }

    const handleQuant = event => {
        const { quantity, ...rest } = item;
        const newQuant = event.target.value;
        console.log(newQuant);
        const newItem = { quantity: newQuant, ...rest };
        console.log(newItem);
        setItem(newItem);
    }

    return (
        <div>
            <h2 className="text-green-600  font-bold text-5xl my-10 text-center">Add nwe Item Here</h2>
            <div className="md:flex gap-10 m-10 p-5 border-2 shadow-green-50 rounded-2xl">

                <div className="md:w-1/2 p-10 border-2 shadow-green-50 rounded-2xl order-1 mb-5">
                    <img className="mx-auto hover:rotate-2" src={item?.img} alt="" />
                    <h3 className="text-2xl font-bold text-left ">{item?.name}</h3>
                    <p className="text-black text-justify">{item?.description}</p>
                    <p className="text-black text-justify font-bold text-lg my-5">Quantity: {item?.quantity}pcs</p>
                    <p className="text-black text-justify font-bold text-lg my-5">Price:  ${item?.price}</p>
                    <button onClick={handleDelibered} className=" bg-green-800 hover:bg-green-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                        Delivered
                    </button>

                </div>
                <div className="md:w-1/2 border-2 md:p-10 shadow-green-50 rounded-2xl order-2">
                    <h2 className="text-green-600  font-bold text-5xl my-10 text-center">Update the item Here</h2>
                    <form className="gap-2 bg-white shadow-md rounded md:px-4 pt-2 pb-8 mb-4 flex flex-col mx-2 md:mx-32 border-2 shadow-green-50" onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-2 border-2  shadow-green-50 p-2' value={item.name} placeholder="Name" {...register("name")} />
                        <textarea className='mb-2 border-2  shadow-green-50 p-2' value={item.description} placeholder="Description" {...register("description")} />
                        <input onChange={handleSupplierName} className='mb-2 border-2  shadow-green-50 p-2' value={item.supplier} placeholder="Suplier Name" type="text"  {...register("suplier")} />
                        <input className='mb-2 border-2  shadow-green-50 p-2' value={item.img} placeholder="Photo URL" type="text" {...register("img")} />
                        <input className='mb-2 border-2  shadow-green-50 p-2' value={item.price} placeholder="Price" type="number" {...register("price")} />
                        <input className='mb-4 border-2  shadow-green-50 p-2' placeholder="Quantity" type="number" onChange={handleQuant}  {...register("quantity")} />

                        <input className="bg-green-800 hover:bg-green-700 text-white font-bold py-5 px-4 w-full p-2 rounded focus:outline-none focus:shadow-outline " type="submit" value="Update Item" />
                    </form>


                </div>

            </div>
        </div>
    );
};

export default ManageItems;