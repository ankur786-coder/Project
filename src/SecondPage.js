//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Text} from 'react-native';
//import all the components we are going to use.

export default class SecondPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:''
        }
    }
    componentDidMount(){
        const data = this.props.navigation.getParam('data', 'some default value');
        this.setState({
        data
        });
        }
        
  static navigationOptions = {
    title: 'Second Page',
    //Sets Header text of Status Bar
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>{this.state.data}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});