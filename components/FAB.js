import React, {Component} from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';


export default class FAB extends Component {

    constructor(props) {
        super(props);
        this.state = {
          active: true
        };
      }

    render() { 
        console.log(this.props);
        return (
        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#5067FF' }}
            position= "bottomRight"
            onPress = {() => this.props.navigate('AddTransactionForm',{transactionId: null})}
        >
        <Icon name="md-add" />
        </Fab>
    );
}
}