import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {

        const email = user?.email;
        const url = `https://motor-bike-ware-house-inventory-management-server-3so944qfo.vercel.app//invenrotyitemsQ?email=${email}`;
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setItems(data))

    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const url = `https://motor-bike-ware-house-inventory-management-server-3so944qfo.vercel.app//invenrotyitems/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter(product => product._id !== id);
                    setItems(remaining);
                    toast("Deleted Successfully.");
                })
        }

    }
    const navigate = useNavigate();

    const navigateToManage = id => {
        navigate(`/inventory/${id}`)
    }



    return (
        <div className="w-8/12 mx-auto flex flex-col items-center mb-24">
            <h1 className="text-4xl font-bold my-20 text-center" style={{ color: '#69bd27' }}>Manage My Items</h1>

            <Table Table striped bordered hover>
                <thead>
                    <tr className="text-center md:whitespace-nowrap">
                        <th>Name</th>
                        <th>Supplier Name</th>
                        <th>Price</th>
                        <th>Quantity Available</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(product =>
                            <tr key={product._id} >
                                <td className="text-left md:whitespace-nowrap ">{product.name}</td>
                                <td className="text-left md:whitespace-nowrap ">{product.supplier}</td>
                                <td className="text-left md:whitespace-nowrap ">{product.price}</td>
                                <td className="text-left md:whitespace-nowrap ">{product.quantity}</td>
                                <td className="md:whitespace-nowrap">
                                    <PencilIcon onClick={() => navigateToManage(product._id)} className="text-green-700 w-7 h-7  text-center cursor-pointer"></PencilIcon>
                                </td>
                                <td className="md:whitespace-nowrap">
                                    <TrashIcon onClick={() => handleDelete(product._id)} className="text-red-700 w-7 h-7  text-center cursor-pointer"></TrashIcon>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default MyItems;