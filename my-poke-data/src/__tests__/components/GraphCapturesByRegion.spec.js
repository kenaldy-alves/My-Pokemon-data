import React from 'react'
import { render } from 'enzyme'
import GraphCapturesByRegion from '../../components/UI/GraphCapturesByRegion/GraphCapturesByRegion'
import GraphCapturesByRegionSkeleton from '../../components/UI/GraphCapturesByRegion/GraphCapturesByRegionSkeleton'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('GraphCapturesByRegion.js', () => {
    it('Should render App without errors', () => {
        const reports = {
            "sinnoh": 55,
            "hoenn": 4,
            "unova": 35,
            "kalos": 6,
            "kanto": 1
        }
        render(<GraphCapturesByRegion reports={reports} />)
    })
    it('Should render App without errors [GraphCapturesByRegionSkeleton]', () => {
        render(<GraphCapturesByRegionSkeleton />)
    })
})