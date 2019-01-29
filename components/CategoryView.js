import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab, 
    Text, Form, Item, Label, Picker, Icon, Card, CardItem, Content } from 'native-base';
import { FlatList, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        categories: state.transactions.categories,
        transactions: state.transactions.transactions
    }
}

renderCategoryTab = (categories) => {
    renderCategories = categories.map(category => {
        return (
            <Tabs>
                <Tab heading={category}>
                    <Text>Hello</Text>
                </Tab>
            </Tabs>
        )
    })
    return renderCategories;
}

class CategoryView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: '',
            categoryList: ['Food', 'Accomodation', 'Transport', 'Miscellaneous', 'Education']
        }
        this._renderTransaction = this._renderTransaction.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(value) {
        this.setState({
            selectedCategory: value
        });
    }

    // _keyExtractor = (item) => item.id.toString()
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
        const displayTransactionByCategory = this.props.transactions.filter((transaction) => transaction.category == this.state.selectedCategory)
        console.log(this.state.selectedCategory);
        console.log(this.props.transactions);
        console.log(displayTransactionByCategory);
        return (
            <Container>
                <Header><Text>Category View</Text></Header>
                <Content>
                    <Form>
                        <Item>
                            <Label>Select Category</Label>
                            <Picker mode="dropdown"
                                iosHeader="Category"
                                placeholder="Select"
                                iosIcon={<Icon name="arrow-down" />}
                                selectedValue={this.state.selectedCategory}
                                onValueChange={(value) => this.onValueChange(value)}>
                                <Picker.Item label="Food" value="Food" />
                                <Picker.Item label="Accomodation" value="Accomodation" />
                                <Picker.Item label="Transport" value="Transport" />
                                <Picker.Item label="Miscellaneous" value="Miscellaneous" />
                                <Picker.Item label="Education" value="Education" />
                            </Picker>
                        </Item>
                    </Form>
                    <Card>
                        <FlatList
                            data={displayTransactionByCategory}
                            renderItem={this._renderTransaction}
                            keyExtractor={this._keyExtractor}
                        />
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default connect(mapStateToProps)(CategoryView);

