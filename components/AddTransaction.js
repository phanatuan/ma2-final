import React, { Component } from 'react';
import {
    View, Text, Button, Icon, Container, Item,
    Input, Label, Content, Form, Picker, Footer
} from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { addTransactionItem, deleteTransactionItem } from '../redux/ActionCreators';
import moment from 'moment';
import { connect } from 'react-redux';


const mapDispatchToProps = dispatch => ({
    addTransactionItem: (transactionItem) => dispatch(addTransactionItem(transactionItem)),
    deleteTransactionItem: (id) => dispatch(deleteTransactionItem(id))
})

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.navigation.state.params.transactionId
    return {
        currentTransactionitem: state.transactions.transactions.filter(transaction => transaction.id === parseInt(id, 10))[0],
    }
}

class AddTransaction extends Component {

    constructor(props) {
        super(props);
        this.renderField = this.renderField.bind(this);
        this.submit = this.submit.bind(this);
        this.delete = this.delete.bind(this);
        this.renderField = this.renderField.bind(this);
        this.renderDatePicker = this.renderDatePicker.bind(this);
    }

    componentDidMount() {
        console.log('Check Map Props');
        console.log(this.props.currentTransactionitem)
    }
    componentWillMount() {
        this.props.initialize(this.props.currentTransactionitem);
    }

    renderDropDownSelect = ({ label, input }) => {
        return (
            <Item>
                <Label>{label}</Label>
                <Picker {...input}>
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                    <Picker.Item label="Net Banking" value="key4" />
                </Picker>
            </Item>
        );
    }

    renderField = ({ label, keyboardType, name, input }) => {
        return (
            <Item>
                <Label>{label}</Label>
                <Input keyboardType={keyboardType} {...input}></Input>
            </Item>
        );
    }

    renderDatePicker = ({ input, meta: { touched, error }, label, change }) => (
        <Item>
            <Label>{label}</Label>
            {/* <DatePicker {...input} 
                    autoOk={true} 
                    dateForm='MM/DD/YYYY' 
                    onChange={(value) => input.onChange(value)} /> */}
        </Item>
    );



    submit = values => {
        // alert(`The values are ${JSON.stringify(values)}`)
        const transactionItem = JSON.parse(JSON.stringify(values))
        this.props.addTransactionItem(transactionItem);
        const { navigate } = this.props.navigation;
        navigate('Home');
    }

    delete = (id) => {
        this.props.deleteTransactionItem(id)
        const { navigate } = this.props.navigation;
        navigate('Home');

    }

    render() {
        const { handleSubmit, deleteTransactionItem } = this.props
        const id = this.props.navigation.state.params.transactionId
        console.log(id)
        console.log(this.props.navigation.state.params.transactionId)
        

        // console.log('Transaction Id ......');
        // console.log(this.props.navigation.state.params.transactionId);
        // console.log('Check Map Props');
        // console.log(this.props.id)
        // console.log(this.props.currentTransactionitem)
        // console.log(this.props.currentTransactionitem);

        return (
            <>
                <Form>
                    <Field keyboardType='numeric' label='Amount' component={this.renderField} name="amount" />
                    <Field keyboardType='default' label='Description' component={this.renderField} name="description" />
                    {/* <Field keyboardType='default' label='Description' component={this.renderDropDownSelect} name="description" /> */}
                    <Field keyboardType='default' label='Category' component={this.renderField} name="category" />
                    {/* <Field keyboardType='default' label='Date' component={this.renderDatePicker} name="date" /> */}
                    <Field keyboardType='default' label='Date' component={this.renderField} name="date" />
                </Form> 
                <Button full light onPress={handleSubmit(this.submit)}>
                    <Text>Submit</Text>
                </Button>
                <Button full light onPress={() => this.delete(id)}>
                    <Text>Delete</Text>
                </Button>
                {/* <Button full light onPress={handleSubmit(this.submit)}>
                    <Text>Edit</Text>
                </Button> */}
            </>
        );
    }
}

AddTransaction = connect(mapStateToProps, mapDispatchToProps)(AddTransaction);

export default reduxForm({
    form: 'addTransaction',
})(AddTransaction);


{/* <DatePicker {...input} 
                dateForm = "MM/DD/YYYY"
                value = {moment(input.value).format('MM-YYYY')} 
                onDateChange = {change}
                // onDateChange={(value) => input.onChange(value)}
                // autoOk={true}
                selected={input.value ? moment(input.value) : null} />
            {touched && error && <span>{error}</span>} */}