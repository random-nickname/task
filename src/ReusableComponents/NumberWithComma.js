import React from 'react'


export default function NumberWithComma(prop)
{
    let number = prop / 100
    number = number.toFixed(2)
    return (
        <span>{number}</span>
    )
}