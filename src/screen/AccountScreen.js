import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text } from 'react-native';

export default function AccountScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('HomePage')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Account Details Screen</Text>
        </View>
    );
}