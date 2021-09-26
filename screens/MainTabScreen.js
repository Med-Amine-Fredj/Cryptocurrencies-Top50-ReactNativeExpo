import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import CoinDetailsScreen from './CoinDetailsScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
   <>
    <Tab.Navigator
      initialRouteName="Home"
      activeColor= "#101573"
    >
      <Tab.Screen
        name="Top"
        component={HomeStackScreen}
        options={{
            tabBarLabel: 'Top',
            tabBarIcon: ({ color }) => (
                <Icon name="home" color={color} size={26} />
              ),
        }}
      />
    </Tab.Navigator>
  </>
   
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
      headerLeft: null,
      headerStyle: { backgroundColor: '#101573' }, }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: '', }} />
        <DetailsStack.Screen name="Details" component={CoinDetailsScreen} options={{ title: '',  }} />
    </HomeStack.Navigator>
);
