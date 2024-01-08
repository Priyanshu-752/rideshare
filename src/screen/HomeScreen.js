import { StyleSheet, Text, View,ScrollView,Image,FlatList,StatusBar, Dimensions} from 'react-native'
import React from 'react'
import { Icon} from 'react-native-elements'
import { colors,parameters } from '../utilities/Constants'
import { filterData } from '../utilities/data'
const SCREEN_WIDTH = Dimensions.get('window').width
const {height,width} = Dimensions.get('window')



const HomeScreen = () => {
  return (
    <View style ={styles.container}>
    <ScrollView bounces ={false}>
        <View style ={styles.home}>
            <View style ={styles.view1}>
            <Text style = {styles.text1}>Welcome to Rideshare</Text>
                <View  style ={styles.view8}>

                    
                        
                    
                </View>
                <View>
                    <Image 
                        style ={styles.image1}
                        // eslint-disable-next-line no-undef
                        source = { require('../Images/uberCar.png')}
                    />
                </View>
            </View>
        </View>
        <FlatList 
                data={filterData}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor = {(item)=>item.id}
                    renderItem = { ({item})=>(
                  
                  <View style={{marginRight:15}}>
                          <Image style={styles.sliderImage} source={item.image}/>    
                        </View>
                      
                )}
                
                />

            <View style ={styles.view3}>
            <Icon type = "material-community"
                        name ="map-search-outline"
                        color = {colors.grey1}
                        size = {26}
                        marginLeft={20}
                     />  
                <Text style ={styles.text3}> Where to ?</Text>  
                <View style ={styles.view4}>
                    <Icon type = "material-community"
                        name ="clock-time-four"
                        color = {colors.grey1}
                        size = {26}
                     /> 
                     <Text style ={{marginLeft:5}}>Now</Text> 
                     <Icon type = "material-community"
                        name ="chevron-down"
                        color = {colors.grey1}
                        size = {26}
                     />  
                </View>     
            </View>
            <View style ={styles.view5}>
                <View style ={styles.view6}>
                    <View style ={styles.view7}>
                        <Icon type = "material-community"
                            name ="map-marker"
                            color = {colors.black}
                            size = {22}
                        />
                    </View>
                    <View>
                        <Text style ={{fontSize:18,color:colors.black}}>Rampur Rd</Text>
                        <Text style ={{color:colors.grey3}}>DewalChud, Haldwani</Text>
                    </View>
                </View>
                <View>
                    <Icon type = "material-community"
                                name ="chevron-right"
                                color = {colors.grey}
                                size = {26}
                            />
                    </View>
            </View>
            <View>
              <Text style={{color:'black', fontSize:20, fontWeight:'600', marginLeft:20, marginTop:20}}>Suggestions </Text>
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
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <View >
                <Text style={{color:'black', fontSize:20, fontWeight:"500",marginLeft:20, marginTop:30}} >Ways to plain with Uber</Text>
                <FlatList 
                data={filterData}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor = {(item)=>item.id}
                    renderItem = { ({item})=>(
                  
                  <View style={{width:width/2, height:height/2, justifyContent:'center', alignItems:'flex-start', marginTop:-80, marginLeft:20}}>
                          <Image style={{width:'100%', height:'40%', borderRadius:20}} source={item.image}/>
                          <Text style={{color:'black', fontSize:15, fontWeight:'500', marginTop:10, marginRight:60}}>{item.text}</Text>        
                        </View>
                      
                )}
                
                />
              </View>

            </View>
            </ScrollView>
            <StatusBar style ="light" backgroundColor = "#2058c0" translucent ={true} />
            </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text:{
    fontSize:20,
    fontWeight:'bold',
    color:'blue'
  },
  sliderImage:{
width:240,
height:120,
borderRadius:20,
marginLeft:20,
objectFit:'contain',
marginTop:20
  },

  text0:{
    fontSize:30,
    fontWeight:'bold',
    color:'white',
    marginTop:20,
    marginLeft:20
  },
  container:{
    flex:1,
    backgroundColor:colors.white,
    paddingBottom:30,
    paddingTop:parameters.statusBarHeight
},
header:{
  backgroundColor:colors.blue,
  height:parameters.headerHeight,
  alignItems:"flex-start"
 
},

image1:{
 
  height:100,
  width:100,

},

image2:{height:60,width:60,
        borderRadius:30,
      },

home:{
 backgroundColor:colors.blue,
 paddingLeft:20,
 
},

text1:{
 color:colors.white,
 fontSize:21,
 paddingBottom:20,
 paddingTop:20
},

text2:{
 color:colors.white,
 fontSize:16
},

view1:{
 flexDirection:"row",
 flex:1,
 paddingTop:20
},

button1:{
  height:40,
  width:150,
  backgroundColor:colors.black,
  borderRadius:20,
  alignItems:"center",
  justifyContent:"center",
  marginTop:20
},

button1Text:{
 color:colors.white,
 fontSize:17,
 marginTop:-2

},
card:{
 alignItems:"center",
 margin:SCREEN_WIDTH/22

},

view2:{marginBottom:5,
      borderRadius:15,
      backgroundColor:colors.grey6
    },

    title:{
      color:colors.black,
      fontSize:16
    },
view3:{flexDirection:"row",
         marginTop :20,
         height:55,
         backgroundColor:colors.grey6,
         alignItems:"center",
         justifyContent:"space-between",
        marginHorizontal:15,
        borderRadius:20
        
         },
text3:{marginEnd:110,
        fontSize:20,
        color:colors.black
  },

view4:{ flexDirection:"row",
        alignItems:"center",
        marginRight:15,
        backgroundColor:"white",
        paddingHorizontal:10,
        paddingVertical:2,
        borderRadius:20
        },

view5:{ flexDirection:"row",
alignItems:"center",
backgroundColor:"white",
paddingVertical:25,
justifyContent:"space-between",
marginHorizontal:15,
borderBottomColor:colors.grey4,
borderBottomWidth:1,
flex:1
},

view6:{


alignItems:"center",
flex:5,
flexDirection:"row"
},
view7:{
backgroundColor:colors.grey6,
height:40,
width:40,
borderRadius:20,
alignItems:"center",
justifyContent:"center",
marginRight:20

},

map:{
   
height: 150,
 marginVertical: 0,
 width:SCREEN_WIDTH*0.92
},

text4:{ fontSize:20,
      color:colors.black,
      marginLeft:20,
      marginBottom:20
    },

icon1:  {marginLeft:10,
       marginTop:5
      },

view8: {flex:4,
      marginTop:-25
    } ,
carsAround: {
width: 28,
height: 14,

}, 

location: {
  width: 16,
  height: 16,
  borderRadius:8,
  backgroundColor:colors.blue,
  alignItems:"center",
  justifyContent:"center"
  
  }, 
  
view9:{width:4,
height:4,
borderRadius:2,
backgroundColor:"white"
}
})
