import React from 'react';
import MyTables from './MyTables.js'
import { Tabs, Tab } from 'material-ui/Tabs';

const styles = {
    bar: {
        width:'30%',

    },
    headline: {

        fontSize: 14,
        paddingTop: 10,
        marginBottom: 5,
        fontWeight: 400,


    },
    inkbar: {
        height: 5,
        width: '50%',
    },

   
};

class MyTabs extends React.Component {

    constructor(props) {
        super(props);
    }
    sendValueIncrease =()=>{
        this.props.callbackTypeSort("Decrease");
    };
    sendValueDecrease =()=>{
        this.props.callbackTypeSort("Increase");
    };

    
    render() {
        return (
            <Tabs
               style ={styles.bar}
                inkBarStyle={styles.inkbar}
                
                
            >
                <Tab  className="gain" style={styles.headline} label=" Top Gainers " value="Increase"  onActive={this.sendValueIncrease}>

                </Tab>
                <Tab  className="lose" style={styles.headline} label=" Top Loser " value="Decrease" onActive={this.sendValueDecrease}>
                </Tab>
            </Tabs>
        );
    }
} export default MyTabs;