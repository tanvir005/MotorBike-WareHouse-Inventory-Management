import { useEffect, useState } from "react";

const useInventoryItemWithId = id => {
    const [item, setItem] = useState([]);


    useEffect(() => {
        const url = `https://motor-bike-ware-house-inventory-management-server-3so944qfo.vercel.app/invenrotyitems/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item])


    return [item, setItem];
}


export default useInventoryItemWithId;