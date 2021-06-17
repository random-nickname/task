import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MAIN_PAGE_FETCHED_DATA } from '../../Redux/MainPageFetchedData'
import * as S from './Styled'
import { useDispatch, useSelector } from 'react-redux'
import ShopItemsContainer from '../ShopItemsContainer/ShopItemsContainer'
export default function MainPage()
{

    const dispatch = useDispatch()
    const {MainPageFetchedData} = useSelector((state)=>state)
    const [ fetchError, setFetchError ] = useState(true)
    useEffect(()=>{
        let fetchedShopElements;
        async function fetchData()
        {
            try
            {
                setFetchError(false)
                fetchedShopElements = await axios({
                    method: 'GET',
                    url: 'http://localhost:3001/api/book'
                })
                // Avoiding overwriting MainPageFetchedData on every MainPage mounting
                if(MainPageFetchedData.length === 0 )
                {
                    dispatch({type: MAIN_PAGE_FETCHED_DATA, payload: fetchedShopElements.data.data})
                }
                
            }
            catch
            {
                setFetchError(true)
            }
            
        }
        fetchData()
    },[])
    return(
        <S.MainPage id='MainPage' >
            {
                fetchError ? (
                    <div>Failed to fetch data</div>
                ) : (
                    <ShopItemsContainer/>
                )
            }
           
        </S.MainPage>
    )
}








