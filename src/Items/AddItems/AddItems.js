import React from 'react';
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const AddItems = () => {
    const {
        register,
        handleSubmit,
    } = useForm();


    const navigate = useNavigate();
    const onSubmit = data => {
        fetch('http://localhost:5000/invenrotyitems', {
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
            <h2 className="text-slate-600  font-bold text-5xl my-10 text-center">Add nwe Item Here</h2>
            <form className="gap-5 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col mx-32 border-2 shadow-slate-50" onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 border-2 shadow-slate-50 p-5' placeholder="Name" {...register("name")} />
                <textarea className='mb-2 border-2 shadow-slate-50 p-5' placeholder="Description" {...register("description")} />
                <input className='mb-2 border-2 shadow-slate-50 p-5' placeholder="Suplier Name" type="text" {...register("suplier")} />
                <input className='mb-2 border-2 shadow-slate-50 p-5' placeholder="Photo URL" type="text" {...register("img")} />
                <input className='mb-2 border-2 shadow-slate-50 p-5' placeholder="Price" type="number" {...register("price")} />
                <input className='mb-4 border-2 shadow-slate-50 p-5' placeholder="Quantity" type="number" {...register("quantity")} />

                <input className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-5 px-4 w-full p-5 rounded focus:outline-none focus:shadow-outline " type="submit" value="Add Service" />
            </form>

        </div>
    );
};

export default AddItems;