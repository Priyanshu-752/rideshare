import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
     navigation.navigate('Home');
    },2000)
  },[])

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animatable.Text
        style={{color: 'white', fontSize: 36, fontWeight: '800'}}
        duration={2000}
        animation="fadeInDownBig">
        Splash
      </Animatable.Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
