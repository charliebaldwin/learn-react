import { StyleSheet, View, Pressable, Text , FlatList} from "react-native";
import React from 'react';
import Animated, {useAnimatedStyle, useSharedValue, Easing, withSpring, withTiming} from 'react-native-reanimated';
import { ToggleButton } from 'react-native-paper';

import NavButton from "./NavButton";

export default function NavBar ({onNavClicked}) {
    
    const offset = 25;
    const h = 59;
    const [currIndex, setCurrIndex] = React.useState(0);

    const translateY = useSharedValue(offset);
    var oldY = offset;

    const onAnyClicked = (aButton) => {
        setCurrIndex(aButton);
        onNavClicked(aButton);
        return aButton;
    }
    
    
    const animatedStyles = useAnimatedStyle(() => (
        {transform: [{ translateY: withTiming(translateY.value, {duration: 400, easing: Easing.inOut(Easing.poly(4))})}]}
        ));


    return (
        <View style={styles.columns}>
            <View style={styles.scrollerContainer}>
                <Animated.View style={[styles.scroller, animatedStyles]}/>
            </View>
            <View style={styles.buttonsContainer}>
                <NavButton onPressGroup={onAnyClicked} index={0} currIndex={currIndex} icon='home' label='home' targetValue={translateY}        yPos={offset+(h * 0)}/>
                <NavButton onPressGroup={onAnyClicked} index={1} currIndex={currIndex} icon='brush' label='shaders' targetValue={translateY}     yPos={offset+(h * 1)}/>
                <NavButton onPressGroup={onAnyClicked} index={2} currIndex={currIndex} icon='color-filter-outline' label='ui design' targetValue={translateY}   yPos={offset+(h * 2)}/>
                <NavButton onPressGroup={onAnyClicked} index={3} currIndex={currIndex} icon='code-slash' label='scripting' targetValue={translateY}   yPos={offset+(h * 3)}/>
                <NavButton onPressGroup={onAnyClicked} index={4} currIndex={currIndex} icon='briefcase' label='roles' targetValue={translateY}       yPos={offset+(h * 4)}/>
                <NavButton onPressGroup={onAnyClicked} index={5} currIndex={currIndex} icon='person-circle' label='about me' targetValue={translateY}    yPos={offset+(h * 5)}/>
                <NavButton onPressGroup={onAnyClicked} index={6} currIndex={currIndex} icon='mail' label='contact' targetValue={translateY}     yPos={offset+(h * 6)}/>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    columns: {
        flexDirection:'row',
        backgroundColor: '#fff',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,

    },
    scrollerContainer: {
        flex:1,
        alignItems: 'flex-end'
    },
    scroller: {
        height: 47,
        width: 50,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: '#000',
        shadowOffset: {width:4, height: 3},
        shadowColor: 'black',
        shadowRadius: 0,
        shadowOpacity: .5,
    },
    buttonsContainer: {
        justifyContent:'left',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 50,
        paddingLeft: 10,
        height:450,
        flexDirection: 'column',
        flex: 18,
    },
});