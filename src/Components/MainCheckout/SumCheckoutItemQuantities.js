import React from 'react'
import NumberWithComma from '../../ReusableComponents/NumberWithComma'

export default function SumCheckoutItemQuantities(element)
{
    const {price} = element
    const {quantity} = element
    const number = price * quantity
    return (
        <>
            {
                NumberWithComma(number)
            }
        </>
    )
} 















