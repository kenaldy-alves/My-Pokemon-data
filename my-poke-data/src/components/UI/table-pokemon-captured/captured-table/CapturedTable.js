import { useEffect, useState } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Container, TableCellGeneric, TableCellTypePokemon } from './captured-table-styles'

import Pagination from '@material-ui/lab/Pagination';

const interval = 10;

const CapturedTable = ({ initList, handleClickRow }) => {
    const headers = ['ID Pokémon', 'Tipo', 'Região']
    const [listPokemons, setListPokemons] = useState(initList.slice(0, 10))

    useEffect(() => {
        const updateListPokemon = () => setListPokemons(initList.slice(0, 10))
        updateListPokemon()
    }, [initList])

    const handleChange = (event, value) => {

        //Calcula o número de itens na primeira página da tabela
        if (value === 1) {
            //verifica se a quantidade de itens e menor que o intervalo
            if (initList.length < interval) {
                const remainder = initList.length % 10 //calcula o resto da divisão
                setListPokemons(initList.slice(0, remainder))
                return
            }
            setListPokemons(initList.slice(0, 10))
            return
        }

        //Calcula o número de itens na ultima página da tabela
        const roof = Math.ceil(initList.length / 10)
        if (value >= roof) {
            const remainder = initList.length % 10
            remainder > 0 ? setListPokemons(initList.slice(initList.length - remainder, initList.length)) : setListPokemons(initList.slice(initList.length - 10, initList.length))
            return
        }

        //Calcula o número de itens da tabela
        const endIndex = value * 10  //calcula o valor final baseado na página atual
        const startIndex = endIndex - (interval) //calcula o primeiro indice baseado na diferença do ultimo indece com o intervalo
        setListPokemons(initList.slice(startIndex, endIndex))
    };


    return <Container>
        <Table stickyHeader size='small' style={{ height: 400, marginBottom: '1em' }}>
            <TableHead>
                <TableRow>
                    {headers.map((header) => (
                        <TableCell key={header}>{header}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody >
                {
                    listPokemons.map((row, id) => (
                        <TableRow style={{ cursor: 'pointer' }} hover={true} onClick={() => handleClickRow(row.pokemonId)} key={id}>
                            <TableCell>{row.pokemonId}</TableCell>
                            <TableCellTypePokemon defaultValue={row.type}>{row.type}</TableCellTypePokemon>
                            <TableCell>{row.region}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
        <Pagination count={Math.ceil(initList.length / 10)}
            defaultPage={1}
            showFirstButton
            showLastButton
            color="primary"
            onChange={handleChange}
            size="small"
        />
    </Container>
}

export default CapturedTable;