import React, {useEffect, useState, useRef} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {motiviationAxios} from '../Axios/axios';
import {storeDataRead} from '../Redux/workPage/Actions';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

function TimerPage({navigation}) {
  const [seconds, setSeconds] = useState(0 + '0');
  const [minutes, setMinutes] = useState(1);
  const [isRunning, setIsRunning] = useState();
  const [timer, setTimer] = useState(false);
  const [minTimer, setMinTimer] = useState(false);
  const [start, setStart] = useState(0);
  const [quotes, setQuotes] = useState();

  const data = useSelector(state => state.SelectWorkReducer.text);
  let intervalId;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds(seconds - 1);

        if (seconds <= 10 && seconds > 0) {
          setTimer(true);
        }
        if (seconds <= 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
          setTimer(false);
        }
        if (minutes <= 0 && seconds <= 1) {
          dispatch(storeDataRead(25));

          setIsRunning(false);
          setMinutes(1);
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  });

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };
  useEffect(() => {
    motiviationAxios()
      .then(data => {
        setQuotes(data);
      })
      .catch(() => {
        console.log('error');
      });
  }, []);
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.pomoTime}>
        <StatusBar hidden={false} backgroundColor={'#edeff1'} />
      </View>
      <View style={styles.motivationContainer}>
        <Text style={styles.motivationText}>{quotes}</Text>
      </View>
      <View style={styles.sessionTopic}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.stats}
          onPress={() => {
            navigation.navigate('Stats');
          }}>
          <Text style={styles.statsText}>see your stats</Text>
          <Ionicons name="md-stats-chart" color="lightblue" size={45} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topicsButton}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Work');
          }}>
          <Text style={styles.topicsButtonText}>Topics to work</Text>
          <Entypo name="folder" color="lightblue" size={45} />
        </TouchableOpacity>
      </View>
      <View style={styles.TimeCard}>
        <Text style={styles.workTextTimer}>{data}</Text>
        {timer ? (
          <Text style={styles.time}>{minutes + ' : 0' + seconds}</Text>
        ) : (
          <Text style={styles.time}>{minutes + ' : ' + seconds}</Text>
        )}

        <TouchableOpacity style={styles.start} onPress={handleStart}>
          <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.stop} onPress={handleStop}>
          <Text style={styles.stopText}>Stop</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  body: {
    height,
    width,
    backgroundColor: '#edeff1',
  },
  motivationContainer: {
    width: '80%',
    height: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '9%',
  },
  motivationText: {
    // fontFamily: 'Pacifico-Regular',
    color: 'black',
    fontWeight: '600',
    fontSize: 25,
  },
  time: {
    fontFamily: 'play-regular',
    fontSize: 90,
    color: 'lightblue',
    position: 'relative',
    top: '20%',
    left: '14%',
  },

  stop: {
    fontFamily: 'play-regular',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '70%',
    left: '53%',
    backgroundColor: 'lightblue',
    width: '40%',
    height: '20%',
    borderRadius: 10,
    color: 'black',
    elevation: 5,
  },
  start: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    position: 'absolute',
    top: '70%',
    left: '7%',
    backgroundColor: 'lightblue',
    width: '40%',
    height: '20%',
    borderRadius: 10,
    elevation: 5,
  },
  startText: {
    // fontFamily: 'play-regular',
    color: 'black',
    fontWeight: '600',
    fontSize: 20,
  },
  stopText: {
    // fontFamily: 'play-regular',
    color: 'black',
    fontWeight: '600',
    fontSize: 20,
  },
  TimeCard: {
    height: '40%',
    width: '90%',
    borderRadius: 30,
    position: 'absolute',
    top: '45%',
    left: '5%',
    backgroundColor: 'white',
    elevation: 5,
  },
  workTextTimer: {
    color: 'black',
    position: 'relative',
    left: '7%',
    top: '10%',
    fontSize: 20,
  },
  pomoTime: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',

    width: '90%',
    height: '10%',
    left: '4%',
    flexDirection: 'row',
  },
  twentyFiveButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    height: '80%',
    elevation: 5,
    borderRadius: 10,
    left: '12%',
    backgroundColor: '#EEE975',
  },
  twentyFive: {
    color: 'black',
    fontWeight: '600',
    fontSize: 20,
  },
  fiftyButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    height: '80%',
    right: '17%',
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#EEE975',
  },
  fifty: {
    color: 'black',
    fontWeight: '600',
    fontSize: 20,
  },
  container: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    paddingRight: 5,
  },
  progress_bar: {
    width: '100%',
    borderRadius: 26,
    height: '100%',
    padding: 5,
    overflow: 'hidden',
  },
  sessionTopic: {
    height: '23%',
    width: '100%',
    position: 'absolute',
    top: '20%',
  },
  stats: {
    backgroundColor: 'white',
    height: '100%',
    width: '43%',
    position: 'absolute',
    left: '5%',
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  statsText: {
    color: 'black',
    bottom: '15%',
    fontWeight: 'bold',
    // fontFamily: 'play-regular',
  },
  topicsButton: {
    elevation: 5,
    display: 'flex',
    backgroundColor: 'white',
    height: '100%',
    width: '43%',
    position: 'absolute',
    left: '52%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicsButtonText: {
    bottom: '15%',
    color: 'black',
    fontWeight: 'bold',
  },
});
export default TimerPage;
