import React, { useEffect, useState } from 'react';
import DisplayInventoryItem from '../DisplayInventoryItem/DisplayInventoryItem';

const InventoryItems = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/invenrotyitems')
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);
    return (
        <div>

            <h1 className="text-3xl font-bold text-blue-900 mt-20 text-center">Total {item.length} srvices available</h1>
            <div className="grid md:grid-cols-3">


                {
                    item.map(item => <DisplayInventoryItem
                        key={item._id}
                        item={item}
                    ></DisplayInventoryItem>)
                }

            </div>
        </div>
    );
};

export default InventoryItems;