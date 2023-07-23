import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Calendar from 'react-native-calendars/src/calendar';
function Stats() {
  return (
    <View style={styles.body}>
      <View style={styles.CalendarBody}>
        <Calendar
          style={styles.Calendar}
          current={'2023-07-07'}
          //   hideArrows={true}
          initialDate={'2023-07-07'}
          markedDates={{
            '2023-07-08': {
              selected: true,
              selectedColor: 'skyblue',
            },
            '2023-07-09': {
              selected: true,
              selectedColor: 'skyblue',
            },
            '2023-07-17': {
              selected: true,
              selectedColor: 'skyblue',
            },
            '2023-07-30': {
              selected: true,
              selectedColor: 'skyblue',
            },
          }}
        />
      </View>
      <View style={styles.statsBodyContainer}>
        <View style={styles.StatsContainer}>
          <View style={styles.mondaySatatsColor}></View>
        </View>
        <Text style={styles.mondayText}>Mon</Text>
        <View style={styles.StatsOddContainer}>
          <View style={styles.tuesdaySatatsColor}></View>
        </View>
        <Text style={styles.tuesdayText}>Tues</Text>
        <View style={styles.StatsContainer}>
          <View style={styles.wednesdaySatatsColor}></View>
        </View>
        <Text style={styles.wednesdayText}>Wed</Text>
        <View style={styles.StatsOddContainer}>
          <View style={styles.thursdaySatatsColor}></View>
        </View>
        <Text style={styles.thursdayText}>Thur</Text>
        <View style={styles.StatsContainer}>
          <View style={styles.fridaySatatsColor}></View>
        </View>
        <Text style={styles.fridayText}>Fri</Text>
        <View style={styles.StatsOddContainer}>
          <View style={styles.saturdaySatatsColor}></View>
        </View>
        <Text style={styles.saturdayText}>Sat</Text>
        <View style={styles.StatsContainer}>
          <View style={styles.sundaySatatsColor}></View>
        </View>
        <Text style={styles.sundayText}>Sun</Text>
      </View>
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
  CalendarBody: {
    width: '90%',
    position: 'absolute',
    left: '5%',
    top: '2%',
  },
  Calendar: {
    borderRadius: 30,
    height: 380,
    elevation: 5,
  },

  statsBodyContainer: {
    height: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'relative',
    top: '117%',
    backgroundColor: 'white',
    width: '90%',
    left: '2%',
    elevation: 5,
    borderRadius: 30,
  },
  StatsOddContainer: {
    borderColor: 'lightyellow',
    padding: 3,
    height: '80%',
    width: '5%',
    position: 'relative',
    bottom: '11%',
    borderRadius: 30,
    backgroundColor: '#e8f4f8',
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  StatsContainer: {
    borderColor: 'lightyellow',
    padding: 3,
    height: '80%',
    width: '5%',
    position: 'relative',
    bottom: '11%',
    borderRadius: 30,
    backgroundColor: 'lightyellow',
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  mondaySatatsColor: {
    height: '50%',
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#EEE975',
  },
  tuesdaySatatsColor: {
    height: '79%',
    width: '100%',

    borderRadius: 30,
    backgroundColor: 'lightblue',
  },
  wednesdaySatatsColor: {
    height: '100%',
    width: '100%',

    borderRadius: 30,
    backgroundColor: '#EEE975',
  },
  thursdaySatatsColor: {
    height: '10%',
    width: '100%',
    borderRadius: 30,
    backgroundColor: 'lightblue',
  },
  fridaySatatsColor: {
    height: '20%',
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#EEE975',
  },
  saturdaySatatsColor: {
    height: '100%',
    width: '100%',
    borderRadius: 30,
    backgroundColor: 'lightblue',
  },
  sundaySatatsColor: {
    height: '90%',
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#EEE975',
  },
  mondayText: {
    position: 'absolute',
    left: '7%',
    bottom: '2%',
    color: 'black',
  },
  tuesdayText: {
    position: 'absolute',
    left: '20%',
    bottom: '2%',
    color: 'black',
  },
  wednesdayText: {
    position: 'absolute',
    left: '33%',
    bottom: '2%',
    color: 'black',
  },
  thursdayText: {
    position: 'absolute',
    left: '46%',
    bottom: '2%',
    color: 'black',
  },
  fridayText: {
    position: 'absolute',
    left: '62%',
    bottom: '2%',
    color: 'black',
  },
  saturdayText: {
    position: 'absolute',
    left: '74%',
    bottom: '2%',
    color: 'black',
  },
  sundayText: {
    position: 'absolute',
    left: '86%',
    bottom: '2%',
    color: 'black',
  },
});

export default Stats;
