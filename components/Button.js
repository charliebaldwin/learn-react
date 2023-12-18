import { StyleSheet, View, Pressable, Text } from "react-native";
import { Ionicons }  from '@expo/vector-icons'
import Animated, {useAnimatedStyle, useSharedValue, Easing, withTiming} from 'react-native-reanimated';
import { shadow } from "react-native-paper";


export default function Button ( {label, onPress, icon} ) {

    const shadowSmall = .25;
    const shadowLarge = 1.3;
    const shadowShared = useSharedValue(shadowSmall);
    const setShadow = (radius) => {
        shadowShared.value = withTiming(radius, {duration: 150, easing: Easing.inOut(Easing.quad)} );
    }
    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
    const animStyle_shadow = useAnimatedStyle(() => (
        { boxShadow: `${shadowShared.value * 6}px ${shadowShared.value * 6}px ${shadowShared.value}vw rgba(0, 0, 0, 0.5)` }
    ));

    return (
        <View style={styles.buttonContainer}>
            <AnimatedPressable
            style={[styles.button, animStyle_shadow]}
            onPress={onPress}
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
        padding: 6,
    },
    button: {
        backgroundColor: "#000",
        borderRadius: 'max(10px, .6vw)',
        width:'100%',
        height:'100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLabel: {
        fontSize: 'min(32pt, max(4vmin, 12pt))',
        color: '#fff',
        fontWeight: 600,
        textAlign: 'left',
        fontFamily: 'Kanit',
    },
    buttonIcon: {
        padding: '1vw',
    },
});