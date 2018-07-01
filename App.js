
import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image } from 'react-native';


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
          keyExtractor={(item, index)=>item.nome}
          />
      </View>
    );
  }
}

class Filme extends Component {

  render() {
    return(
      <View style={styles.filmeArea}>
        <Image source={{uri:this.props.data.poster.replace('http:','https:')}} style={styles.filmeImage}/>
        <View style={styles.filmeInfo}>
          <Text style={styles.filmeNome}>{this.prop.data.nome}</Text>
          <Text style={styles.filmeData}>{this.prop.data.data}</Text>
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  filmeArea: {
    flex:1,
    flexDirection: 'row',
  },
  filmeImage: {
    width:80,
    height:110,
  },
  filmeInfo: {
    flex:1,
    flexDirection: 'column', 
  },
  filmeNome: {
    
  },
  filmeData: {
    
  }
});
