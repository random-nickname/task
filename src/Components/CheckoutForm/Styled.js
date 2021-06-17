import styled from 'styled-components'
import MaxWidth from '../../GlobalStyles/MaxWidth'

const CheckoutFormMobile = 450;

export const CheckoutForm = styled.form`
width: 100%;
${MaxWidth}
>div
{
    display: flex;
    @media(max-width: ${CheckoutFormMobile}px)
    {
        flex-direction: column;
    }
    width: 100%;
}
`

export const CheckoutFormSection = styled.section`
/* border: 1px solid red; */
width: 100%;
>label
{
    display: block;
    font-weight: 600;
    font-size: 13px;
    margin: 5px 10px;
}
>input
{
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    padding: 5px;
    margin: 10px;
    transition: all 300ms ease-in-out;
    &:focus
    {
        border: 1px solid #ccc;
    }
    width: calc(100% - 35px);
}
`

export const ErrorList = styled.ul`
color: red;
margin-top: 5px;
margin-left: 30px;
list-style-type: disc;
`

export const SubmitInput = styled.input`
border: 0;
background-color: #EC5800;
filter: brightness(120%);
padding: 10px;
background-color: #EC5800;
filter: brightness(120%);
color: white;
margin: 0 auto;
display: block;
cursor: pointer;
margin-top: 50px;
&:hover
{
    filter: brightness(100%);
}
`

export const CheckoutFormInfoMessage = styled.div`
text-align: center;
display: block;
max-width: 700px;
margin: 20px auto;
line-height: 1.3;
font-size: 18px;
color: #333;
`
