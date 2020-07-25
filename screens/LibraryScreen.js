import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ListItem, Input } from 'react-native-elements';
import Book from '../datas/books.json';
import { AntDesign } from '@expo/vector-icons'; 
import axios from 'axios';
// import { TouchableWithoutFeedback, Keyboard } from 'react-native';

function LibraryScreen({navigation}) {
/*
function closeKeyboard() {
  Keyboard.dismiss();
}
*/

function getBooks() {
  axios.get('')
}
    return(
      // <TouchableWithoutFeedback onPress={closeKeyboard}>
        <View style={styles.container} >
            <Input
              placeholder='Chercher un livre...' 
            />
            {
              Book.map((b, i) => (
                <ListItem
                  onPress={() => navigation.navigate("book", {title: b.title, author: b.author, description: b.description, image: b.image})}
                  key={i}
                  leftAvatar={<AntDesign name="book" size={24} color="black" />}
                  title={b.title}
                  subtitle={b.author}
                  style={styles.bookslist}
                  bottomDivider
                />
              ))
            }
        </View>
        // </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'start',
      justifyContent: 'start',
    },
  });
  

export default LibraryScreen;