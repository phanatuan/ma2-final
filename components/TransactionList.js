import React, { Component } from 'react';
import { Container, Title, Header, Content, Card, CardItem, Text, Icon, Right, View } from 'native-base';
import { FlatList } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableOpacity } from 'react-native';

export default class TransactionList extends Component {

	constructor(props) {
		super(props);
	}

	_keyExtractor = (item) => item.id.toString()
	_renderTransaction = ({ item }) => {
		return (
			<TouchableOpacity onPress={() => this.props.navigate('AddTransactionForm', {transactionId: item.id})}>
				<CardItem >
					<Grid>
						<Col size={20}>
							<Text>{item.date}</Text>
						</Col>
						<Col size={60}>
							<Row size={80}>
								<Text>{item.description}</Text>
							</Row>
							<Row size={20}>
								<Text>{item.category}</Text>
							</Row>
						</Col>
						<Col size={20}>
							<Text>{item.amount}</Text>
						</Col>
					</Grid>
				</CardItem>
			</TouchableOpacity>
		);
	}

	render() {
		let totalAmount = 0;
		this.props.displayTransactionByDate.forEach((transaction) => {
			totalAmount += transaction.amount
		}) 
		
		return (
			<Card>
				<FlatList
					data={this.props.displayTransactionByDate}
					renderItem={this._renderTransaction}
					keyExtractor={this._keyExtractor}
				/>
				<Text>Total Amount: {totalAmount}</Text>
			</Card>
		);
	}
}