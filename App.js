import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import NavButton from './components/NavButton';
import Button from './components/Button';
import ColumnsGroup from './components/Columns';
import Animated, {useAnimatedStyle, useSharedValue, Easing, withSpring, withTiming} from 'react-native-reanimated';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';

const PlaceholderImage = require('./assets/icon.png');

export default function App() {

  const translateY = useSharedValue(0);

  const moveUp = () => {
    translateY.value -= 10;
  }
  const moveDown = () => {
    translateY.value += 10;
  }

  const animatedStyles = useAnimatedStyle(() =>({
    transform: [{ translateY: withTiming(translateY.value * 10, {duration: 500, easing: Easing.out(Easing.poly(6))})}],
  }));



  return (
    <View style={styles.container}>
      <ColumnsGroup>
        <StatusBar style="auto" />
      </ColumnsGroup>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
    shadowColor:'black',
    shadowRadius: 0,
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: .3,
  },
  footerContainer: {
    alignItems: 'center',
  },
  title: {
    color: '#fff',
  },
  animBox: {
    backgroundColor: '#fff',
    width: 100,
    height: 100,
  },
  shadowBox: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 30,
    borderCurve: 'continuous',
    shadowColor:'black',
    shadowRadius: 0,
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: .3,
  },
});
