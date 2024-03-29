/* eslint-disable no-undef */
import React , {useEffect, useState} from 'react';
import { View,Text, SafeAreaView,Image,TouchableOpacity,StyleSheet} from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  import Share from 'react-native-share';
  import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const AccountScreen = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState('');

  // useEffect(() => {
  //   getData();
  // }, []);

  // const handleBackPress = () => {
  //   // Show exit confirmation dialog only for AccountScreen
  //   if (navigation.isFocused()) {
  //     Alert.alert(
  //       'Exit App',
  //       'Are you sure you want to exit?',
  //       [{
  //         text: 'Cancel',
  //         onPress: () => null,
  //         style: 'cancel'
  //       }, {
  //         text: 'Exit',
  //         onPress: () => BackHandler.exitApp(),
  //       }]
  //     );
  //     return true;
  //   }
  //   return false;
  // };

  // useEffect(() => {
  //   // Add back press event listener when the screen is focused
  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

  //   // Remove back press event listener when the screen is unfocused
  //   return () => {
  //     backHandler.remove();
  //   };
  // }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    axios.post('http://192.168.29.137:3000/userdata', { token: token })
      .then(res => {
        console.log(res.data);
        setUserData(res.data.data);
      });
  };

  const myCustomShare = async () => {
    const shareOptions = {
      message: 'Order your next ride from Uber App.',
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  };

  const signOut = () => {
    AsyncStorage.setItem('isLoggedIn', '');
    AsyncStorage.setItem('token', '');
    navigation.navigate('LogNav');
  };


    return (
        <SafeAreaView style={styles.container}>

        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <View style={{marginLeft: 20}}>
              <Text style={[styles.title, {
                marginTop:15,
                marginBottom: 5,
              }]}>{userData.name}</Text>
              <Text style={styles.caption}>{userData.email}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')} >

              <Image source={ require('../Images/ride.png')} style={styles.Image} />
            </TouchableOpacity>
          </View>
        </View>
  
        <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {
              borderRightColor: 'transparent',
              borderRightWidth: 5,
              borderRadius:15,
              marginHorizontal:10,
            }]}>
              <Text style={styles.title}>Help</Text>
              
            </View>
            <View style={[styles.infoBox, {
              borderRightColor: 'transparent',
              borderRightWidth: 5,
              borderRadius:15,
              marginRight:10,
            }]}>
              <Text style={styles.title}>Payment</Text>
            </View>
            
            <View style={styles.infoBox}>
              <Text style={styles.title}>Activities</Text>
            </View>
        </View>
        <View style = {styles.lineStyle} />
  
        <View style={styles.menuWrapper}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="heart-outline" color="#26D8D1" size={25}/>
              <Text style={styles.menuItemText}>Your Favorites</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="credit-card" color="#26D8D1" size={25}/>
              <Text style={styles.menuItemText}>Payment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={myCustomShare}>
            <View style={styles.menuItem}>
              <Icon name="share-outline" color="#26D8D1" size={25}/>
              <Text style={styles.menuItemText}>Tell Your Friends</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="account-check-outline" color="#26D8D1" size={25}/>
              <Text style={styles.menuItemText}>Support</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="security" color="#26D8D1" size={25}/>
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => signOut()}>
            <View style={styles.menuItem}>
              <Icon name="exit-to-app" color="#26D8D1" size={25}/>
              <Text style={styles.menuItemText}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default AccountScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userInfoSection: {
      marginHorizontal:10,
      marginBottom: 40,
      marginTop:40,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: 'transparent',
      borderBottomWidth: 5,
      borderTopColor: 'transparent',
      borderTopWidth: 5,
      flexDirection: 'row',
      height: 100,
      
    },
    infoBox: {
      width: '30%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#dddddd',
      borderRadius:15,
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
    Image:{
      marginTop:20,
      borderRadius:30,
      marginHorizontal:160,
    },
    lineStyle:{
      borderWidth: 1,
      borderColor:'#dddddd',
      marginTop:20,
 }
  });