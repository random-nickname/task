import styled from 'styled-components'
const ShopItemsMobile = 700

export const ShopItem = styled.section`
display: flex;

padding: 20px;
@media(max-width: ${ShopItemsMobile}px)
{
    flex-direction: column;
    border-bottom: 1px solid #ccc;
    margin: 0px 10px;
    padding: 20px 5px;
}
>div
{
    &:first-child
    {
        img
        {
            width: 100px;
            height: 100%;
        }
        margin-left: 0;
        @media(max-width: ${ShopItemsMobile}px)
        {
            margin: 0 auto;
        }
    }
    &:nth-child(3)
    {
        margin-left: auto;
        display: flex;
        flex-direction: column;
        border-left: 1px solid #ccc;
        padding-left: 40px;
        justify-content: center;
        @media(max-width: ${ShopItemsMobile}px)
        {
            margin: 0 auto;
            text-align: center;
            border-left: 0px;
            padding-left: 0px;
            align-items: center;
            justify-content: center;
        }
    }
}
>table
{
    margin-left: 20px;
    height: 0;
    margin-top: 20px;
    @media(max-width: ${ShopItemsMobile}px)
    {
        margin: 0 auto;
    }
    tr
    {
        td
        {
            line-height: 1.5;
            &:first-child
            {
                color: #666;
            }
            &:nth-child(2)
            {
                color: rgb(51, 51, 51);
                padding-left: 15px;
            }
        }
    }
}
`

export const ItemPrice = styled.div`
line-height: 1.5;
font-size: 30px;
color: #333;
`

export const AddButton = styled.button`
cursor: pointer;
background-color: #D34E00;
color: white;
border: 0;
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
filter: brightness(120%);
transition: all 100ms ease-in-out;
&:hover
{
    filter: brightness(110%);
}
`




