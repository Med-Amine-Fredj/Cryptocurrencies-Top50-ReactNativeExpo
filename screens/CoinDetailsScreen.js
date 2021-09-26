import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function CoinDetailsScreen({ route, navigation }) {

  const { gs } = route.params;
  const { n } = route.params;
  const { s } = route.params;
  const { acr } = route.params;
  const { p } = route.params;
  const { v } = route.params;
  const { sp } = route.params;
  const { sv } = route.params;

  const imgName = n.toLowerCase().split(' ').join('-');

  return (
    <View style={styles.container}>
      <View style={styles.firstPart}>
        <Image
          source={{ uri: 'https://dkhpfm5hits1w.cloudfront.net/'+imgName+'.png', alt:'image' }}
          style={styles.images}  
        />     
        <View style={{alignItems:'center',width: '100%',}}  >
          <Text style={styles.title}>{n.toUpperCase()} - {s.toUpperCase()}</Text>  
          <Text style={styles.galaxy}> Galaxy Score : {gs} </Text>
        </View>
        <Text style={styles.galaxy}> ALTRank : #{acr} </Text>
      </View>
      <View style={styles.secondPart}>
        <View style={{ flex: 2, alignItems:'flex-start', marginLeft: '10%'}} >
          <Text style={styles.simpleText}> Price. ($) </Text>
          <Text style={styles.simpleText}> Volume (USD) </Text>
          <Text style={styles.simpleText}> Tweet Spam </Text>
          <Text style={styles.simpleText}> Social Volume </Text>
        </View>
        <View style={{ flex: 2, alignItems:'flex-end', marginRight: '10%'}} >
          <Text style={styles.simpleText}> {p} </Text>
          <Text style={styles.simpleText}> {v} </Text>
          <Text style={styles.simpleText}> {sp} </Text>
          <Text style={styles.simpleText}> {sv} </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  firstPart:{
    flex:2,
    alignItems:'center',
    justifyContent: 'space-evenly'
  },
  secondPart :{
    flex:1, 
    backgroundColor:"#F1EDFE",
    flexDirection: "row",
    alignItems:'center',
  },
  images: {
      borderWidth:1,
      height: 150,
      width: 150,
      borderRadius: 20,
      borderWidth:1,
      backgroundColor: '#F1EDFE'
  },
  title: {
    color: '#7B59F2',
    fontSize: 27, 
    fontWeight: 'bold',
    width: '70%',
    textAlign: 'center'
  },  
  galaxy: {
    color: 'black',
    fontSize: 16, 
  },
  simpleText: {
    fontSize: 14, 
    fontWeight: 'bold',
  },
});
