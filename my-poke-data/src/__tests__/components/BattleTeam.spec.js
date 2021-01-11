import React from 'react'
import { render, shallow } from 'enzyme'
import BattleTeam from '../../components/UI/battle-team/BattleTeam'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('BattleTeam.js', () => {
    it('Should render App without errors', () => {
        render(<BattleTeam />)
    })
})