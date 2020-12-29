import React,{ useState, useEffect } from 'react'
import { Link } from "react-router-dom";
function Shop() {
    
    useEffect(() => {
        fetchItems()
    }, [])
    
    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const fetchedData = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get')
        const fetchedItems = await fetchedData.json()
        // console.log(fetchedItems.data);
        setItems(fetchedItems.data)

    }

    return (
        <div>
            {items.slice(0,10).map((item) => (
                <h1 key={item.itemId}>
                    <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
                </h1>
            ))}
        </div>
    )
}

export default Shop
