import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Button,
    Text
} from 'react-native';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        const { navigate } = this.props.navigation;
        console.log('====================================');
        console.log(navigate);
        console.log('====================================');
        return (
            <React.Fragment>
                <Text>Home</Text>
                <Icon name="search" size={80} color="#2B577E"  />
                <Button onPress={() => navigate('Login')} title="Login"></Button>
            </React.Fragment>
        );
    }
}

export default Home;