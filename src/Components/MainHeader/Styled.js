import styled from 'styled-components'
import GlobalStyleMaxWidth from '.././../GlobalStyles/MaxWidth'

export const MainHeader = styled.header`
>nav
{
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${GlobalStyleMaxWidth}
    >a
    {
        &:nth-child(2)
        {
            /* background-color: red; */
            color: black;
            text-decoration: none;
            padding: 5px;
            transition: all 100ms ease-in-out;
            >span
            {
                padding: 5px;
            }
            &:hover
            {
                color: #EC5800;
            }
        }
    }
}

`










