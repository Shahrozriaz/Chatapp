
import React, { Component } from 'react'
import {

    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input , Button } from 'react-native-elements';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        const { navigate } = this.props.navigation;
        return (
            <React.Fragment>
                <Text>Login</Text>
                <Input
  placeholder='INPUT WITH ERROR MESSAGE'
  errorStyle={{ color: 'red' }}
  errorMessage='ENTER A VALID ERROR HERE'
/>

                <Button onPress={() => navigate('Home')}   type="outline" title="Home"></Button>
            </React.Fragment>
        );
    }
}

export default Login;