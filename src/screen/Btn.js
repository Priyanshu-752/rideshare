import { Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({bgColor, btnLabel, textColor, Press}) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 10,
        alignItems: 'center',
        width: 350,
        paddingVertical: 10,
        marginTop: 50,
        marginBottom: 20,
      }}>
      <Text style={{color: textColor, fontSize: 20, fontWeight: 'medium'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}