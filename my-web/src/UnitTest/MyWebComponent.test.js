import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import MyWebComponent from '../Components/MyWebComponent'

test('Render MyWebComponent',()=>{
    const componets = shallow(<MyWebComponent/>);
    expect(toJson(componets)).toMatchSnapshot();
})