import styled from 'styled-components'
import GlobalStyleMaxWidth from '.././../GlobalStyles/MaxWidth'

export const MainCheckout = styled.article`
${ GlobalStyleMaxWidth }
`

export const MainCheckoutItem = styled.section`
`

export const NextButton = styled.button`
cursor: pointer;
border: 0;
background-color: #E85600;
filter: brightness(120%);
color: white;
padding: 10px;
display: block;
margin: 20px auto;
transition: all 300ms ease-in-out;
text-decoration: none;
&:hover
{
    filter: brightness(100%);
}
`



