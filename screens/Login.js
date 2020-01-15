import React from 'react';
import {View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from 'react-native';

import Firebase from '../firebase/Firebase';

class Login extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
          email: '',
          password: ''
        }
    }

    loginHandle = () => {
        Firebase.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('Profile'))
            .catch(error => alert(error))
    }

    render(){
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <TextInput
                        style = {styles.inputBox}
                        value = {this.state.email}
                        onChangeText = {(email) => this.setState({email: email})}
                        placeholder = 'Email'
                        autoCapitalize = 'none'
                        keyboardType = 'email-address'
                    />
                    <TextInput
                        style = {styles.inputBox}
                        value = {this.state.password}
                        onChangeText = {(password) => this.setState({password: password})}
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

export {Login};