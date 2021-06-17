import React from 'react'
import * as S from '../ShopItemsContainer/Styled'
import SumCheckoutItemQuantities from './SumCheckoutItemQuantities'
export default function MainCheckoutItem({element})
{
    return(
        <S.ShopItem>
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
                <div
                style={{
                    fontSize: '20px',
                    color: '#333',
                    lineHeight: '1.5'
                }}
                >
                    Suma egzemplarzy: { element.quantity }
                </div>
                <div
                style={{
                    fontSize: '20px',
                    color: '#333',
                    lineHeight: '1.5'
                }}
                > Łączny koszt egzemplarzy: {SumCheckoutItemQuantities(element)} zł
                </div>
            </div>
        </S.ShopItem>
    )
}











