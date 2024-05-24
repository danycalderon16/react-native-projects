import React from 'react'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function ActionCard() {

  function openWebsite(websiteLink:string){
    Linking.openURL(websiteLink)
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>
            What's new in Javascript 21 - ES12
          </Text>
          <Image
            source={{
              uri:"https://picsum.photos/400/200"
            }}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad delectus dolores porro culpa iusto asperiores sint dolore enim mollitia iure earum, dignissimos ipsa provident quidem nisi voluptatem rerum obcaecati?
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=>openWebsite("https:www.github.com/danycalderon16")}>
              <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>openWebsite("https://www.linkedin.com/in/daniel-calderon-vi/")}>
              <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card:{
  },
  elevatedCard:{
    backgroundColor:"#cad5e2",
    elevation:3,
    shadowOffset:{
      width:1,
      height:1
    },
    shadowColor:"#ef5354",
    shadowOpacity:0.4,
    shadowRadius:2
  },
  headingContainer:{
    padding:8,
    backgroundColor:"#cad5e2"
  },
  cardImage:{},
  bodyContainer:{},
  footerContainer:{},
  socialLinks:{}
})