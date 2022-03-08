import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';

const screens = {
     Home: {
          screen: Home,
          navigationOptions: {
               title: 'GameZone',
               // header properties below can be managed all in one place
               // headerStyle: {
               //      backgroundColor: '#f47920',
               //      headerTintColor: '#fff',
               //      headerTitleStyle: {
               //           fontWeight: 'bold',
               //         },
               //    },

          }
     },
     About: {
          screen: About,
          navigationOptions: {
               title: 'About',
               //headerStyle: { backgroundColor: '#eee'}
          }
     },
     ReviewDetails: {
          screen: ReviewDetails,
          navigationOptions: {
               title: 'Review Details',
               //headerStyle: { backgroundColor: '#eee'}
          }
     }
}
const HomeStack = createStackNavigator(screens, {
     defaultNavigationOptions: {
          headerTintColor: '#fff',
          headerStyle: {
               backgroundColor: '#f47920', height: 80}
     }
});

export default createAppContainer(HomeStack);