import { useEffect, useState } from "react";

const useInventoryItem = () => {
    const [item, setItem] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/invenrotyitems')
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);

    return [item, setItem];
}


export default useInventoryItem;