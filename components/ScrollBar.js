import { StyleSheet, View } from "react-native";
import React, {useState} from 'react';
import Animated, {useAnimatedStyle, useSharedValue, Easing, withSpring, withTiming} from 'react-native-reanimated';


export default function ScrollBar ({totalHeight, visibleHeight, scrollPos}) {

    const barFrameSize = visibleHeight * 0.5;
    const visibleRatio = visibleHeight / totalHeight;
    const visiblePercent = visibleRatio * 100;
    const calcBarSize = (visibleHeight / totalHeight) * barFrameSize;


    const sharedPos = useSharedValue(0);
    sharedPos.value = (scrollPos / totalHeight) * barFrameSize;
    const animatedStyles = useAnimatedStyle(() =>({
        transform: [{ translateY: withTiming(sharedPos.value, {duration: 300, easing: Easing.out(Easing.poly(4))})}],
      }));

    return (
        <View style={{
            backgroundColor: '#ddd',
            width: '1vw',
            height: barFrameSize,
            borderRadius:'1vw',
        }}>
            <Animated.View style={[{
                backgroundColor: '#000',
                width: '100%',
                height: `${visiblePercent}%`,
                borderRadius:'1vw',
                transform: [{translateY: scrollPos}],
            }, animatedStyles]}/>
        </View>
    );

}