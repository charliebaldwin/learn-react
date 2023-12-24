import { StyleSheet, View, Pressable, Text } from "react-native";
import { Ionicons }  from '@expo/vector-icons'
import Animated, {useAnimatedStyle, useSharedValue, Easing, withTiming} from 'react-native-reanimated';
import { shadow } from "react-native-paper";
import useSound from 'use-sound';
import w from '../assets/cool_file.mp3';


export default function SoundButton ( {label, onPress, icon} ) {

    const shadowSmall = .7;
    const shadowLarge = 1.5;
    const shadowShared = useSharedValue(shadowSmall);
    const setShadow = (radius) => {
        shadowShared.value = withTiming(radius, {duration: 100, easing: Easing.inOut(Easing.quad)} );
    }
    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
    const animStyle_shadow = useAnimatedStyle(() => (
        { boxShadow: `${shadowShared.value / 2}vmin ${shadowShared.value / 2}vmin ${shadowShared.value}vmin rgba(0, 0, 0, 0.35)` }
    ));

    const [play] = useSound(w);


    return (
        <View style={styles.buttonContainer}>
            <AnimatedPressable
            style={[styles.button, animStyle_shadow]}
            onPress={play}
            onHoverIn={() => { setShadow(shadowLarge) }}
            onHoverOut={() => { setShadow(shadowSmall) }}
            >
                <Ionicons name={icon} size={styles.buttonLabel.fontSize} color='white' style={styles.buttonIcon}/>
                <Text style={styles.buttonLabel}>{label}</Text>
            </AnimatedPressable>
        </View>
    ); 
}


const styles = StyleSheet.create({
    buttonContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    button: {
        backgroundColor: "#000",
        borderRadius: 'max(10px, 1.8vmin)',
        width:'100%',
        height:'100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: '1.5vw',
        gap: '1.5vw',
    },
    buttonLabel: {
        fontSize: 'calc(4pt + 3vmin )',
        lineHeight: 'calc(4pt + 2.5vmin )',
        color: '#fff',
        fontWeight: 600,
        textAlign: 'left',
        fontFamily: 'Kanit',
        
    },
    buttonIcon: {
    },
});