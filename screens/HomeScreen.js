import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList,Image,TouchableOpacity } from 'react-native';
import Spinner from '../components/Spinner';


export default function HomeScreen({ navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [api, setData] = useState({});

  useEffect(() => {
    fetch('https://api2.lunarcrush.com/v2/assets?data=market&type=fast&key=ux16x3wz9smvj3x6st1x9b')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }, [])
  
  const test = api?.data

  return (
    <View style={styles.container}>
      {isLoading ? <Spinner/> : ( 
        <View>
          <Text style={styles.title}>Ghazy's Pick</Text>
          <FlatList
            data={test}
            initialNumToRender={10}
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Details',item)}>
                <View style={styles.item}>
                  <View style={styles.insideItem}>
                    <View>
                      <Image
                        source={{ uri: 'https://dkhpfm5hits1w.cloudfront.net/'+item.n.toLowerCase().split(' ').join('-')+'.png', alt:'image' }}
                        style={styles.image}  
                      />     
                    </View>     
                    <View style={styles.insideItem1}>              
                      <Text style= {styles.name}> {item.n.toUpperCase()}</Text>
                      <Text style= {styles.score}> Galaxy Score™ : {item.gs}</Text>
                    </View>
                    <View style={styles.insideItem2}>  
                      <Image
                        source={require('../assets/blue-arrow.png')}
                        style={styles.icon}  
                      />    
                    </View>
                  </View> 
                </View>
              </TouchableOpacity>
            )}
          /> 
        </View>
      )}   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  item :{
    borderColor: '#C7E1E5',
    marginLeft: '3%',
    marginRight: '3%',
    borderWidth:1,
    backgroundColor: '#F1EDFE',
    padding: 5,
    marginTop: 10,
    borderRadius: 10,
  },
  image: {
      borderWidth:1,
      height: 100,
      width: 100,
      borderRadius: 50,
  },
  title: {
    fontSize: 22, 
    color: '#A1A1A1', 
    textAlign: 'center',
    marginTop: '4%',
    fontWeight: 'bold'
  },
  insideItem: { 
    flexDirection: 'row', 
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
  },
  insideItem1: { 
    flexGrow: 100,
    flexShrink: 0,
    flexBasis: "auto",
    width: '50%'
  },
  insideItem2: { 
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
  },
  name: {
    textAlignVertical: 'center',
    color: '#7B59F2',
    fontSize: 22, 
    fontWeight: 'bold',
    marginTop:'10%',
    marginLeft: '3%',
    width: '90%'
  },
  score: {
    color: '#525252',
    fontSize: 15, 
    marginLeft: '3%',
    width: '90%'
  },
  icon: {
    position: 'relative',
    height: 30,
    width: 30,
    marginTop:'90%',
    marginRight: '3%',
},
});
