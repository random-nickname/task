import React from 'react'
import { useDispatch } from 'react-redux'
import * as S from './Styled'
import AddItemButton from '../../Images/AddItemButton.png'

export default function ChangeQuantityButton({element, action})
{
    const dispatch = useDispatch()
    return(
        <>
            {
                action === 'ADD' && (
                <S.AddButton
                onClick={()=>{
                    dispatch({
                    type: 'MAIN_PAGE_FETCHED_ADD',
                    payload: element
                    })
                }}
                >
                    Dodaj do koszyka
                    <img src={AddItemButton} alt='Koszyk' />
                </S.AddButton>
                )
            }
            {
                action === 'REMOVE' && (
                <S.AddButton
                onClick={()=>{
                    dispatch({
                    type: 'MAIN_PAGE_FETCHED_REMOVE',
                    payload: element
                    })
                }}
                style={{marginTop:'1px'}}
                >
                    Usuń z koszyka
                    <img src={AddItemButton} alt='Koszyk' />
                </S.AddButton>
                )
            }
        </>
        
    )
}