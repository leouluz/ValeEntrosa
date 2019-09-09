import { createAppContainer, createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Home from './pages/Home';

export default createAppContainer(
    createStackNavigator({
        Login,
        Home,
    })
);