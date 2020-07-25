import React from 'react';
import {StyleSheet, Text,View} from 'react-native';
import { Image, Card } from 'react-native-elements';
import Book from '../datas/books.json';
import { AntDesign } from '@expo/vector-icons';

const BookScreen = ({navigation, route}) => {

    const book = route.params;
    console.log(book.image)
    return (  
        <View style={styles.container} >
            <Card
                title={book.title} 
                titleStyle={{fontSize: 24}}>
                <Image 
                    source={{ uri: book.image}}
                    style={{ width: "auto", height: 700 }}/>
                <Text style={styles.author}>
                    Auteur : <br></br>{book.author}
                </Text>
                <Text style={styles.description}>Résumé : <br></br>{book.description}</Text>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: 900,
      margin: "auto"
    },
    description: {
        color: "grey"
    },
    author: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 18
    },
  });
 
export default BookScreen;