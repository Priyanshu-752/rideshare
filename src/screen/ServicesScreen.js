import { StyleSheet, Text, View, FlatList, Image,Dimensions } from 'react-native'
import React from 'react'
import { filterData } from '../utilities/data'
import { colors} from '../utilities/Constants'
const SCREEN_WIDTH = Dimensions.get('window').width


const ServicesScreen = () => {
  return (
    <View>
    <Text style={{color:'black', fontSize:25, fontWeight:'700', marginLeft:20, marginTop:80, marginBottom:20}}>Suggestions </Text>
      <FlatList 
          numRows ={4}
          horizontal = {true}
          showsHorizontalScrollIndicator ={false}

          data ={filterData}
          keyExtractor = {(item)=>item.id}
          renderItem = { ({item})=>(
              <View style = {styles.card}>
                  <View style ={styles.view2}>
                      <Image style ={styles.image2} source = {item.image} />
                  </View>
                  <View>
                      <Text style ={styles.title}>{item.name}</Text>
                  </View>
              </View>
          )}
      />
  </View>
  )
}

export default ServicesScreen

const styles = StyleSheet.create({
    image2:{height:60,width:60,
        borderRadius:30,
      },
      view2:{marginBottom:5,
        borderRadius:15,
        backgroundColor:colors.grey6
      },
      card:{
        alignItems:"center",
        margin:SCREEN_WIDTH/22
       
       },
  
      title:{
        color:colors.black,
        fontSize:16
      },
})