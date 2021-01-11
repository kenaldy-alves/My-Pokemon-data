import React from 'react'
import { render, shallow } from 'enzyme'
import CapturedTable from '../../components/UI/table-pokemon-captured/captured-table/CapturedTable'
import FilterBar from '../../components/UI/table-pokemon-captured/filter-bar/FilterBar'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing components inside PokemonCaptures.js', () => {

    it('Should render App without errors [FilterBar]', () => {
        render(<FilterBar handleListPokemons={() => { }} />)
    })

    it('Should render App without errors [CapturedTable]', () => {
        const initList = [
            {
                "pokemonId": 444,
                "type": "dragon",
                "region": "sinnoh"
            },
            {
                "pokemonId": 353,
                "type": "ghost",
                "region": "hoenn"
            },
        ]
        render(<CapturedTable initList={initList} handleClickRow={() => { }} />)
    })
})