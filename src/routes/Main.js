import { createDrawerNavigator } from 'react-navigation';
import Dashboard from '../screens/Dashboard';

export default createDrawerNavigator({
  Dashboard: {
    screen: Dashboard,
  }
});
