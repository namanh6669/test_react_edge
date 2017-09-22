
import React from 'react';
// eslint-disable-next-line
import MyTabs from './MyTabs.js'
import MyTables from './MyTables.js'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
function handleTouchTap() {
    alert('Back To Homepage !!!');
}

const styles = {
    title: {
        cursor: 'pointer',

    },
    appbar: {
        float: 'right',
        width: '40%',

    },
    appbar1: {
        float: 'left',
        width: '100%',
    },
    appbar2: {
        float: 'right',
    },

};


class MyWebComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Decrease',
        };
    }
    callbackTypeSort(value) {
       this.setState({
           value: value
       }) 
    }

    render() {
        console.log(this.state.value)
        return (
            <div>
                <AppBar
                    title={<span style={styles.title}>S&P/ASX</span>}
                    onTitleTouchTap={handleTouchTap}
                    showMenuIconButton={false}>
                    <MyTabs callbackTypeSort={(value)=>this.callbackTypeSort(value)}></MyTabs>
                </AppBar>
                <div>
                    <MyTables Type = {this.state.value}></MyTables>
                </div>
            </div>
        )
    }
 
}
export default MyWebComponent;
