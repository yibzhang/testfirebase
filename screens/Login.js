import React from 'react';
import {View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser } from '../actions/user'

class Login extends React.Component {

    loginHandle = () => {
        this.props.login()
        //this.props.navigation.navigate('Profile')
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
                    <TouchableOpacity style={styles.button} onPress={this.loginHandle}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}>
                        <Text style={styles.signupButtonText}>Don't have an account yet? Sign up</Text>
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
    loginButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    signupButtonText: {
        fontSize: 15,
        color: '#3498db'
    }
});

const mapDispatchToProps = dispatch =>{
    return bindActionCreators({updateEmail, updatePassword, login, getUser}, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)