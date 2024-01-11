import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import logo from '../assets/icon.png';
import React from 'react'

const wid = Dimensions.get("screen").width;
const hit = Dimensions.get("screen").height;


const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image source={logo} style={styles.innerimg} />
      </View>
      <View style={styles.txtcontainer}>
        <Text style={styles.txt}>Developed By Prateek</Text>
      </View>
    </View>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hit,
    width: wid,

    justifyContent: "center",
    alignItems: "center",
  },
  inner: {

    justifyContent: "center",
    alignItems: "center",
  },
  innerimg: {
    height: wid / 2,
    width: wid / 2,
  },
  txtcontainer: {
    marginBottom: -10,
  },
  txt: {
    fontSize: 15,

  }
})