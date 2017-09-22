import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MyTabs from '../Components/MyTabs'

const mytabs = shallow(<MyTabs/>);

test('Render MyTabs',()=>{
    expect(toJson(mytabs)).toMatchSnapshot();
})
test('Top Losers Tab', () => {
    const tabLose = mytabs.find('.lose');
    tabLose.simulate('active');
    expect(mytabs.state().sortType).toEqual('lose')
});  
test('Top Gainner Tab', () => {
    const tabLose = mytabs.find('.gain');
    tabLose.simulate('active');
    expect(mytabs.state().sortType).toEqual('gain')
});