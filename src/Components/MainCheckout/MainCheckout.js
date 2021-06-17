import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import * as S from './Styled'
import MainCheckoutItem from './MainCheckoutItem'
import TotalCost from './TotalCost'

export default function MainCheckout()
{
    const { MainPageFetchedData } = useSelector( (state) => state )
    const selectedShopItems = MainPageFetchedData.filter((state)=> state.quantity !== 0 )

    return(
        <>
        {
            selectedShopItems.length !== 0 && (
                <S.MainCheckout>
                        {
                            selectedShopItems.map((el, index)=>(
                                <MainCheckoutItem element={el} key={index} />
                            ))
                        }
                        <TotalCost/>
                        <Link to='/checkout/form'
                        style={{textDecoration: 'none'}}
                        >
                            
                            <S.NextButton>DALEJ</S.NextButton>
                        </Link>
                    </S.MainCheckout>
            )
        }
                    
                
            {
                selectedShopItems.length === 0 && (
                    <S.MainCheckout>
                        Twój koszyk jest pusty
                    </S.MainCheckout>
                )
            }
        </>
    )
}












