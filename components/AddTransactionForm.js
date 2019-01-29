import React, { Component } from 'react';
import {
	View, Text, Button, Icon, Container, Item,
	Input, Label, Content, Form, Picker, Footer, DatePicker, Header,
	ListItem, CheckBox, Body
} from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';
import { addTransactionItem, updateTransactionItem, deleteTransactionItem } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import moment from 'moment';

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.navigation.state.params.transactionId
	return {
		currentTransactionItem: state.transactions.transactions.filter(transaction => transaction.id === parseInt(id, 10))[0],
	}
}

const mapDispatchToProps = (dispatch) => ({
	addTransactionItem: (transactionItem) => dispatch(addTransactionItem(transactionItem)),
	updateTransactionItem: (id, item) => dispatch(updateTransactionItem(id, item)),
	deleteTransactionItem: (id) => dispatch(deleteTransactionItem(id))
})

class AddTransactionForm extends Component {

	constructor() {
		super();
		this.state = {
			isOpen: false,
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
		this.handleDelete = this.handleDelete.bind(this);
		this.chooseExpense = this.chooseExpense.bind(this);
	}

	handleSubmit = () => {
		let { amount, description, category, date } = this.state
		const { navigate } = this.props.navigation;

		let item = {
			amount: parseInt(amount),
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

	handleDelete = () => {
		const id = this.props.navigation.state.params.transactionId
		this.props.deleteTransactionItem(id);
		this.setState({
			amount: 0,
			description: '',
			currency: '',
			category: '',
			date: ''
		})
		const { navigate } = this.props.navigation;
		navigate('Home');
	}

	handleEdit = () => {
		const id = this.props.navigation.state.params.transactionId
		console.log(id);
		let { amount, description, category, date } = this.state
		let item = {
			amount: parseInt(amount),
			description: description,
			category: category,
			date: date.toString()
		}
		console.log(item)
		this.props.updateTransactionItem(id, item);
		this.setState({
			amount: 0,
			description: '',
			currency: '',
			category: '',
			date: ''
		})
		const { navigate } = this.props.navigation;
		navigate('Home');
	}

	componentWillMount() {
		if (this.props.currentTransactionItem) {
			let { amount, description, category, date } = this.props.currentTransactionItem
			this.setState({
				amount: amount,
				description: description,
				category: category,
				date: date,
				type: true
			})
		}
	}

	setDate(newDate) {
		let dateAdd = moment(newDate).format('DD MMM');
		this.setState({ date: dateAdd });
	}

	onValueChange(value) {
		this.setState({
			category: value
		});
	}

	chooseExpense(value) { 
		this.setState({ 
			type: value
		})
	}

	render() {
		const { navigate } = this.props.navigation;
		const id = this.props.navigation.state.params.transactionId

		return (
			<Container>
				<Content>
					<Form>
						<Item>
							<Picker mode="dropdown"
								iosHeader="Expense/Income"
								placeholder="Select"
								iosIcon={<Icon name="arrow-down" />}
								selectedValue={this.state.type}
								onValueChange={(value) => this.chooseExpense(value)}
							>
								<Picker.Item label="Expense" value = "Expense" />
								<Picker.Item label="Income" value = "Income" />
							</Picker>
						</Item>
							<Item>
								<Label>Amount</Label>
								<Input keyboardType='numeric'
									onChangeText={(amount) => this.setState({ amount: amount })} value={this.state.amount} />
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
							</Item>
							<Item>
								<Label>Date</Label>
								<DatePicker
									defaultDate={new Date()}
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
						{(id) &&
							<>
								<Button full light onPress={() => this.handleEdit()}>
									<Text>Edit</Text>
								</Button>
								<Button full light onPress={() => this.handleDelete()}>
									<Text>Delete</Text>
								</Button>
							</>
						}
						<Button full light onPress={() => navigate('Home')}>
							<Text>Cancel</Text>
						</Button>
				</Content>
			</Container>
				);
			}
		}
		
export default connect(mapStateToProps, mapDispatchToProps)(AddTransactionForm);