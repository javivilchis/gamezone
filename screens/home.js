import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation}){
     
     const [reviews, setReviews] = useState([
          {title: 'zelda, breath of fresh air', rating: 5, body: 'lorem ipsum', key: '1'},
          {title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2'},
          {title: 'Not so "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3'},
          {title: 'Digdug, dig yourself out', rating: 2, body: 'lorem ipsum', key: '4'},
     ])
     // using a button to navigate from screens
     const pressHandler = () => {
          navigation.navigate('ReviewDetails')
     }
  
     return(
          <View style={globalStyles.container}>
              <FlatList
              data={reviews}
              renderItem={({ item }) => (
               <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Text style={globalStyles.titleText}>{ item.title }</Text>
               </TouchableOpacity>
              )}
              />
              
          </View>
     )
}
