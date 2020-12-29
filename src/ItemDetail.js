import React,{ useState, useEffect } from 'react'

function ItemDetail({ match }) {
    // We have to define empty objects/arrays before using them 
    const [item, setItem] = useState({
        item : {
            images : {}
        }
    })
    // console.log("Details coming from Link and Route",match);
    useEffect(() => {
        fetchItem()
    }, [])

    const fetchItem = async () =>  {
        const fetchItemData = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)
        const itemData = await fetchItemData.json()
        console.log(itemData.data);
        setItem(itemData.data)
    }

    return (
        <div>
            <h1>{item.item.name}</h1>
            <img src={item.item.images.icon} alt={item.item.name} />
        </div>
    )
}

export default ItemDetail
