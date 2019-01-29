import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab,Text } from 'native-base';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return { date: state.displayDate.displayDate }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

class CategoryView extends Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (
            <Container>
                {/* <Tabs renderTabBar={() => <ScrollableTab />}> */}
                <Tabs>
                    <Tab heading="Tab1">
                        <Text>Hello</Text>
                    </Tab>
                    <Tab heading="Tab2">
                        <Text>Hello</Text>

                    </Tab>
                    <Tab heading="Tab3">
                        <Text>Hello</Text>

                    </Tab>
                    <Tab heading="Tab4">
                        <Text>Hello</Text>

                    </Tab>
                    <Tab heading="Tab5">
                        <Text>Hello</Text>

                    </Tab>
                </Tabs>
            </Container>


        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryView);

