import React, { useEffect, useState } from 'react';
import useInventoryItem from '../../Hooks/useInventoryItem/useInventoryItem';
import DisplayInventoryItem from '../DisplayInventoryItem/DisplayInventoryItem';

const InventoryItems = () => {
    const [item, setItem] = useInventoryItem();
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