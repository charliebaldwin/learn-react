import { StyleSheet, View, Pressable, Text , FlatList} from "react-native";
import Animated, {useAnimatedStyle, useSharedValue, Easing, withSpring, withTiming} from 'react-native-reanimated';

import NavButton from "./NavButton";

export default function NavBar (props) {
    
    const translateY = useSharedValue(0);
    
    const animatedStyles = useAnimatedStyle(() =>({
        transform: [{ translateY: withTiming(translateY.value, {duration: 600, easing: Easing.inOut(Easing.poly(4))})}],
    }));

    const offset = 24;
    const h = 92;

    return (
        <View style={styles.columns}>
            <View style={styles.scrollerContainer}>
                <Animated.View style={[styles.scroller, animatedStyles]}/>
            </View>
            <View style={styles.buttonsContainer}>
                <NavButton label='button' targetValue={translateY} yPos={offset+(h * 0)}/>
                <NavButton label='button' targetValue={translateY} yPos={offset+(h * 1)}/>
                <NavButton label='button' targetValue={translateY} yPos={offset+(h * 2)}/>
                <NavButton label='button' targetValue={translateY} yPos={offset+(h * 3)}/>
                <NavButton label='button' targetValue={translateY} yPos={offset+(h * 4)}/>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    columns: {
        flexDirection:'row',
        borderWidth:2,
        borderColor:'green',
    },
    scrollerContainer: {
        flex:1,
    },
    scroller: {
        height: 85,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#000',
    },
    buttonsContainer: {
        justifyContent:'center',
        padding: '2vw',
        height:500,
        flexDirection: 'column',
        flex: 15,
    },
});