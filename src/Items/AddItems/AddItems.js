import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItems = () => {
    const {
        register,
        handleSubmit,
    } = useForm();

    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    const onSubmit = data => {
        fetch('https://motor-bike-ware-house-inventory-management-server-7y42lzg6m.vercel.app/invenrotyitems', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result?.insertedId) {
                    toast("You have successfully added an Item.");
                    navigate(`/inventory`)

                }
            })
    }

    return (
        <div>
            <h2 className="text-green-600  font-bold text-5xl my-10 text-center">Add New Item Here</h2>
            <form className="gap-2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col md:mx-32 mx-4 border-2 shadow-green-50" onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 border-2 shadow-green-50 p-2' placeholder="Added By" value={user.email} {...register("email")} />
                <input className='mb-2 border-2 shadow-green-50 p-2' placeholder="Name" {...register("name")} />
                <textarea className='mb-2 border-2 shadow-green-50 p-2' placeholder="Description" {...register("description")} />
                <input className='mb-2 border-2 shadow-green-50 p-2' placeholder="Suplier Name" type="text" {...register("supplier")} />
                <input className='mb-2 border-2 shadow-green-50 p-2' placeholder="Photo URL" type="text" {...register("img")} />
                <input className='mb-2 border-2 shadow-green-50 p-2' placeholder="Price" type="number" {...register("price")} />
                <input className='mb-4 border-2 shadow-green-50 p-2' placeholder="Quantity" type="number" {...register("quantity")} />

                <input className="bg-green-800 hover:bg-green-700 text-white font-bold py-3 px-4 w-full p-5 rounded focus:outline-none focus:shadow-outline " type="submit" value="Add Item" />
            </form>

        </div>
    );
};

export default AddItems;