import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from 'react-navigation-stack';

import About from '../screens/about';

const screens = {
     About: {
          screen: About,
          navigationOptions: {
               title: 'GameZone',
            
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

export default AboutStack;