import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#477DF3',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 14,
  },
  icon: {
    alignSelf: 'flex-end',
    paddingRight: 14,
  },
  location: {
    padding: 14,
    marginTop: 32,
  },
  city: {
    color: 'white',
    fontSize: 32,
    fontWeight: '600',
  },
  country: {
    color: 'white',
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 10,
  },
  date: {
    color: 'white',
  },
  weather: {
    marginTop: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperature: {
    color: 'white',
    fontSize: 86,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontSize: 22,
    fontWeight: '300',
    marginLeft: 10,
  },
  forecast: {
    backgroundColor: '#75A1FF',
    width: Dimensions.get('window').width,
    height: 250,
    borderRadius: 50,
    marginTop: 130,
    padding: 32,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyIcon: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default styles;
