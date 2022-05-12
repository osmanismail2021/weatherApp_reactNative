import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Weather from './components/Weather'

const API_KEY = "38d854fd99408e63fe018f97cca658f9";

export default function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);

  async function fetchWeatherData(cityName) {
      setLoaded(false);
      const API =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
      try {
        const response = await fetch(API);
        if(response.status == 200) {
          const data = await response.json();
          setWeatherData(data);
        } else {
          setWeatherData(null);
        }
        setLoaded(true);
      } catch (error) {
        console.log(error);
      }
  }

      useEffect(() => {
        fetchWeatherData('Antwerp');
        console.log(weatherData);
      }, [])

      if(!loaded) {
        return (
          <View style={styles.container}>
            <ActivityIndicator color='blue' size={36} />
          </View>
        )
      }

      else if(weatherData === null) {
        return (
        <View></View>
        )
      }

  return (
    <View style={styles.container}>
        <Weather weatherData={weatherData} />
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
});
