import { useState } from 'react';

import PokemonDetails from './modal-pokemon-details/PokemonDetails';
import MyModal from '../../globals/globals-components/MyModal';
import FilterBar from './filter-bar/FilterBar';
import { Div, Header } from '../../globals/globals-styles/globals-styles';
import CapturedTable from './captured-table/CapturedTable'


const PokemonCaptures = ({ captures }) => {
    const [pokemonId, setPokemonId] = useState(0)
    const [initList, setInitList] = useState(captures)
    const [open, setOpen] = useState(false)

    //FUNÇÃO QUE CONTROLA O MODAL
    const handleClickRow = (id) => {
        setPokemonId(id)
        setOpen(true)
    }

    //Atualiza o estado da lista
    const handleListPokemons = (list) => setInitList(list)

    return <Div>
        <Header>
            <h4>Pokémons Capturados</h4>
        </Header>
        <FilterBar handleListPokemons={handleListPokemons}></FilterBar>
        <CapturedTable initList={initList} handleClickRow={handleClickRow}></CapturedTable>
        {/*Renderiza o modal só quando ele for aberto*/}
        {open && 
            <MyModal open={open} title={'Detalhes'} handleModal={() => setOpen(false)} >
                <PokemonDetails pokemonId={pokemonId} ></PokemonDetails>
            </MyModal>
        }
    </Div>
}

export default PokemonCaptures;