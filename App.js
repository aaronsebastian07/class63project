import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'

export default class App extends React.Component {
  constructor(){ 
    super();
    this.state={
      text:"",
      displayText:"",
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <Header backgroundColor='yellow' centerComponent={{text:"Dictionary App",style:{color:'blue',fontSize:20,fontWeight:'bold'}}}/>
      <TextInput onChangeText = {(text)=>{
        this.setState({text:text}) 
      }} style={styles.textInput} value={this.state.text}
      ></TextInput>
      <TouchableOpacity style={styles.goButton} onPress={()=>{this.setState({displayText:this.state.text})}}>
      <Text style={styles.buttonText}>GO</Text>
      </TouchableOpacity>
      <Text  style={styles.buttonText}>{this.state.displayText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput:{
    marginTop:200,
    width:'80%',
    alignSelf:'center',
    height:40,
    textAlign:'center',
    borderWidth:4
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
    buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
 container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  }
});
