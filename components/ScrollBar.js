import { StyleSheet, View } from "react-native";
import React, {useState} from 'react';
import Animated, {useAnimatedStyle, useSharedValue, Easing, withSpring, withTiming} from 'react-native-reanimated';


export default function ScrollBar ({totalHeight, visibleHeight, scrollPos}) {

    const barFrameSize = 600;

    const [totalSize, setTotalSize] = useState(totalHeight);
    const [visibleSize, setVisibleSize] = useState(visibleHeight);

    const calcBarSize = (visibleSize / totalSize) * barFrameSize;


    const sharedPos = useSharedValue();
    sharedPos.value = (scrollPos / totalSize) * barFrameSize;
    const animatedStyles = useAnimatedStyle(() =>({
        transform: [{ translateY: withTiming(sharedPos.value, {duration: 100, easing: Easing.out(Easing.poly(6))})}],
      }));

    return (
        <View style={{
            backgroundColor: '#ddd',
            width: 20,
            height: barFrameSize,
            borderRadius:10,
        }}>
            <Animated.View style={[{
                backgroundColor: '#000',
                width: '100%',
                height: calcBarSize,
                borderRadius:10,
                transform: [{translateY: scrollPos}],
            }, animatedStyles]}/>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        width: 20,
        height: '100%',
        borderRadius:10,
    },
});