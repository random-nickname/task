import React from 'react'
import * as S from '../ShopItemsContainer/Styled'
import { useSelector } from 'react-redux'
import NumberWithComma from '../../ReusableComponents/NumberWithComma'

export default function TotalCost()
{
    const { MainPageFetchedData } = useSelector((state)=>state)
    const selectedShopItems = MainPageFetchedData.filter((state)=> state.quantity !== 0 )
    const arrayOfQuantities = []
    selectedShopItems.forEach(element => {
        arrayOfQuantities.push( element.price * element.quantity )
    });
    const SumOfAllQuantities = arrayOfQuantities.reduce((previous, current)=>(
        previous + current
    ))  
    

    return(
        <div style={{textAlign: 'center'}} >
            <S.ItemPrice style={{fontSize: '20px'}} >
                Łączny koszt wszystkich egzemplarzy: { NumberWithComma(SumOfAllQuantities) } zł
            </S.ItemPrice>
        </div>
        
    )
}






