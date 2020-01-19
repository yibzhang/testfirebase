import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from 'react-native';
import Firebase from '../firebase/Firebase';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, register } from '../actions/user'

class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            confirmPassword: ''
        }
    }

    registerHandle = () => {
        if(this.state.confirmPassword != this.props.user.password){          
            alert("Password an't match")
            return
        }
        this.props.register()
    }

    render(){
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <TextInput
                        style = {styles.inputBox}
                        value = {this.props.user.email}
                        onChangeText = {(email) => this.props.updateEmail(email)}
                        placeholder = 'Email'
                        autoCapitalize = 'none'
                        keyboardType = 'email-address'
                    />
                    <TextInput
                        style = {styles.inputBox}
                        value = {this.props.user.password}
                        onChangeText = {(password) => this.props.updatePassword(password)}
                        placeholder = 'Password'
                        secureTextEntry = {true}
                    />
                    <TextInput
                        style = {styles.inputBox}
                        value = {this.state.passwordConfirm}
                        onChangeText = {(confirmPassword) => {this.setState({confirmPassword: confirmPassword})}}
                        placeholder = 'Confirm Password'
                        secureTextEntry = {true}
                    />
                    <TouchableOpacity style={styles.button} onPress={this.registerHandle}>
                        <Text style={styles.registerButtonText}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                        <Text style={styles.loginButtonText}>Go to Login page</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        )
    }    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 10,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center',
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#16a085',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    registerButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    loginButtonText: {
        fontSize: 15,
        color: '#3498db'
    }
});

const mapDispatchToProps = dispatch =>{
    return bindActionCreators({updateEmail, updatePassword, register}, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)
