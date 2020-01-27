import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import GlobalValidations from './GlobalValidation';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handlePasswordChange = (text) => {
        console.log(" PASSWORD CHANGE CALLED ", text)
        this.setState({ password: text })
    }

    handleUsernameChange = (text) => {
        console.log(" USERNAME CHANGE CALLED ", text)
        this.setState({ email: text })
    }

    handleLoginPress = () => {
        console.log(" LOGIN CALLED ")
        if (GlobalValidations.isFieldEmpty(this.state.email)) {
            console.log(" Please enter email ")
            return;
        } else if (GlobalValidations.isEmailInvalid(this.state.email)) {
            console.log(" Please enter valid email ")
            return;
        } else if (GlobalValidations.isFieldEmpty(this.state.password)) {
            console.log(" Please enter password ")
            return;
        }

        console.log(" LOGIN SUCCESS ")
        // Alert.alert(" Login Pressed ")
        //this.props.handleLogin(this.state.email, this.state.password)
    }

    render() {
        return (
            <View style={{ marginHorizontal: 20, marginVertical: 50 }}>
                <TextInput
                    style={{ padding: 5, borderBottomColor: "#aaaaaa", borderBottomWidth: 1 }}
                    testID={'email'}
                    placeholder={"Email"}
                    keyboardType={"email-address"}
                    value={this.state.email}
                    onChangeText={this.handleUsernameChange}
                />
                <TextInput
                    style={{ padding: 5, marginTop: 10, borderBottomColor: "#aaaaaa", borderBottomWidth: 1 }}
                    testID={'password'}
                    placeholder={"Password"}
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={this.handlePasswordChange}
                />
                <TouchableOpacity
                    style={{
                        backgroundColor: "#195d9b", padding: 10, marginTop: 10,
                        justifyContent: "center", alignItems: "center"
                    }}
                    testID={'loginButton'}
                    onPress={this.handleLoginPress}>
                    <Text style={{ color: "#ffffff" }}>{"Login"}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
