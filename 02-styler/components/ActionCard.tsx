import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://picsum.photos/400/200',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            ad delectus dolores porro culpa iusto asperiores sint dolore enim
            mollitia iure earum, dignissimos ipsa provident quidem nisi
            voluptatem rerum obcaecati?
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https:www.github.com/danycalderon16')}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.linkedin.com/in/daniel-calderon-vi/')
            }>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 'auto',
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#e07c24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  headingContainer: {
    height:40,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  headerText: {
    color:"#000",
    fontSize:12,
    fontWeight:"600"
  },
  cardImage: {
    width: 'auto',
    height: 190,
  },
  bodyContainer: {
    padding:10,
  },
  footerContainer: {
    padding:8,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly"
  },
  socialLinks: {
    fontSize:16,
    color:"#000",
    backgroundColor:"#fff",
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:6,
  },
});
