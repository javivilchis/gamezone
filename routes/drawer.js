import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';

const RootDreawerNavigator = createDrawerNavigator({
     Home: {
          screen: HomeStack,
     }
});