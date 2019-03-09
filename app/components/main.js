/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Note from './note';

type Props = {};
export default class Main extends Component<Props> {
  
  constructor(props){
    super(props);
    this.state={
      noteArray: [],
      noteText: '',
    }
  }

  render() {    
    let notes = this.state.noteArray.map((val, key) => { 
      return <Note key={key} keyval={key} val={val} 
      deleteMethod={() => this.deleteNote(key)}/>
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textheader}>- Note -</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>
        <View style={styles.footer}>
          <TextInput
          onChangeText={(noteText) => this.setState({noteText})}
          style={styles.textInput}
          placeholder="Write Here"
          placeholderTextColor="white"/>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
          <Text style={styles.addButtonText}> + </Text>
        </TouchableOpacity>
      </View>
    );
  }
  addNote() {
    if(this.state.noteArray){
      var d = new Date();
      this.state.noteArray.push({
        'date' : d.getFullYear() + 
        '/' + (d.getMonth() + 1) +
        '/' + d.getDate(),
        'note' : this.state.noteText
      });
      this.setState({ noteArray: this.state.noteArray })
      this.setState({ noteText: '' })
    }
  }
  deleteNote(key){
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#3366cc',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  textheader: {
    color: 'white',
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 15,
  },
  scrollContainer:{
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom:0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 30,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 10,
    bottom: 100,
    backgroundColor: '#3366cc',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
  },
});
