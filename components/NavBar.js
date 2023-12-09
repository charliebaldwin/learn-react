import { StyleSheet, View, Pressable, Text , FlatList} from "react-native";
import Animated, {useAnimatedStyle, useSharedValue, Easing, withSpring, withTiming} from 'react-native-reanimated';

import Button from "./Button";

export default function NavBar (props) {
    
    const translateY = useSharedValue(0);
    
    const setScrollerY = () => {
        translateY.value = Math.random() * 500;
    }
    const animatedStyles = useAnimatedStyle(() =>({
        transform: [{ translateY: withTiming(translateY.value, {duration: 800, easing: Easing.inOut(Easing.poly(6))})}],
    }));

    return (
        <View style={styles.columns}>
            <View style={styles.scrollerContainer}>
                <Animated.View style={[styles.scroller, animatedStyles]}/>
            </View>
            <View style={styles.buttonsContainer}>
                <Button label='button' onPress={setScrollerY}/>
                <Button label='button' onPress={setScrollerY}/>
                <Button label='button' onPress={setScrollerY}/>
                <Button label='button' onPress={setScrollerY}/>
                <Button label='button' onPress={setScrollerY}/>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    columns: {
        flexDirection:'row',
    },
    scrollerContainer: {
        justifyContent:'center',
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
        padding: 20,
        height:500,
        flexDirection: 'column',
        flex: 15,
    },
});