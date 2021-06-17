import React, { useEffect } from 'react'
import * as S from './Styled'
import { Link } from 'react-router-dom'
import imgLogo from '../../Images/MainLogo.png'
import imgCheckout from '../../Images/CartIcon.png'
import { useDispatch, useSelector } from 'react-redux'
export default function MainHeader()
{
    const dispatch = useDispatch()
    const { MainPageFetchedData } = useSelector((state)=>state)
    const {allShopItemsQuantities} = useSelector((state)=>state)
    useEffect(()=>{
        const allShopItemsQuantities = MainPageFetchedData.map((el)=> el.quantity )
        // Make sure MainPageFetchedData was already fetched
        if( MainPageFetchedData.length !== 0 )
        {
            const reducedAllShopItemsSquantities = allShopItemsQuantities.reduce((previous, current)=>(
                previous + current
            ))
            dispatch({
                type: 'SET_ALL_SHOP_ITEMS_QUANTITIES',
                payload: reducedAllShopItemsSquantities
            })
        }
    })
    return(
        <S.MainHeader>
            <nav>
                <Link to='/'>
                    <img src={imgLogo} alt='Logo Gdańskiego Wydawnictwa Oświatowego' />
                </Link>
                <Link to='/checkout'
                style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <img src={imgCheckout} alt='Koszyk' />
                    <span>({allShopItemsQuantities})</span>
                </Link>
            </nav>
        </S.MainHeader>
    )
}














