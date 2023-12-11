import { StyleSheet, View } from "react-native";
import React, {useState} from 'react';
import Animated, {useAnimatedStyle, useSharedValue, Easing, withSpring, withTiming} from 'react-native-reanimated';


export default function ScrollBar ({scrollPos}) {

    const [totalSize, setTotalSize] = useState(500);
    const [barSize, setBarSize] = useState(50);
    const calcBarSize = totalSize > barSize ? (barSize * barSize) / totalSize : totalSize;

    const sharedPos = useSharedValue();
    sharedPos.value = scrollPos / 100;
    const animatedStyles = useAnimatedStyle(() =>({
        transform: [{ translateY: withTiming(sharedPos.value * 10, {duration: 100, easing: Easing.out(Easing.poly(6))})}],
      }));

    return (
        <View style={{
            backgroundColor: '#ddd',
            width: 20,
            height: 600,
            borderRadius:10,
        }}>
            <Animated.View style={[{
                backgroundColor: '#000',
                width: '100%',
                height: barSize,
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