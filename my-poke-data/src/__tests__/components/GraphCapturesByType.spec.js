import React from 'react'
import { render } from 'enzyme'
import GraphCapturesByType from '../../components/UI/GraphCapturesByType/GraphCapturesByType'
import GraphCapturesByTypeSkeleton from '../../components/UI/GraphCapturesByType/GraphCapturesByTypeSkeleton'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('GraphCapturesByType.js', () => {
    it('Should render App without errors', () => {
        const reports = {
            "dragon": 3,
            "ghost": 3,
            "psychic": 8,
            "grass": 8,
            "fire": 4,
            "normal": 14,
            "bug": 8,
            "water": 12,
            "dark": 6,
            "ground": 6,
            "steel": 4,
            "fairy": 2,
            "fighting": 6,
            "electric": 6,
            "poison": 6,
            "ice": 3,
            "rock": 2
        }
        render(<GraphCapturesByType reports={reports} />)
    })
    it('Should render App without errors [GraphCapturesByTypeSkeleton]', () => {
        render(<GraphCapturesByTypeSkeleton />)
    })
})