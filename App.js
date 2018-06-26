
import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, FlatList } from 'react-native';


export default class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    filmes:[]
  };

  fetch('https://filmespy.herokuapp.com/api/v1/filmes')
    .then((r)=>r.json())
    .then((json)=>{
      let state = this.state;
      state.filmes = json.filmes;
      this.setState(state);
    });
}


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.filmes}
          renderItem={({item})=> <Filme data={item} /> }
          />
      </View>
    );
  }
}

class Filme extends Component {

  render() {
    return(
      <Text>...</Text>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
