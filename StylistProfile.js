/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View, 
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native'; 

import {Button, Tab, Icon, Rating} from 'react-native-elements';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const ratingNumber = 4.5;
//test

//tab navigation for buttons
// function FeedScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Feed!</Text>
//     </View>
//   );
// }

// function NotificationsScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Notifications!</Text>
//     </View>
//   );
// }

// function ProfileScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Profile!</Text>
//     </View>
//   );
// }

// const topTab = createMaterialTopTabNavigator();

// function MyTabs() {
//   return (
//     <topTab.Navigator
//       initialRouteName="Feed"
//       tabBarOptions={{
//         activeTintColor: '#e91e63',
//         labelStyle: {fontSize: 12},
//         style: {backgroundColor: 'powderblue'},
//       }}>
//       <topTab.Screen
//         name="Feed"
//         component={FeedScreen}
//         options={{tabBarLabel: 'Home'}}
//       />
//       <topTab.Screen
//         name="Notifications"
//         component={NotificationsScreen}
//         options={{tabBarLabel: 'Updates'}}
//       />
//       <topTab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{tabBarLabel: 'Profile'}}
//       />
//     </topTab.Navigator>
//   );
// }

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#5E75C3" />
      <View
        style={{
          position: 'absolute',
          width: '100%',
        }}></View>

      <View
        style={[
          styles.container,
          {
            flexDirection: 'column',
          },
        ]}>
        <View style={{flex: 1, backgroundColor: '#5E75C3'}}>
          {/* Icons and stuff in here */}
        </View>

        {/* Rounded square where profile pic, role, name, and username go into. */}
        <View style={styles.profilePicChunk}>
          <Image
            style={styles.profilePic}
            source={require('./Images/doge.jpg')}></Image>

          <Text style={styles.fullName}>John Appleseed</Text>
          <Text style={styles.userName}>@john_appleseed</Text>
          <View>
            <Rating
              type="custom"
              imageSize={20}
              ratingBackgroundColor="#ca8afa"
              tintColor="#F1F1F1"
              readonly
              fractions={1}
              startingValue={ratingNumber}
              style={styles.rating}
            />
          </View>
          <View style={styles.roleContainer}>
            <Text style={styles.role}>HAIRSTYLIST</Text>
          </View>
          <Text style={styles.about}>About</Text>
          <Text numberOfLines={3} style={styles.info}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut ante
            ut dui dapibus tempor. Nullam viverra, risus a eleifend. Lorem ipsum
            dolor sit amet, consect.... adipiscing elit. Ut ut ante ut dui
            dapibus tempor. Nullam viverra, risus a eleifend.
          </Text>
        </View>
        {/* <NavigationContainer>
          <MyTabs />
        </NavigationContainer> */}
      </View>

      {/* This fixes the navbar to the bottom */}
      <View style={{flex: 1}}>
        <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
          <Tab>
            <Tab.Item
              icon={<Icon name="map-marker" type="font-awesome" size={30} />}
              variant="primary"
              titleStyle={{fontSize: 6, fontFamily: 'Nunito-Regular'}}
              title="Location"
            />
            <Tab.Item
              icon={<Icon name="calendar" type="font-awesome" size={30} />}
              titleStyle={{fontSize: 6, fontFamily: 'Nunito-Regular'}}
              title="Schedule"
            />
            <Tab.Item
              icon={<Icon name="home" type="font-awesome" size={30} />}
              titleStyle={{fontSize: 6, fontFamily: 'Nunito-Regular'}}
              title="Home"
            />
            <Tab.Item
              icon={<Icon name="heart" type="font-awesome" size={30} />}
              titleStyle={{fontSize: 6, fontFamily: 'Nunito-Regular'}}
              title="Liked"
            />
            <Tab.Item
              icon={<Icon name="user" type="font-awesome" size={30} />}
              titleStyle={{fontSize: 6, fontFamily: 'Nunito-Regular'}}
              title="Profile"
            />
          </Tab>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  testText: {
    alignSelf: 'center',
  },
  container: {
    flex: 0.3,
    padding: 0,
  },
  profilePicChunk: {
    position: 'absolute',
    top: '35%',
    backgroundColor: '#F1F1F1',
    height: 305,
    width: 283,
    alignSelf: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  profilePic: {
    position: 'relative',
    top: '8%',
    alignSelf: 'center',
    height: 120,
    width: 120,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  fullName: {
    position: 'relative',
    alignSelf: 'center',
    paddingTop: 40,
    fontSize: 20,
    color: '#5E75C3',
    fontFamily: 'Nunito-Bold',
  },
  userName: {
    position: 'relative',
    alignSelf: 'center',
    paddingTop: 10,
    fontSize: 13,
    color: '#B8B8B8',
    fontFamily: 'Nunito-SemiBold',
  },
  rating: {
    position: 'relative',
    paddingTop: 5,
  },
  roleContainer: {
    position: 'relative',
    width: 160,
    height: 30,
    backgroundColor: '#F16774',
    alignSelf: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  role: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 13,
    alignSelf: 'center',
    color: 'white',
  },
  about: {
    position: 'relative',
    paddingTop: 40,
    fontSize: 15,
    fontFamily: 'Nunito-Bold',
    color: '#5E75C3',
  },
  info: {
    position: 'relative',
    paddingTop: 10,
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    color: 'black',
  },
});

export default App;
