import React from 'react'
import { useSelector } from 'react-redux'
import * as S from './Styled'
import ChangeQuantityButton from './ChangeQuantityButton'
import NumberWithComma from '../../ReusableComponents/NumberWithComma'

export default function ShopItemsContainer()
{
    const MainPageFetchedData = useSelector( (state)=>state.MainPageFetchedData )
    return(
        <article>
            {
                MainPageFetchedData.map((element, index)=>(
                    <S.ShopItem key={index} >
                        <div>
                            <img src={element.cover_url} alt={element.title} />
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Tytuł: </td>
                                <td>{element.title}</td>
                                </tr>
                                <tr>
                                    <td>Autor: </td>
                                    <td>{element.author}</td>
                                </tr>
                                <tr>
                                    <td>Liczba stron: </td>
                                    <td>{ element.pages } </td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <S.ItemPrice>{ NumberWithComma(element.price) } zł </S.ItemPrice>
                            <ChangeQuantityButton element={element} action='ADD' />
                            <ChangeQuantityButton element={element} action='REMOVE' />
                            <div
                            style={{
                                fontSize: '20px',
                                color: '#333',
                                lineHeight: '1.5',
                                textAlign: 'center',
                                padding: '10px'
                            }}
                            >
                                Suma: { element.quantity }
                            </div>
                            
                        </div>
                    </S.ShopItem>
                ))
            }
        </article>
    )
}








