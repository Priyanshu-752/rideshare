import React from 'react';
import {TextInput} from 'react-native';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 100, color: 'black', paddingHorizontal: 30, width: '78%', backgroundColor: 'white', marginVertical: 15}}
      placeholderTextColor='black'></TextInput>
  );
};

export default Field;