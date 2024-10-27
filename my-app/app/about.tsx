import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

const LocationExample = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getLocation = async () => {
    // Request permission to access location
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Please enable location services to continue');
      return;
    }

    // Get the current location
    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={getLocation}>
        <Text style={styles.buttonText}>Get Location</Text>
      </TouchableOpacity>
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      {location ? (
        <>
          <Text>
            Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
          </Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922, // Control zoom level
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title={"You are here!"}
            />
          </MapView>
        </>
      ) : (
        <Text>Location not yet retrieved.</Text>
      )}
    </View>
  );
};

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
    </View>
  );
};

// Export both components; only one as default
export default LocationExample;
export { AboutScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0a81a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
  },
  button: {
    backgroundColor: '#d85116', 
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#000000',
    fontSize: 32,
  },
  map: {
    width: '100%',
    height: 300, // Adjust height as necessary
    marginTop: 20,
  },
});
