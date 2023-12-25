import { StyleSheet, View, Pressable, TouchableHighlight, Text } from "react-native";
import * as React from "react";
import Animated, {useAnimatedStyle, useSharedValue, Easing, withTiming} from 'react-native-reanimated';
import { Ionicons }  from '@expo/vector-icons'
import '../fonts/kanit.css';

export default function NavButton ( {label, icon, onPress, onPressGroup, index, currIndex, sections, scrollerY, scrollerH} ) {

    const shadowSmall = 0;
    const shadowLarge = 1.3;
    const shadowShared = useSharedValue(shadowSmall);
    const setShadow = (radius) => {
        shadowShared.value = withTiming(radius, {duration: 160, easing: Easing.inOut(Easing.quad)} );
    }
    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
    const animStyle_disabled = useAnimatedStyle(() => (
        { boxShadow: `${shadowShared.value / 2}vmin ${shadowShared.value / 2}vmin ${shadowShared.value}vmin rgba(0, 0, 0, 0.35)` }
    ));
    const animStyle_enabled = useAnimatedStyle(() => (
        { boxShadow: `${(shadowShared.value + .5) / 3}vmin ${(shadowShared.value + .5) / 3}vmin ${(shadowShared.value / 3)  + .5}vmin rgba(0, 0, 0, .5)` }
    ));


    const bgEnabled = useSharedValue(1);


    const [buttonY, setButtonY] = React.useState(0);

    const padding = 0;
    const setScrollerY = () => {
        scrollerY.value = buttonY + padding;
    }

    return (
        <View 
            style={[styles.buttonContainer, {padding: padding}]} 
            onLayout={ event => {
                sections[index].setScrollerY(event.nativeEvent.layout.y);
                scrollerH.value = event.nativeEvent.layout.height - (2 * padding);
            }}
        >
            <AnimatedPressable
                style={currIndex==index ? [styles.buttonEnabled, animStyle_enabled] : [styles.buttonDisabled, animStyle_disabled]}
                onPress={() => {
                    setScrollerY();
                    onPressGroup(index);
                }}
                onPressIn={ () => { setShadow(shadowLarge * 0.3) }}
                onPressOut={() => { setShadow(shadowLarge) }}
                onHoverIn={ () => { 
                    setShadow(shadowLarge);
                 }}
                onHoverOut={() => { 
                    setShadow(shadowSmall);
                }}
            >
                <Ionicons style={styles.buttonIcon} name={icon} size={styles.buttonLabel.fontSize} color={currIndex==index ? 'white' : 'black'} />
                <Text style={[{color: currIndex==index ? 'white' : 'black'}, styles.buttonLabel]}>{label}</Text>
            </AnimatedPressable>
        </View>
    ); 
}


const styles = StyleSheet.create({
    buttonContainer: {
        flex:1,
        maxHeight: '7vh',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'green',
        borderWidth: 0,
    },
    buttonEnabled: {
        zIndex: 10,
        position: 'relative',
        backgroundColor: "#000",

        borderRadius: 'max(10px, 1.8vmin)',

        width:'100%',
        height:'100%',

        paddingLeft: '2vh',
        paddingVertical: '2vh',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    buttonDisabled: {
        zIndex: 1,
        position: 'relative',
        backgroundColor: 'transparent',

        borderRadius: 'max(10px, 1.8vmin)',
        borderWidth: 0,
        borderColor: '#000',

        width:'100%',
        height:'100%',

        paddingLeft: '2vh',
        paddingVertical: '2vh',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
    },
    buttonIcon: {
        paddingRight: '3vmin',
    },
    buttonLabel: {
        fontSize: 'calc(4pt + 3vmin )',
        lineHeight: 'calc(4pt + 2.5vmin )',
        fontWeight: 600,
        textAlign: 'left',
        fontFamily: 'Kanit',
        borderColor: 'green',
        borderWidth: 0,
    },
});