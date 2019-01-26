import React, { Component } from 'react';
import { View, Text, Container, Icon } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { connect } from 'react-redux';
import { decrementDate, incrementDate } from '../redux/ActionCreators';
import {TouchableOpacity} from 'react-native';
import ShowToday from './ShowToday';
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
        // this.state = { 
        //     date: moment().format('ddd, DD MMM')}
    //     this.incrementDate = this.incrementDate.bind(this);
    //     this.decrementDate = this.decrementDate.bind(this);

    // }

    // incrementDate = () => { 
    //     this.setState({ 
    //         date: moment(this.state.date).add(1,'day').format('ddd, DD MMM')
    //     })
    // }

    // decrementDate = () => { 
    //     this.setState({ 
    //         date: moment(this.state.date).subtract(1,'day').format('ddd, DD MMM')
    //     })
    // }
    

    render() {
        // console.log(date);
        const { decrementDate, incrementDate, date } = this.props
        let addDate = moment(date).add(1,'day').format('ddd, DD MMM');
        let subtractDate = moment(date).subtract(1,'day').format('ddd, DD MMM');
        // console.log(addDate, subtractDate);

        return (
            <>
            <Text>{date}</Text>
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

// export default DayShowView;            

