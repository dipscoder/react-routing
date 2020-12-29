import React,{ useState, useEffect } from 'react'

function Shop() {
    
    useEffect(() => {
        fetchItems()
    }, [])
    
    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const fetchedData = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get')
        const fetchedItems = await fetchedData.json()
        console.log(fetchedItems.data);
        setItems(fetchedItems.data)

    }

    return (
        <div>
            {items.slice(0,10).map((item) => (
                <h1>{item.item.name}</h1>
            ))}
        </div>
    )
}

export default Shop
