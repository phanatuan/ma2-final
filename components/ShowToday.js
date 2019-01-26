import React, { Component } from 'react';
import { View, Text, Container, Content, Header } from 'native-base';

export default class ShowToday extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     date: new Date()
        // }
        // this.returnDate = this.returnDate.bind(this);

    }

    returnDate = (today) => {
        date = today.getDate() + "/" + parseInt(today.getMonth() + 1) + "/" + today.getFullYear();
        return date;
    }
    render() {
        return (

            <Text>{this.props.count}</Text>


        );
    }
}