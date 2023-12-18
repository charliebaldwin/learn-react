import { StyleSheet, View, Pressable, Text , FlatList} from "react-native";
import React from 'react';
import Animated, {useAnimatedStyle, useSharedValue, Easing, withSpring, withTiming} from 'react-native-reanimated';
import { ToggleButton } from 'react-native-paper';

import NavButton from "./NavButton";

export default function NavBar ({onNavClicked}) {
    
    const offset = 0;
    const h = 59;
    const [currIndex, setCurrIndex] = React.useState(0);

    const translateY = useSharedValue(offset);
    const scrollerH = useSharedValue(47);
    var oldY = offset;

    const onAnyClicked = (buttonIndex) => {
        setCurrIndex(buttonIndex);
        onNavClicked(buttonIndex);
        console.log(buttonIndex);
    }
    
    
    const animatedStyles = useAnimatedStyle(() => (
        {transform: [{ 
            translateY: withTiming(translateY.value, {duration: 400, easing: Easing.inOut(Easing.poly(4))} )
        }]}
        ));


    return (
        <View
            style={styles.columns}
            onLayout={ () => { onAnyClicked(currIndex); }}
        >

            <View style={styles.scrollerContainer}>
                <Animated.View style={[styles.scroller, animatedStyles, {height: scrollerH}]}/>
            </View>

            <View style={styles.buttonsContainer}>
                <NavButton label='home'
                    onPressGroup={onAnyClicked}
                    index={0} currIndex={currIndex} 
                    icon='home' 
                    scrollerY={translateY} scrollerH={scrollerH}
                />
                <NavButton label='works' 
                    onPressGroup={onAnyClicked} 
                    index={1} currIndex={currIndex} 
                    icon='grid'
                    scrollerY={translateY} scrollerH={scrollerH}
                />
                <NavButton label='roles' 
                    onPressGroup={onAnyClicked} 
                    index={2} currIndex={currIndex} 
                    icon='briefcase'
                    scrollerY={translateY} scrollerH={scrollerH}
                />
                <NavButton label='about me'
                    onPressGroup={onAnyClicked} 
                    index={3} currIndex={currIndex} 
                    icon='body'
                    scrollerY={translateY} scrollerH={scrollerH} 
                />
                <NavButton label='contact'
                    onPressGroup={onAnyClicked}
                    index={4} currIndex={currIndex}
                    icon='mail'
                    scrollerY={translateY} scrollerH={scrollerH}
                />
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
        flex:'1',
        alignItems: 'flex-end',
        paddingRight: '.5vw',
    },
    scroller: {
        width: 70,
        borderTopRightRadius: 'max(8px, 1.3vmin)',
        borderBottomRightRadius: 'max(8px, 1.3vmin)',
        backgroundColor: '#000',
        shadowOffset: {width:'calc(1px + .2vw)', height:'calc(1px + .2vw)'},
        shadowColor: 'black',
        shadowRadius: 0,
        shadowOpacity: .5,
    },
    buttonsContainer: {
        justifyContent:'left',
        marginLeft: 10,
        height:'30vh',
        maxHeight: 350,
        flexDirection: 'column',
        flex: 20,
    },
});