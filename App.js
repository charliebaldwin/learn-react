import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated';

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
    transform: [{ translateY: withSpring(translateY.value * 10)}],
  }));



  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageContainer, animatedStyles]}>
        <ImageViewer imgSource={PlaceholderImage}/>
      </Animated.View>

      {/* <Animated.View style={[styles.animBox, animatedStyles]} /> */}

      <View style={styles.footerContainer}>
        <Button label="move up" onPress={ moveUp }/>
        <Button label="move down" onPress={ moveDown }/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
  },
  animBox: {
    backgroundColor: '#fff',
    width: 100,
    height: 100,
  }
});
