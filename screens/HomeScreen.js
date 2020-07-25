import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

// const [modalVisible, setmodalVisible] = useState("");
function HomeScreen({navigation}) {
    function navigateToLibrary() {
        navigation.reset({
            index: 0,
            routes: [
                {name: "library"}
            ]
        });
    }

    return(
        <View style={styles.container}>
            <Text>Logo</Text>
            <Button title="Start" onPress={navigateToLibrary} />

            {/* <Button visible={modalVisible}/>
            <Modal>
                <Text>Coucou !</Text>
            </Modal> */}
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  
export default HomeScreen;