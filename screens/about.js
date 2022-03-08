import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
// import { WebView } from 'react-native-webview';

export default function About(){

     return(
          <View style={globalStyles.container}>
               <Text style={globalStyles.titleText}>About Screen</Text>
          </View>
     )
}
