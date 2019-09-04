import { createAppContainer, createSwitchNavigator } from 'react-native';

import Login from './pages/Login';
import Home from './pages/home';

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Home,
    })
);