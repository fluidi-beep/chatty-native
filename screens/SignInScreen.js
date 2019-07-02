import React from 'react'
import { View, Text, Button, AsyncStorage } from 'react-native'

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in'
    }

    _signInAsync = async () => {
        // fetch(`${process.env.REACT_APP_USERS_DATABASE}/api/auth/login`, {
        fetch(`https://chatty-users.herokuapp.com/api/auth/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'username',
                password: 'password'
            })
        })
            .then(res => res.json())
            .then(resJson => {
                console.log('RES ', resJson)
                this._insertTokenToLocalStorage(resJson.token)
                // AsyncStorage.setItem('userToken', res.data.token)
            })
            .catch(err => {
                console.log('ERROR: ', JSON.stringify(err))
            })
    }

    _insertTokenToLocalStorage = async token => {
        await AsyncStorage.setItem('userToken', token).then(
            console.log('did it ')
        )
    }

    render() {
        return (
            <View>
                <Button title="Sign in!" onPress={this._signInAsync} />
            </View>
        )
    }
}

export default SignInScreen
