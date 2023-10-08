import { useEffect, useState } from "react";

const useInventoryItem = () => {
    const [item, setItem] = useState([]);


    useEffect(() => {
        fetch('https://motor-bike-ware-house-inventory-management-server-7y42lzg6m.vercel.app/invenrotyitems')
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);

    return [item, setItem];
}


export default useInventoryItem;