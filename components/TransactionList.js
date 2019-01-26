import React, { Component } from 'react';
import { Container, Title, Header, Content, Card, CardItem, Text, Icon, Right, View } from 'native-base';
import { FlatList } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableOpacity } from 'react-native';

export default class TransactionList extends Component {

	constructor(props) {
		super(props);
	}

	_keyExtractor = (item) => item.id
	_renderTransaction = ({ item }) => {
		return (
			<TouchableOpacity onPress={() => this.props.navigate('AddTransaction', {transactionId: item.id})}>
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
		// console.log('Transaction List ....');
		// console.log(this.props.transactions);
		return (
			<Card>
				<FlatList
					data={this.props.transactions}
					renderItem={this._renderTransaction}
					keyExtractor={this._keyExtractor}
				/>
			</Card>
		);
	}
}