import React from 'react'
import { View, Text, Button, AsyncStorage } from 'react-native'

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in'
    }

    componentDidMount() {
        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (error, stores) => {
                stores.map((result, i, store) => {
                    console.log({ [store[i][0]]: store[i][1] })
                    return true
                })
            })
        })
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc')
        this.props.navigation.navigate('App')
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
