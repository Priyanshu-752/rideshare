import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';

// eslint-disable-next-line react/prop-types
const Splash = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
     // eslint-disable-next-line react/prop-types
     navigation.navigate('SignUpScreen');
    },2000)
  },[])

  return (
    <View
      style={styles.container}>
      <Animatable.Text
        style={{color: 'white', fontSize: 36, fontWeight: '800'}}
        duration={2000}
        animation="fadeInDownBig">
        USK
      </Animatable.Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
