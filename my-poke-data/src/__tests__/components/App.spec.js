import React from 'react'
import { render, shallow } from 'enzyme'
import App from '../../App'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('App.js', () => {
    it('Should render App without errors', () => {
        render(<App />)
    })

    it('Should init component with defaultValue prop on search state', () => {
        let wrapper;
        const defaultValueProperty = {};
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, 'useState')
        useStateSpy.mockImplementation((init) => [init, setState]);

        wrapper = shallow(<App defaultValue={defaultValueProperty} />)

        expect(defaultValueProperty).toEqual(wrapper.find('captures'))
        expect(defaultValueProperty).toEqual(wrapper.find('battleTeam'))
        expect(defaultValueProperty).toEqual(wrapper.find('reports'))
    })
})