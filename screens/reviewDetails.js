import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles, fonts } from '../styles/global';

export default function ReviewDetails({navigation}){
     const pressHandler = () => {
          navigation.goBack();
     }
     return(
          <View style={globalStyles.container}>
               <Text style={[globalStyles.titleText, fonts.bold]}>
                    {navigation.getParam('title')}
               </Text>
               <Text style={[globalStyles.titleText, fonts.bold]}>
                    {navigation.getParam('body')}
               </Text>
               <Text style={[globalStyles.titleText, fonts.bold]}>
                    {navigation.getParam('rating')}
               </Text>
               <Button title='back to home screen' onPress={pressHandler} />
          </View>
     )
}
