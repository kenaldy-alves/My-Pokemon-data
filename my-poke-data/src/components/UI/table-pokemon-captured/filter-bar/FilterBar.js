import { useState } from "react";
import DropDownButton from "../../../globals/globals-components/DropDownButton";
import MyRadioButton from "../../../globals/globals-components/MyRadioButton";
import { getCapturesFilterByRegion } from '../../../services/getCaptures'
import { Div, H5, ButtonSearch } from './filter-bar-styles'

const FilterBar = ({ handleListPokemons }) => {
    const [radioButton, setRadioButton] = useState('radio-button1')
    const [byType, setByType] = useState(null)
    const [byRegion, setByRegion] = useState(null)

    //FUNÇÕES DE CONTROLE DOS ESTADOS
    const handleClick = (value) => value === 'radio-button1' ? setRadioButton('radio-button2') : setRadioButton('radio-button1')
    const handleByType = (value) => setByType(value)
    const handleByRegion = (value) => setByRegion(value)

    //FUNÇÃO QUE BUSCA A LISTA DE POKEMONS DE ACORDO COM OS FILTROS
    const getListFiltered = async () => {
        const pokemonsList = await getCapturesFilterByRegion(byRegion, byType, radioButton);
        handleListPokemons(pokemonsList)
    }

    return <Div>
        <H5>Filtrar por:</H5>
        <MyRadioButton
            radioButton={radioButton}
            handleClick={handleClick}
            labelText1="Crescente"
            labelText2="Decrescente"
            disabledButton1={false}
            disabledButton2={false}
        ></MyRadioButton>
        <DropDownButton items={type} title="Tipo" handleSelected={handleByType}></DropDownButton>
        <DropDownButton items={region} title="Região" handleSelected={handleByRegion}></DropDownButton>
        <ButtonSearch onClick={() => getListFiltered()}>
            <h6>Filtrar</h6>
        </ButtonSearch>
    </Div>
}

export default FilterBar;


// REGIOES PARA O DROPDOWN
const region = [
    {
        id: 'option-0',
        text: "Regiao"
    },
    {
        id: 'option-1',
        text: "sinnoh"
    },
    {
        id: 'option-2',
        text: "hoenn"
    },
    {
        id: 'option-3',
        text: "unova"
    },
    {
        id: 'option-4',
        text: "kalos"
    },
    {
        id: 'option-5',
        text: "kanto"
    }]

// TIPOS DE POKEMON PARA O DROPDOWN
const type = [
    {
        id: 'option-0',
        text: "Tipo"
    },
    {
        id: 'option-01',
        text: "dragon"
    },
    {
        id: 'option-02',
        text: "ghost"
    },
    {
        id: 'option-03',
        text: "psychic"
    },
    {
        id: 'option-04',
        text: "grass"
    },
    {
        id: 'option-05',
        text: "fire"
    },
    {
        id: 'option-06',
        text: "normal"
    },
    {
        id: 'option-07',
        text: "bug"
    },
    {
        id: 'option-08',
        text: "water"
    },
    {
        id: 'option-09',
        text: "dark"
    },
    {
        id: 'option-10',
        text: "ground"
    },
    {
        id: 'option-11',
        text: "steel"
    },
    {
        id: 'option-12',
        text: "fairy"
    },
    {
        id: 'option-13',
        text: "fighting"
    },
    {
        id: 'option-14',
        text: "electric"
    },
    {
        id: 'option-15',
        text: "poison"
    },
    {
        id: 'option-16',
        text: "ice"
    },
    {
        id: 'option-17',
        text: "rock"
    },
]
