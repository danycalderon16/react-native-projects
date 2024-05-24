import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards({uri}:{uri:string}) {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri,
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink Cit jaupur</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum
            ex sunt quam libero deserunt voluptas, sit necessitatibus eum esse
            voluptate numquam?
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
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
    width: 330,
    backgroundColor: '#f2f2f2',
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#fff',
    color: '#000',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius:6,
    borderTopRightRadius:6
  },
  cardBody: {
    flex:1,
    flexGrow:1,
    paddingHorizontal:12
  },
  cardTitle: {
    color: '#000',
    fontSize:22,
    fontWeight:'bold',
    marginBottom:4
  },
  cardLabel: {
    color: '#000',
    fontSize:16,
    marginBottom:6
  },
  cardDescription: {
    color: '#242b2e',
    fontSize:12,
    marginBottom:12,
    marginTop:6,
    flexShrink:1
  },
  cardFooter: {
    color: '#000',
  },
});
