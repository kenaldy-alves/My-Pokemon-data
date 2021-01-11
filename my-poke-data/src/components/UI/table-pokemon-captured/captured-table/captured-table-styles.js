import styled from 'styled-components'
import TableCell from '@material-ui/core/TableCell';
import { palleteTypeColors } from '../../../services/palleteTypeColors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start 
`

export const TableCellTypePokemon = styled(TableCell)`
    ${({ defaultValue }) => `background-color: ${palleteTypeColors.[defaultValue]};`}
    
    &:hover:{
        cursor: pointer;
    }

`