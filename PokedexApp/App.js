import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Pokemon from './components/Pokemon'
import Details from './components/Details'

const appNavigator = createStackNavigator({
  Home: {
    screen: Pokemon
  },
  Details: {
    screen: Details
  },
},
  {
    initialRouteName: 'Home'
  },
);

const AppContainer = createAppContainer(stackNavigator);

class App extends Component {
  render () {
    return <AppContainer />
  }
}

export default App;
