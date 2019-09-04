import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    backgroundColor: '#73A686',
    paddingTop: 50,
  },
  header: {
    paddingTop: 200
  },
  carouselScroll: {
    height: 200
  },
  forecastContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('window').width * .95,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20
  },
  currentIcon: {
    height: 100,
    width: 100,
  },
  currentWeatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 320,
    alignItems: 'center'
  }
})