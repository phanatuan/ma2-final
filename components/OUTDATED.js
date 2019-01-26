import React, { Component } from 'react';
import {
	View, Text, Button, Icon, Container, Item,
	Input, Label, Content, Form, Picker, Footer, DatePicker, Header
} from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';
import { addTransactionItem } from '../redux/ActionCreators';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {}
}

const mapDispatchToProps = (dispatch) => ({
	addTransactionItem: (transactionItem) => dispatch(addTransactionItem(transactionItem))
	
})

class AddTransaction extends Component {

	constructor() {
		super();
		this.state = {
			isOpen: false,
			chosenDate: new Date(),
			id: null,
			amount: null,
			description: '',
			currency: '',
			category: '',
			date: ''
		};
		this.setDate = this.setDate.bind(this);
		this.onValueChange = this.onValueChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = () => {
		console.log(JSON.stringify(this.state));
		alert(`Data ${JSON.stringify(this.state)}`)
		this.props.addTransactionItem(this.state);
		this.setState({
			id: null,
			amount: 0,
			description: '',
			currency: '',
			category: '',
			date: ''
		})
		const { navigate } = this.props.navigation;
		navigate('Home');
	}

	setDate(newDate) {
		this.setState({ date: newDate });
	}

	onValueChange(value) {
		this.setState({
			category: value
		});
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container>
				{/* <Header><Text>Title</Text></Header> */}
				<Content>
					<Form>
						<Item>
							<Label>Amount</Label>
							<Input onChangeText={(amount) => this.setState({ amount: amount })} value={this.state.amount} />
						</Item>
						<Item>
							<Label>Description</Label>
							<Input onChangeText={(description) => this.setState({ description: description })} value={this.state.description} />
						</Item>
						<Item>
							<Label>Select Category</Label>
							<Picker mode="dropdown"
								iosHeader="Category"
								placeholder="Select"
								iosIcon={<Icon name="arrow-down" />}
								style={{ width: undefined }}
								selectedValue={this.state.selected}
								onValueChange={this.onValueChange}
							>
								<Picker.Item label="Wallet" value="key0" />
								<Picker.Item label="ATM Card" value="key1" />
								<Picker.Item label="Debit Card" value="key2" />
								<Picker.Item label="Credit Card" value="key3" />
								<Picker.Item label="Net Banking" value="key4" />

							</Picker>
							<Text>{this.state.category}</Text>
						</Item>
						<Item>
							<Label>Date</Label>
							<Text>
								{this.state.date.toString().substr(4, 12)}
							</Text>
							<DatePicker
								defaultDate={new Date(2018, 4, 4)}
								minimumDate={new Date(2018, 1, 1)}
								maximumDate={new Date(2018, 12, 31)}
								locale={"en"}
								timeZoneOffsetInMinutes={undefined}
								modalTransparent={true}
								animationType={"none"}
								androidMode={"calendar"}
								placeHolderText="Select date"
								textStyle={{ color: "green" }}
								placeHolderTextStyle={{ color: "#d3d3d3" }}
								onDateChange={this.setDate}
								disabled={false}
							/>
						</Item>
					</Form>
					<Button full primary onPress={() => this.handleSubmit()}>
						<Text>Submit</Text>
					</Button>
					<Button full light onPress={() => navigate('Home')}>
						<Text>Cancel</Text>
					</Button>
				</Content>
				<Footer>
					<Grid>
						<Col><Text>Sharing</Text></Col>
						<Col><Text>Camera</Text></Col>
						<Col><Text>Delete</Text></Col>
					</Grid>
				</Footer>

			</Container>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction);