import React from 'react'
import { View, Text, Button, AsyncStorage } from 'react-native'

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in'
    }

    _signInAsync = async () => {
        fetch(`${process.env.REACT_APP_USERS_DATABASE}/api/auth/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'Native',
                password: 'Native'
            })
        })
            .then(res => {
                console.log(res)
                AsyncStorage.setItem('userToken', res.data.token)
            })
            .catch(err => {
                console.log(JSON.stringify(err))
            })
        if (typeof AsyncStorage.getItem('userToken') === 'string') {
            this.props.navigation.navigate('App')
        } else {
            console.log('invalid token')
        }
    }

    _insertTokenToLocalStorage = async token => {
        await AsyncStorage.setItem('userToken', token)
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
