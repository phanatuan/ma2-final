import React, {Component} from 'react';
import { Container, View, Text, Content, Button, Form } from 'native-base';
import TransactionList from '../components/TransactionList';
import DayShowView from '../components/DayShowView';
import ShowToday from '../components/ShowToday';
import FAB from '../components/FAB';
import {store} from '../App';
import { connect } from 'react-redux';


mapStateToProps = state =>  { 
  return { 
    transactions: state.transactions.transactions
  }
}

class HomeScreen extends Component {

  static navigationOptions = { 
    title: 'Home',
  }


  render() {
    // const filterTrasaction = transactions.filter(transaction => transaction.date === displayDate);
    const { navigate } = this.props.navigation;
    console.log('Storeeeeee .....1 ') ;
    console.log(store.getState());
    return (
      <Container>
        <Content>
          <DayShowView/>
          <TransactionList transactions={this.props.transactions} navigate={this.props.navigation.navigate}/>
        </Content>
        <FAB navigate={navigate}/>
      </Container>
      
    );
}
}

export default connect(mapStateToProps)(HomeScreen);
