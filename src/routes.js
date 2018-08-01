import { StackNavigator, TabNavigator } from 'react-navigation';

import Welcome from 'pages/welcome';
import Users from 'pages/users';
import Chat from 'pages/chat';

const Routes = StackNavigator({
    Welcome: { screen: Welcome },
    Logged: {
        screen: TabNavigator({
            Chat: { screen: Chat },
            Users: { screen: Users },
        }),
    },
}, {
    initialRouteName: 'Welcome',
});

export default Routes;
