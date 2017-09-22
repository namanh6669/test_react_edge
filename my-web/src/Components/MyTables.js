import React from 'react';
import NumberFormat from 'react-number-format'
import axios from 'axios';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    // eslint-disable-next-line
    TableRowColumn,
} from 'material-ui/Table';

const styles = {
    tableCode: {
        width: '10%',
        paddingRight : 10,
    },
    tableHeader: {
        width: '10%'
    },
    table: {
        float: 'none',
    },
  
};

const tableData = [];

class MyTables extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            time: 0,
            havedata: false,
            
        };
        console.log(this.state.typeSort+"contruc");
    }

    componentDidMount() {
          setInterval(()=>this.updateData(), 5000);       
    }
    componentWillMount() {
      
        axios.get("http://127.0.0.1:4000/companyes")
            .then((response) => {
                    this.setState({
                        data: response.data,
                        havedata: true,
                    })
                })
                .catch(function (error) {
                    console.log(error);
                    console.log("Please check server and Refesh !!!");
                  })
    }
    
    updateData(){
        var list = this.state.data; 
        console.log(list);
        list.map((item,index)=>{
            var limit = item.price * 5 / 100;
            var change = (Math.random() * (limit + limit) - limit).toFixed(2);
            var change_100 = ((change / item.price) * 100).toFixed(2);
            var updateVolume = Math.random() * (30 - 10) + 10;
            var changecompareFirstDay = parseFloat(change + item.change).toFixed(2);
            item.change = changecompareFirstDay;
            item.change_100 = change_100;
            item.price = (parseFloat(item.price) + parseFloat(change)).toFixed(2);
            item.volume = (item.volume) + parseInt(updateVolume, 10);
            item.value = parseInt(item.price*item.volume);
            
      
        })
       
        this.setState({
            data: list
        })
        
     
    }
    setColorChange(change){
        var style ;
        if(change<=0){
            style = '#FF053D'
        }
        if(change>0){
            style = '#07D868'
        }
        return style;
    }
    sortData(listCompany){
        var typeSort = this.props.Type;
        console.log(typeSort+"in render");
        if(typeSort === 'Increase'){
            listCompany.sort(function(a, b){

                     return a.value - b.value
                 
             });
        } if(typeSort === 'Decrease'){
            listCompany.sort(function(a, b){

                     return b.value - a.value
                 
             });
        }
    }
    render() {

        var listCompany = this.state.data;
        listCompany.length = 20;
        this.sortData(listCompany);
        const maplist = listCompany.map((item, index) => {
            var styleColorChange = this.setColorChange(item.change);
            var styleColorChange_100 = this.setColorChange(item.change_100);
            
            return (
                <TableRow key={index}>
                    <TableRowColumn style={styles.tableHeader}><p style={{color:'#136BD6'}}>{item.code}</p></TableRowColumn>
                    <TableRowColumn><p style={{color:'#8A8A8A'}}>{item.company}</p></TableRowColumn>
                    <TableRowColumn>{item.price}</TableRowColumn>
                    <TableRowColumn style={styles.tableHeader}><NumberFormat value = {item.value} displayType = {'text'} thousandSeparator={true}></NumberFormat></TableRowColumn>
                    <TableRowColumn style={{ color: styleColorChange,  width: '10%' }}>{item.change}</TableRowColumn>
                    <TableRowColumn  style={{ color: styleColorChange_100,  width: '10%' }}>{item.change_100}%</TableRowColumn>
                </TableRow>
            )
        })
        return (
            <div>
                <Table
                    style={styles.table}
                    fixedHeader ={true}
                >
                    <TableHeader  displaySelectAll={false}
                    adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn style={styles.tableHeader}>Code</TableHeaderColumn>
                            <TableHeaderColumn>Company</TableHeaderColumn>
                            <TableHeaderColumn>Price</TableHeaderColumn>
                            <TableHeaderColumn style={styles.tableHeader}>Value</TableHeaderColumn>
                            <TableHeaderColumn style={styles.tableHeader}>Change</TableHeaderColumn>
                            <TableHeaderColumn style={styles.tableHeader}>%Change</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {maplist}
                    </TableBody>
                </Table>
            </div>
        );
     
    }
    
}


export default MyTables;