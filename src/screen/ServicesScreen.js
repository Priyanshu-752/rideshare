import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { filterData } from '../utilities/data'
import { colors } from '../utilities/Constants'


const ServicesScreen = () => {
  return (
    <View>
      <Text style={{ color: 'black', fontSize: 25, fontWeight: '700', marginLeft: 20, marginTop: 80, marginBottom: 20 }}>Suggestions </Text>
      <FlatList
        numRows={4}
        data={filterData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image style={styles.image2} source={item.image} />
            <View style={styles.subContainer}>
              <Text style={styles.title}>{item.name}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default ServicesScreen

const styles = StyleSheet.create({
  image2: {
    height: 70, width: 70,
    borderRadius: 15,

  },

  container: {
    padding: 10,
    backgroundColor: colors.grey5,
    borderRadius: 15,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginLeft: 10,
    marginRight: 10
  },

  subContainer: {
    display: 'flex',
    gap: 8
  },

  title: {
    color: colors.black,
    fontSize: 20,
    marginTop: 15,
    alignItems: 'center',
    marginStart: 10

  },
})