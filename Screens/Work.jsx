import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import TopicToWorkOn from '../components/topicToWorkOn';
import {
  storeDataWork,
  storeDataFamilyTime,
  storeDataMeditate,
} from '../Redux/workPage/Actions';
function Work({navigation}) {
  const comeBack = () => {
    navigation.navigate('TabNavigation');
  };
  return (
    <View style={styles.body}>
      <TopicToWorkOn
        name={'laptop'}
        text={'Work'}
        navigatee={comeBack}
        action={storeDataWork}
      />
      {/* <TopicToWorkOn name={'book'} text={'Read'} navigatee={comeBack} /> */}
      <TopicToWorkOn
        name={'book'}
        text={'Meditate'}
        navigatee={comeBack}
        action={storeDataMeditate}
      />
      {/* <TopicToWorkOn
        name={'book'}
        text={'familytime'}
        navigatee={comeBack}
        action={storeDataFamilyTime}
      />   */}
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
