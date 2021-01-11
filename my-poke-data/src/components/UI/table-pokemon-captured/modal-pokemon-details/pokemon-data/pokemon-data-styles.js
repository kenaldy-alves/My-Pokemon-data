import styled from 'styled-components'
import { palleteTypeColors } from '../../../../services/palleteTypeColors';

export const Div = styled.section`
    margin-top: 1em;

    h4{
        fontWeight: lighter;
        margin-bottom: 0.5em;
    }
`
export const TextH5 = styled.h5`
    font-weight: lighter;
    margin-bottom: 0.5em;
    padding-left: 0.5em;
`
export const H5 = styled.h5`
    font-weight: bold;
    margin-left: 0.5em;
    margin-bottom: 0.5em;
    padding: 0.3em;
    color: white;
    
    ${({ defaultValue }) => `background-color: ${palleteTypeColors.[defaultValue]}`}
`