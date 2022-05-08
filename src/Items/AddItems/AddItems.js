import React from 'react';
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit } = useForm();

    return (
        <div>
            <form className='d-flex flex-column' onSubmit={""}>
                <input className='mb-2' placeholder="Name" {...register("name")} />
                <textarea className='mb-2' placeholder="Description" {...register("description")} />
                <input className='mb-2' placeholder="Price" type="number" {...register("price")} />
                <input className='mb-2' placeholder="Photo URL" type="text" {...register("img")} />
                <input className='mb-2' type="submit" value="Add Service" />
            </form>

        </div>
    );
};

export default AddItems;