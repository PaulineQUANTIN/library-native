import React from 'react';
import {StyleSheet, Text,View} from 'react-native';
import { Image, Card, Button, Icon} from 'react-native-elements';
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
                    style={{ width: 700, height: 700 }}/>
                <Text style={styles.author}>
                    {book.author}
                </Text>
                <Text style={styles.description}>{book.description}</Text>
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
    },
    description: {
        color: "grey"
    },
    author: {
        marginBottom: 10,
        fontSize: 18
    },
  });
 
export default BookScreen;