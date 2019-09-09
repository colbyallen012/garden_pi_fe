import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  widget: {
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: '#d5fdd5',
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    justifyContent: 'space-between',
    margin: 3,
    padding: 12,
    width: Dimensions.get('window').width * .41
  },
  summary: {
    width: 90,
    marginLeft: 10,
  },
  icon: {
    width: 200,
    height: 80,
    marginLeft: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bold: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});