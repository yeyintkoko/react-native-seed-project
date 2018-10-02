import { createStackNavigator } from 'react-navigation';
import Main from './Main';

export default createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: ()=> ({
      gesturesEnabled: false,
      header: null
    })
  },
})
