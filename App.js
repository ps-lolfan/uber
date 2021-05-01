import React from 'react';
import {

  StatusBar,

} from 'react-native';

import HomeScreen from './src/screens/HomeScreen'




import Icon from 'react-native-vector-icons/FontAwesome'

const App = () => {


  return (
    <>
    <StatusBar barStyle='dark-content' />
    <HomeScreen />
    </>
  );
};



export default App;
