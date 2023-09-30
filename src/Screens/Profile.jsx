import React from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import Button from '../components/ui/Button';
import faceIcon from '../assets/Images/faceIcon.png';
function Profile() {
  return (
    <View style={styles.body}>
      <View style={styles.visiblePart}>
        <View style={styles.ProfileTextBody}>
          <Text style={{color: 'black', fontSize: 30, fontWeight: 600}}>
            Profile
          </Text>
          <View style={styles.ImageBody}>
            <Image
              source={faceIcon}
              style={{resizeMode: 'contain', height: '55%', marginBottom: '3%'}}
            />
            <Text style={{color: 'black', fontSize: 17, fontWeight: 600}}>
              Rohith Nair
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>
              Rohitnair2000@gmail
            </Text>
          </View>
          <View style={styles.ButtonBody}>
            <View style={styles.profileReset}>
              <Button placeholder={'Fresh start'} textColor={'black'} />
            </View>
            <View style={styles.LogOut}>
              <Button placeholder={'LogOut'} textColor={'black'} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.emptySpace}></View>
    </View>
  );
}
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    alignItems: 'center',
    height,
    width,
  },
  visiblePart: {
    flex: 2.5,
    width: '90%',
    // borderWidth: 1,
  },
  ProfileTextBody: {
    flex: 1,
  },
  ImageBody: {
    justifyContent: 'center',
    // borderWidth: 1,
    alignItems: 'center',
  },
  emptySpace: {
    flex: 1,
  },
  profileReset: {
    borderWidth: 1,
    flex: 1,
    borderRadius: 10,
    marginBottom: '3%',
    borderColor: 'lightgray',
  },
  ButtonBody: {
    flex: 1,
  },
  LogOut: {
    borderWidth: 1,
    borderColor: 'lightgray',
    flex: 1,
    borderRadius: 10,
    marginBottom: '3%',
  },
});
export default Profile;
