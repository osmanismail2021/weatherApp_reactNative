import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Dimensions} from 'react-native'
import { EvilIcons } from '@expo/vector-icons';


export default function SearchBar({fetchWeatherData}) {

  const [cityName, setCityName] = useState('');

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={{color: 'white', fontWeight: 'bold', width: Dimensions.get('screen').width -20 }}
        placeholder='Enter City name'
        value={cityName}
        onChangeText={(text) => setCityName(text)
       }
      />

      <EvilIcons name='search' size={28} color='black' onPress={() => fetchWeatherData(cityName)} />

    </View>
  )
}

const styles = StyleSheet.create({
    searchBar: {
      marginTop: 35,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: Dimensions.get('screen').width -20,
      borderWidth: 1.5,
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 25,
      marginHorizontal: 10,
      backgroundColor: 'rgba(0,0,0, 0.5)',
      borderColor: 'rgba(0,0,0, 0.5)'

      
    },
    textInput: {
      alignItems: 'center',
      justifyContent: 'space-between',
      width: Dimensions.get('screen').width -20,
      
      
      
      
    }
});