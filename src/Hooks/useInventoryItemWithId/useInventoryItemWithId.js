import { useEffect, useState } from "react";

const useInventoryItemWithId = id => {
    const [item, setItem] = useState([]);


    useEffect(() => {
        const url = `http://localhost:5000/invenrotyitems/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item])


    return [item, setItem];
}


export default useInventoryItemWithId;