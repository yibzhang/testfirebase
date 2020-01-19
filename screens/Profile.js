import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Profile extends React.Component{
    
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Profile screen!
                </Text>
            </View>
        );    
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Profile;