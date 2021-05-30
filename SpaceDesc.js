/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Button, Rating, Tab, Icon } from 'react-native-elements'


function Info(props) {
  return (
    <ScrollView>
      <View style={styles.container1}>
        <View style={styles.button1}>
          <Button
            title='Orchard'
            titleStyle={{ fontSize: 12, color:'black', fontFamily:'Nunito-Regular' }}
            buttonStyle={{ backgroundColor: '#F16774' }}
          ></Button>
        </View>
        <View style={styles.button1}>
          <Button
            title='Central'
            titleStyle={{ fontSize: 12, color:'black', fontFamily:'Nunito-Regular' }}
            buttonStyle={{ backgroundColor: '#F16774' }}
          ></Button>
        </View>
        <View style={styles.button1}>
          <Button
            title='$120/day'
            titleStyle={{ fontSize: 12, color:'black', fontFamily:'Nunito-Regular' }}
            buttonStyle={{ backgroundColor: '#F16774' }}
          ></Button>
        </View>
      </View>

      <View style={styles.container2}>
        <Text style={styles.text3}>
          Description
        </Text>
        <Text style ={{fontFamily:'Nunito-Regular'}}>
          A newly opened salon located in the heart of Orchard road, decked out with the latest and newest equipment any hair stylist could ask for
        </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text3}>
          Operating Hours
        </Text>
        <Text style ={{fontFamily:'Nunito-Regular'}}>
          11.00 AM - 10.00 PM daily
        </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text3}>
          Getting there
        </Text>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            style={{ width: 350, height: 200, marginLeft: 20 }}
            source={require('./Images/map1.png')}
          ></Image>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 50, paddingLeft:10 }}
        horizontal={true}>
        <Image
          style={styles.image4}
          source={require('./Images/interior1.jpg')}
        ></Image>
        <Image
          style={styles.image4}
          source={require('./Images/interior1.jpg')}
        ></Image>
        <Image
          style={styles.image4}
          source={require('./Images/interior1.jpg')}
        ></Image>
        <Image
          style={styles.image4}
          source={require('./Images/interior1.jpg')}
        ></Image>
        <Image
          style={styles.image4}
          source={require('./Images/interior1.jpg')}
        ></Image>
      </ScrollView>
      <View style={{paddingTop:80}}></View>
    </ScrollView>
  );
}

function TopBar(props) {

  const ratingNumber = 4.5

  return (
    <View>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity>
          <Image
            style={styles.image1}
            source={require('./Images/left_arrow.png')}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.image2}
            source={require('./Images/fav_white.png')}
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text1}>
          HairFlick Salon
        </Text>
        <Text style={styles.text2}>
          2 Orchard Turn, ION
        </Text>
        <Text style={styles.text2}>
          Orchard, 238801
        </Text>

      </View>

      <View>
        <Rating
          type='custom'
          imageSize={20}
          ratingBackgroundColor='#ca8afa'
          tintColor='#454E6F'
          readonly
          fractions={1}
          startingValue={ratingNumber}
          style={styles.rating}
        />
      </View>

    </View>


  );
}



const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#454E6F" />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TopBar></TopBar>
        </View>
        <View style={styles.bottomContainer}>
          <Info></Info>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image3}
            source={require('./Images/interior1.jpg')}
          ></Image>
        </View>
        <View style={styles.buttonContainer1}>
          <Button
            containerStyle={{ borderRadius: 10 }}
            title='Book Now'
            titleStyle={{ fontSize: 28, paddingHorizontal: 55, paddingVertical: 5, color: '#000000', fontFamily:'Nunito-Bold' }}
            buttonStyle={{ backgroundColor: '#F16774' }}
          ></Button>
        </View>
        <View style={styles.buttonContainer2}>
          <Button
            icon={
              <Icon
                name="share-alt"
                type='font-awesome'
                size={30}
                color="black"
                containerStyle={{ padding: 10 }}
              />
            }
            containerStyle={{ borderRadius: 10 }}
            buttonStyle={{ backgroundColor: '#F16774' }}
          ></Button>
        </View>
        <View style={{backgroundColor:'#5E75C3'}}>
          <Tab>
            <Tab.Item
              icon={
                <Icon
                  name="map-marker"
                  type='font-awesome'
                  size={30}
                />
              }
              variant="primary"
              titleStyle={{ fontSize: 6, fontFamily:'Nunito-Regular', color:'white' }}
              title="Location" />
            <Tab.Item
              icon={
                <Icon
                  name="calendar"
                  type='font-awesome'
                  size={30}
                />
              }
              titleStyle={{ fontSize: 6, fontFamily:'Nunito-Regular', color:'white' }}
              title="Schedule" />
            <Tab.Item
              icon={
                <Icon
                  name="home"
                  type='font-awesome'
                  size={30}
                />
              }
              titleStyle={{ fontSize: 6, fontFamily:'Nunito-Regular', color:'white' }}
              title="Home" />
            <Tab.Item
            icon={
              <Icon
              name="heart"
              type='font-awesome'
              size={30}
              />
            }
              titleStyle={{ fontSize: 6, fontFamily:'Nunito-Regular', color:'white' }}
              title="Liked" />
            <Tab.Item
            icon={
              <Icon
              name="user"
              type='font-awesome'
              size={30}
              />
            }
              titleStyle={{ fontSize: 6, fontFamily:'Nunito-Regular', color:'white' }}
              title="Profile" />
          </Tab>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 10,
    width: 250
  },
  container2: {
    marginTop: 20,
    marginLeft: 15,
  },
  topContainer: {
    flex: 0.4,
    backgroundColor: '#454E6F',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#F3F0F4'

  },
  imageContainer: {
    position: 'absolute',
    width: '145%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer1: {
    position: 'absolute',
    height: '173%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:30,
    marginLeft: 25.
  },
  buttonContainer2: {
    position: 'absolute',
    height: '173%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:30,
    marginLeft: 300.
  },
  image1: {
    marginTop: 25,
    marginLeft: 20,
    width: 40,
    height: 40,
  },
  image2: {
    marginTop: 25,
    marginLeft: 265,
    width: 40,
    height: 40
  },
  image3: {
    width: 140,
    height: 140,
    borderRadius: 20,
  },
  image4: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginRight: 15
  },
  textContainer: {
    marginLeft: 25,
  },
  text1: {
    fontSize: 25,
    color:'white',
    fontFamily:'Nunito-Bold'
  },
  text2: {
    fontFamily:'Nunito-Regular',
    color:'white'
  },
  text3: {
    fontSize: 20,
    fontFamily:'Nunito-SemiBold'
  },
  rating: {
    marginRight: 245,
    marginTop: 10
  },
  button1: {
    marginRight: 20,
  }
});

export default App;
