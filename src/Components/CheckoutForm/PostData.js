// import React from 'react'

export default async function PostData(element, selectedShopItems)
{
    //                           Error 422 shows when its not correct with order-schema validation
    //                      ERROR: it changed also original array - has to be used class for make objects
    // const copySelectedShopItems = [...selectedShopItems]
    // copySelectedShopItems.forEach(element => {
    //     delete element.title
    //     delete element.price
    //     delete element.pages
    //     delete element.currency
    //     delete element.cover_url
    //     delete element.author
    // });
    //
    const id          = selectedShopItems.map((el)=> el.id )
    const quantity    = selectedShopItems.map((el)=> el.quantity )
    class makeObj
    {
        constructor(id, quantity)
        {
            this.id = id
            this.quantity = quantity
            return { id: id, quantity: quantity }
        }
    }
    let elements = []
    selectedShopItems.forEach((el, index)=>{
        elements.push(
            new makeObj(id[index], quantity[index])
        )
    })
    console.log({
        order: elements,
        first_name: element.first_name,
        last_name: element.last_name,
        city: element.city,
        zip_code: element.zip_code,
    })
    await fetch('http://localhost:3001/api/order',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: 
        JSON.stringify(
            {
                order: elements
                ,
                first_name: element.first_name,
                last_name: element.last_name,
                city: element.city,
                zip_code: element.zip_code,
            }
        )
    })
}










