import React, { Component } from 'react';
import { View, Text, Container, Icon } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { connect } from 'react-redux';
import { decrementDate, incrementDate } from '../redux/ActionCreators';
import {TouchableOpacity} from 'react-native';
import moment from 'moment';

const mapStateToProps = (state) => {
    return { date: state.displayDate.displayDate }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementDate: (date) => dispatch(incrementDate(date)),
        decrementDate: (date) => dispatch(decrementDate(date))
    }
}

class DayShowView extends Component {
    constructor(props) {
        super(props);
    }  

    render() {
        
        const { decrementDate, incrementDate, date } = this.props
        let addDate = moment(date).add(1,'day').format('DD MMM');
        let subtractDate = moment(date).subtract(1,'day').format('DD MMM');

        return (
            <>
            <Text>{this.props.displayDate}</Text>
            <Grid>
                <Col size={5}>
                    <TouchableOpacity onPress={() => decrementDate(subtractDate)}>
                        <Icon name="ios-arrow-back" />
                    </TouchableOpacity>
                </Col>
                <Col size={30}><Text>Today</Text></Col>
                <Col size={30}><Text>This Week</Text></Col>
                <Col size={30}><Text>This Month</Text></Col>
                <Col size={5}>
                    <TouchableOpacity onPress={() => incrementDate(addDate)}>
                        <Icon name='ios-arrow-forward'  />
                    </TouchableOpacity>
                </Col>
            </Grid>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayShowView);    

