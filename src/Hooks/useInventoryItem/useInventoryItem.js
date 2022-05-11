import { useEffect, useState } from "react";

const useInventoryItem = () => {
    const [item, setItem] = useState([]);


    useEffect(() => {
        fetch('https://enigmatic-chamber-62078.herokuapp.com/invenrotyitems')
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);

    return [item, setItem];
}


export default useInventoryItem;