import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import useInventoryItem from '../../Hooks/useInventoryItem/useInventoryItem';
import { PencilIcon, TrashIcon, XIcon } from '@heroicons/react/solid'

const ManageInventory = () => {
    const [items, setItems] = useInventoryItem();


    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const url = `https://motor-bike-ware-house-inventory-management-server-3so944qfo.vercel.app/invenrotyitems/${id}`;
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
        <div className="w-8/12 mx-auto flex flex-col items-center">
            <h1 className="text-3xl font-bold my-20 text-center" style={{ color: '#69bd27' }}>Manage Inventory Items</h1>

            <Table Table striped bordered hover>
                <thead>
                    <tr className="text-center whitespace-nowrap">
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
                                <td className="text-left whitespace-nowrap">{product.name}</td>
                                <td className="text-left whitespace-nowrap">{product.supplier}</td>
                                <td className="text-left whitespace-nowrap">{product.price}</td>
                                <td className="text-left whitespace-nowrap">{product.quantity}</td>
                                <td className="whitespace-nowrap">
                                    <PencilIcon onClick={() => navigateToManage(product._id)} className="text-green-700 w-7 h-7  text-center cursor-pointer"></PencilIcon>
                                </td>
                                <td className="whitespace-nowrap">
                                    <TrashIcon onClick={() => handleDelete(product._id)} className="text-red-700 w-7 h-7  text-center cursor-pointer"></TrashIcon>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <Link className="bg-green-500 hover:bg-green-700 text-white font-bold text-center py-4 px-4 w-full p-2 mt-4 mb-24 rounded focus:outline-none focus:shadow-outline"
                to="/additem">
                ADD NEW ITEM
            </Link>

        </div>
    );
};

export default ManageInventory;

