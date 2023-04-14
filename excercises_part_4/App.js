import * as React from 'react';
import { Text, View, Button, ActivityIndicator, TextInput, ScrollView,  StyleSheet, Alert, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Stack = createStackNavigator();

let listOfWelcome = ["Note 1","Note 2","Note 3","Note 4","Note 5","Note 6","Note 7","Note 8","Note 9","Note 10","Note 11","Note 12","Note 13","Note 14","Note 15","Note 16","Note 17","Note 18","Note 19","Note 20","Note 21"];
let counter = 0;

class defaScreen extends React.Component {
  render() {
    //Alert.alert("render test alert")

    return (
      <View style={styles.mainContainer}>
        <View style={styles.welcomeScreen}>
          <Text style={styles.welcomeText}> Welcome to Botond's note application! </Text>
          <Text style={styles.welcomeText}> Press the button to start adding notes</Text>
        </View>
        <View style={styles.bottomPos}>
          <Pressable
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("Notes")
            }}
          >
            <Text>ADD NOTES</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

class nScreen extends React.Component {
  state = {
    noteList: []
  }

  getData = async () => {
    try {
      const noteListIn = await AsyncStorage.getItem('asyncWelcome')
      if(noteListIn !== null) {
        this.setState({noteList: JSON.parse(noteListIn)})
        //Alert.alert("getData called")
      }
    } catch(e) {
      Alert.alert(e)
    }
  }

  storeData = async () => {
    //Alert.alert("storeData called from nScreen")
    try {
      const jsonValue = JSON.stringify(this.state.noteList)
      await AsyncStorage.setItem('asyncWelcome', jsonValue)
    } catch (e) {
      Alert.alert(e)
    }
  }  

  constructor(){
    super()
    this.getData()
    //Alert.alert("defaScreen Constructor activated")
  }

  updateIText = (text) => {
    this.setState({ inpText: text })
  }

  render() {
    //Alert.alert(this.state.noteList[2])

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={{ flex: 1 }}>
          {this.state.noteList.map(note => <Text>{note}</Text>)}
        </ScrollView>
        <TextInput
          style={styles.input}
          placeholder = "Enter text here"
          onChangeText={this.updateIText}
        />
        <Pressable
          style={styles.button}
          onPress={() => {
            if(this.state.noteList.includes(this.state.inpText)){
              Alert.alert("Error", "The note you are trying to create already exists.")
            } else {
              this.state.noteList.push(this.state.inpText)
              this.storeData();
              this.getData();

              /*
               * NOTE!
               * Due to an unknown reason the updated values don't 
               */
            }
          }}
        >
          <Text>ADD NOTE</Text>
        </Pressable>
      </View>
    );
  }
}

export default function App() {
  const storeData = async () => {
    //Alert.alert("store data called from root")
    try {
      const jsonValue = JSON.stringify(listOfWelcome)
      await AsyncStorage.setItem('asyncWelcome', jsonValue)
    } catch (e) {
      Alert.alert(e)
    }
  }

  if (counter == 0) {
    storeData();
    counter++
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={defaScreen} />
        <Stack.Screen name="Notes" component={nScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#f5ffff',
  },

  welcomeText:{
    fontSize: 17, 
    fontWeight: "bold", 
    color: '#003750',
  },

  welcomeScreen:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  bottomPos:{
    bottom:0,
    backgroundColor: '#ffffff'
  },

  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },

  button:{
    height: 40,
    backgroundColor:"#6dd7fd",
    justifyContent: "center",
    alignItems: "center",
  }
});

