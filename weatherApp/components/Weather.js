import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar, ListViewComponent } from 'react-native'
import SearchBar from './SearchBar';
import { haze, rainy, snow, sunny } from '../assets/background/index';


export default function Weather({weatherData}) {

    const [backgroundImage, setBackgroundImage] = useState(null);
    const { weather,
            name,
            main: { temp, humidity },
            wind: { speed }
    } = weatherData;
    const [{ main }] = weather;

    useEffect(() => {
        setBackgroundImage(getBackgroundImg(main));
    }, [weatherData])

    function getBackgroundImg(weather) {
        if(weather === 'Snow') return snow
        if(weather === 'Clear') return sunny
        if(weather === 'Rain') return rainy
        if(weather === 'Haze') return haze
        return haze;
    }

    var textColor = backgroundImage !== sunny ? 'white' : 'orange'; 
    

  return (
    <View style={styles.container}>

    <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode={'cover'}
    >

    <SearchBar />

    

    <View style={styles.headerText} >
        <Text style={ ...styles.headerText, color:textColor, filter: }>{name}</Text>
        <Text style={ ...styles.headerText, color:textColor}>{main}</Text>
        <Text style={ ...styles.headerText, color:textColor}>{temp} °C</Text>
    </View>

    <View style={{flexDirection: 'row'}}>

        <View style={styles.extraInfo}>
            <Text style={{fontSize: 22, color: 'white'}}>Humidity</Text>
            <Text style={{fontSize: 22, color: 'white'}}>{humidity} %</Text>
        </View>

        <View style={styles.info}>
            <Text style={{fontSize: 22, color: 'white'}}>Wind Speed</Text>
            <Text style={{fontSize: 22, color: 'white'}}>{speed} m/s</Text>
        </View>

    </View>



    </ImageBackground>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    backgroundImage: {
        flex:1,
        width: Dimensions.get('screen').width,
        height: '100%',
    },
    headerText: {
        fontSize: 40,
        marginTop: 10,
        textAlign: 'center',
        
        
        },
    extraInfo: {
        flexDirection: 'row'
    }
  
})