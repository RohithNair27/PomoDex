import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Work() {
  return (
    <View style={styles.body}>
      <TouchableOpacity style={styles.workContainer}>
        <FontAwesome
          name="laptop"
          size={50}
          color={'lightblue'}
          style={styles.Laptop}
        />
        <Text style={styles.LaptopText}>Work</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.workContainer}>
        <FontAwesome
          name="book"
          size={50}
          color={'black'}
          style={styles.Book}
        />
        <Text style={styles.BookText}>Study</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.workContainer}>
        <MaterialCommunityIcons
          name="hands-pray"
          size={50}
          color={'lightblue'}
          style={styles.Meditate}
        />
        <Text style={styles.MeditateText}>Meditate</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.workContainer}>
        <MaterialIcons
          name="family-restroom"
          size={50}
          color={'black'}
          style={styles.Meditate}
        />
        <Text style={styles.familyTimeText}>FamilyTime</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.workContainer}>
        <MaterialIcons
          name="sports-football"
          size={50}
          color={'lightblue'}
          style={styles.hobbies}
        />
        <Text style={styles.hobbiesText}>Hobbies</Text>
      </TouchableOpacity>
    </View>
  );
}
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  body: {
    height,
    width,
  },
  workContainer: {
    backgroundColor: 'white',
    height: '15%',
    width: '80%',
    position: 'relative',
    top: '10%',
    left: '10%',
    elevation: 5,
    borderRadius: 25,
    marginBottom: 15,
  },
  Laptop: {
    position: 'relative',
    top: '27%',
    left: '6%',
  },
  LaptopText: {
    position: 'relative',
    bottom: '35%',
    left: '50%',
    color: 'black',
    fontSize: 20,
  },
  Book: {
    position: 'relative',
    top: '27%',
    left: '6%',
  },
  BookText: {
    position: 'relative',
    bottom: '35%',
    left: '50%',
    color: 'black',
    fontSize: 20,
  },
  Meditate: {
    position: 'relative',
    top: '27%',
    left: '6%',
  },
  MeditateText: {
    position: 'relative',
    bottom: '35%',
    left: '50%',
    color: 'black',
    fontSize: 20,
  },
  hobbies: {
    position: 'relative',
    top: '27%',
    left: '6%',
  },
  hobbiesText: {
    position: 'relative',
    bottom: '35%',
    left: '50%',
    color: 'black',
    fontSize: 20,
  },
  familyTimeText: {
    position: 'relative',
    bottom: '35%',
    left: '50%',
    color: 'black',
    fontSize: 20,
  },
});
export default Work;
