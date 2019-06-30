import Reactotron from 'reactotron-react-native'

Reactotron.configure({ host: '10.252.108.139' }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect() // let's connect!
