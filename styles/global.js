import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
     container: {
          flex: 1,
          padding: 40
     },
     titleText: {
          fontFamily: 'nunito-bold',
          fontSize: 24,
          color: '#333',
     },
     paragraph: {
          marginVertical: 8,
          lineHeight: 20,
     }
});

export const fonts = {
     sm: 12,
     md: 18,
     lg: 28,
     primary: "Nuito-Regular",
     bold: "Nuito-Bold"
   };