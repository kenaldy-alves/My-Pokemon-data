import styled from 'styled-components'
import { Button } from "carbon-components-react";

export const Div = styled.div`
    display: flex;
    padding: 0.5em;
    justify-content: space-evenly;
    align-items: center;
`
export const H5 = styled.h5`
    font-weight: lighter;
    color: #333;

    
    @media screen and (max-width: 900px) {
        display: none;
    }
`
export const ButtonSearch = styled(Button)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-left: 1em;
    background-color: #5555ee;

    h6{
        text-align: center;
    };
    
    &:hover{
        background-color: #5555ee;
        opacity: .8;
    }

`