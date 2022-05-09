import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventoryItem from '../../Hooks/useInventoryItem/useInventoryItem';

const ManageInventory = () => {
    const [items, setItems] = useInventoryItem();

    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const url = "http://localhost:5000/product/${id}";
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    const remaining = items.filter(product => product._id !== id);
                    setItems(remaining);



                })
        }

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
                                <td className="text-left whitespace-nowrap">
                                    <button onClick={() => handleDelete(product._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <div className="my-4">
                <Link className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-8 w-full rounded focus:outline-none focus:shadow-outline mx-auto"
                    to="/additem">
                    ADD Item
                </Link>
            </div>

        </div>
    );
};

export default ManageInventory;

