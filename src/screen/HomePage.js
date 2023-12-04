import React from 'react';
import {View, Text} from 'react-native';

// import Signup from './SignUpScreen';

const HomePage = () => {
  
  return (
    
<View>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>
        </View>
</View>
  )
}

export default HomePage
