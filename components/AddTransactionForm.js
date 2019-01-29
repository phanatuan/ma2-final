import React, { Component } from 'react';
import {
	View, Text, Button, Icon, Container, Item,
	Input, Label, Content, Form, Picker, Footer, DatePicker, Header
} from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';
import { addTransactionItem, updateTransactionItem } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import moment from 'moment';

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.navigation.state.params.transactionId
	return {
		currentTransactionitem: state.transactions.transactions.filter(transaction => transaction.id === parseInt(id, 10))[0],
	}
}

const mapDispatchToProps = (dispatch) => ({
	addTransactionItem: (transactionItem) => dispatch(addTransactionItem(transactionItem)),
	updateTransactionItem: (id, item) => dispatch(updateTransactionItem(id, item))
})

class AddTransactionForm extends Component {

	constructor() {
		super();
		this.state = {
			isOpen: false,
			chosenDate: moment().format('ddd, DD MMM'),
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
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleSubmit = () => {
		let { amount, description, category, date } = this.state
		const { navigate } = this.props.navigation;

		let item = {
			amount: amount,
			description: description,
			category: category,
			date: date.toString()
		}


		this.props.addTransactionItem(item);

		this.setState({
			amount: 0,
			description: '',
			currency: '',
			category: '',
			date: ''
		})
		navigate('Home');
	}

	// handleEdit = () => {
	// 	const id = this.props.navigation.state.params.transactionId
		
	// 	let { amount, description, category, date } = this.state
	// 	let item = {
	// 		amount: amount,
	// 		description: description,
	// 		category: category,
	// 		date: date.toString()
	// 	}
	// 	this.props.updateTransactionItem(id, item);
	// 	this.setState({
	// 		amount: 0,
	// 		description: '',
	// 		currency: '',
	// 		category: '',
	// 		date: ''
	// 	})
	// 	const { navigate } = this.props.navigation;
	// 	navigate('Home');
	// }

	componentWillMount() { 
		let { amount, description, category, date }  = this.props.currentTransactionitem
		this.setState({
			amount: amount,
			description: description,
			category: category,
			date: date
		})
	} 

	setDate(newDate) {
		let dateAdd = moment(newDate).format('ddd, DD MMM');
		this.setState({ date: dateAdd });
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
								selectedValue={this.state.category}
								onValueChange={(value) => this.onValueChange(value)}
							>
								<Picker.Item label="Food" value="Food" />
								<Picker.Item label="Accomodation" value="Accomodation" />
								<Picker.Item label="Transport" value="Transport" />
								<Picker.Item label="Miscellaneous" value="Miscellaneous" />
								<Picker.Item label="Education" value="Education" />

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
								locale={"en"}
								modalTransparent={true}
								animationType={"none"}
								androidMode={"calendar"}
								placeHolderText="Select date"
								onDateChange={(date) => this.setDate(date)}
								disabled={false}
							/>
						</Item>
					</Form>
					<Button full primary onPress={() => this.handleSubmit()}>
						<Text>Submit</Text>
					</Button>
					{/* <Button full light onPress={() => this.handleEdit()}>
						<Text>Edit</Text>
					</Button> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(AddTransactionForm);