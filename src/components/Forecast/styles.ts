import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F76F0',
    padding: 5,
    borderRadius: 50,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    alignItems: 'center',
  },
  time: {
    color: 'white',
    marginBottom: 8,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  temp: {
    color: 'white',
    marginTop: 8,
  },
});

export default styles;
