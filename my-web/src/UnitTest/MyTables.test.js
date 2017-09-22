import React from 'react'
import { shallow } from 'enzyme'
import MyTables from '../Components/MyTables'


const tblData = shallow(<MyTables/>);

test('GetData API', (done) => {
    window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    setTimeout(() => {
        expect(tblData.state('havedata')).toEqual(true);
        done();
    }, 5000);
});