import React, {Component} from 'react';
import { Container, View, Text, Content, Button, Form } from 'native-base';
import TransactionList from '../components/TransactionList';
import DayShowView from '../components/DayShowView';
import FAB from '../components/FAB';
import { store } from '../redux/ConfigureStore';
import { connect } from 'react-redux';
import CategoryView from '../components/CategoryView';


mapStateToProps = state =>  { 
  return { 
    transactions: state.transactions.transactions,
    displayDate: state.displayDate.displayDate
  }
}

class HomeScreen extends Component {

  static navigationOptions = { 
    title: 'Home',
  }


  render() {
    const { navigate } = this.props.navigation;
    console.log('Storeeeeee .....1 ') ;
    console.log(store.getState());
    const displayTransactionByDate = this.props.transactions.filter((transaction) => transaction.date == this.props.displayDate)
    console.log('Transaction By Date ....');
    // console.log(displayTransactionByDate);
    console.log(this.props.transactions);

    return (
      <Container>
        <Content>
          <DayShowView displayDate={this.props.displayDate}/>
          <TransactionList transactions={this.props.transactions} 
                          displayTransactionByDate = {displayTransactionByDate} 
                          navigate={this.props.navigation.navigate}/>
        </Content>
        <FAB navigate={navigate}/>
        {/* <CategoryView/> */}
      </Container>
      
    );
}
}

export default connect(mapStateToProps)(HomeScreen);
