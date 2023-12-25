import { StyleSheet, View, Pressable, Text , FlatList} from "react-native";
import React from 'react';
import Animated, {useAnimatedStyle, useSharedValue, Easing, withSpring, withTiming} from 'react-native-reanimated';
import { ToggleButton } from 'react-native-paper';

import NavButton from "./NavButton";

export default function NavBar ({sections, currSection, onNavClicked}) {
    
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
            translateY: withTiming(currSection.value.scrollerY, {duration: 400, easing: Easing.inOut(Easing.poly(6))} )
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
                    index={0} currIndex={currSection.value.index} 
                    icon='home' 
                    sections={sections}
                    scrollerY={translateY} scrollerH={scrollerH}
                />
                <NavButton label='works' 
                    onPressGroup={onAnyClicked} 
                    index={1} currIndex={currSection.value.index} 
                    icon='grid'
                    sections={sections}
                    scrollerY={translateY} scrollerH={scrollerH}
                />
                <NavButton label='roles' 
                    onPressGroup={onAnyClicked} 
                    index={2} currIndex={currSection.value.index} 
                    icon='briefcase'
                    sections={sections}
                    scrollerY={translateY} scrollerH={scrollerH}
                />
                <NavButton label='about me'
                    onPressGroup={onAnyClicked} 
                    index={3} currIndex={currSection.value.index} 
                    icon='body'
                    sections={sections}
                    scrollerY={translateY} scrollerH={scrollerH} 
                />
                <NavButton label='contact'
                    onPressGroup={onAnyClicked}
                    index={4} currIndex={currSection.value.index}
                    icon='mail'
                    sections={sections}
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
        borderRadius: 'max(10px, 1.8vmin)',
        backgroundColor: '#000',
        boxShadow: '0.25vmin 0.25vmin 0.5vmin rgba(0, 0, 0, 0.5)',
    },
    buttonsContainer: {
        justifyContent:'left',
        marginLeft: 10,
        height:'auto',
        flexDirection: 'column',
        gap: '.5vmin',
        flex: 20,
    },
});