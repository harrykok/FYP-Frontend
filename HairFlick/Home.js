/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
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

import { Button, Tab, Icon, SearchBar } from 'react-native-elements'

function Info(props) {

    const [search, updateSearch] = useState("null")

    return (
        <View>
            <View style={{ paddingHorizontal: 20, paddingTop: 25 }}>
                <TextInput
                    value={search}
                    style={{ backgroundColor: '#EBEBEB', borderRadius: 10, height: 60, width: 280 }}
                ></TextInput>
            </View>
            <View style={styles.container1}>
                <Text style={styles.Header}>Location Tags:</Text>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}>
                    <Button
                        title='North'
                        titleStyle={styles.buttonTitle1}
                        buttonStyle={styles.buttonContainer1}
                    ></Button>
                    <Button
                        title='South'
                        titleStyle={styles.buttonTitle1}
                        buttonStyle={styles.buttonContainer1}
                    ></Button>
                    <Button
                        title='East'
                        titleStyle={styles.buttonTitle1}
                        buttonStyle={styles.buttonContainer1}
                    ></Button>
                    <Button
                        title='West'
                        titleStyle={styles.buttonTitle1}
                        buttonStyle={styles.buttonContainer1}
                    ></Button>
                    <Button
                        title='Central'
                        titleStyle={styles.buttonTitle1}
                        buttonStyle={styles.buttonContainer1}
                    ></Button>
                </ScrollView>
            </View>
            <View style={styles.container1}>
                <Text style={styles.Header}>Spaces Near You</Text>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10 }}
                    horizontal={true}>
                    <TouchableOpacity>
                        <Image
                            style={styles.image4}
                            source={require('./Images/interior1.jpg')}
                        ></Image>
                        <Text style={styles.Description}>
                            Hairflick Salon - ION Orchard
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.image4}
                            source={require('./Images/interior1.jpg')}
                        ></Image>
                        <Text style={styles.Description}>
                            Harbershop - 313@Somerset
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.image4}
                            source={require('./Images/interior1.jpg')}
                        ></Image>
                        <Text style={styles.Description}>
                            Hairflick Salon - ION Orchard
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.image4}
                            source={require('./Images/interior1.jpg')}
                        ></Image>
                        <Text style={styles.Description}>
                            Hairflick Salon - ION Orchard
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.image4}
                            source={require('./Images/interior1.jpg')}
                        ></Image>
                        <Text style={styles.Description}>
                            Hairflick Salon - ION Orchard
                    </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={styles.container1}>
                <Text style={styles.Header}>Recommended</Text>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10 }}
                    horizontal={true}>
                    <TouchableOpacity>
                        <Image
                            style={styles.image4}
                            source={require('./Images/interior1.jpg')}
                        ></Image>
                        <Text style={styles.Description}>
                            Hairflick Salon - ION Orchard
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.image4}
                            source={require('./Images/interior1.jpg')}
                        ></Image>
                        <Text style={styles.Description}>
                            Harbershop - 313@Somerset
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.image4}
                            source={require('./Images/interior1.jpg')}
                        ></Image>
                        <Text style={styles.Description}>
                            Hairflick Salon - ION Orchard
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.image4}
                            source={require('./Images/interior1.jpg')}
                        ></Image>
                        <Text style={styles.Description}>
                            Hairflick Salon - ION Orchard
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.image4}
                            source={require('./Images/interior1.jpg')}
                        ></Image>
                        <Text style={styles.Description}>
                            Hairflick Salon - ION Orchard
                    </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

        </View>
    )
}


const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <View style={{position:'absolute', width:'100%', marginLeft:300, marginTop:24}}>
                <Button
                    icon={
                        <Icon
                            name="search"
                            type='font-awesome'
                            size={28}
                            color="white"
                            containerStyle={{ padding: 10 }}
                        />
                    }
                    containerStyle={{ borderRadius: 10, width: '18%', height:'98%' }}
                    buttonStyle={{ backgroundColor: '#3433C1' }}
                ></Button>
            </View>
            <Info></Info>
            <View>
                <View style={{marginTop:80}}>
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
                            titleStyle={{ fontSize: 6 }}
                            title="Location" />
                        <Tab.Item
                            icon={
                                <Icon
                                    name="calendar"
                                    type='font-awesome'
                                    size={30}
                                />
                            }
                            titleStyle={{ fontSize: 6 }}
                            title="Schedule" />
                        <Tab.Item
                            icon={
                                <Icon
                                    name="home"
                                    type='font-awesome'
                                    size={30}
                                />
                            }
                            titleStyle={{ fontSize: 6 }}
                            title="Home" />
                        <Tab.Item
                            icon={
                                <Icon
                                    name="heart"
                                    type='font-awesome'
                                    size={30}
                                />
                            }
                            titleStyle={{ fontSize: 6 }}
                            title="Liked" />
                        <Tab.Item
                            icon={
                                <Icon
                                    name="user"
                                    type='font-awesome'
                                    size={30}
                                />
                            }
                            titleStyle={{ fontSize: 6 }}
                            title="Profile" />
                    </Tab>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    image4: {
        width: 100,
        height: 100,
        borderRadius: 20,
        marginRight: 15
    },
    Header: {
        fontSize: 25
    },
    Description: {
        width: 100, marginLeft: 5
    },
    container1: {
        marginLeft: 20,
        paddingBottom: 20
    },
    buttonTitle1: {
        fontSize: 18,
        paddingHorizontal: 15
    },
    buttonContainer1: {
        borderRadius: 10,
        marginRight: 20,
        backgroundColor: '#FF4D4D'
    },
});

export default App;