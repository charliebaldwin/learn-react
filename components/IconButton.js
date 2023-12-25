import { StyleSheet, View, Pressable, Text } from "react-native";
import { Ionicons }  from '@expo/vector-icons'
import Animated, {useAnimatedStyle, useSharedValue, Easing, withTiming} from 'react-native-reanimated';
import { shadow } from "react-native-paper";

export default function IconButton ( {label, onPress, isVisible, icon, size, shadowSizes} ) {

    const shadowSmall = shadowSizes[0];
    const shadowLarge = shadowSizes[1];
    const shadowShared = useSharedValue(shadowSmall);
    const setShadow = (radius) => {
        shadowShared.value = withTiming(radius, {duration: 150, easing: Easing.inOut(Easing.quad)} );
    }
    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
    const animStyle_shadow = useAnimatedStyle(() => (
        { boxShadow: `${shadowShared.value / 3}vmin ${shadowShared.value / 3}vmin ${shadowShared.value}vmin rgba(0, 0, 0, 0.5)` }
    ));


    return (
        <View style={[{opacity: isVisible ? 1 : 0}, styles.buttonContainer]}>
            <AnimatedPressable 
                style={ [styles.button, animStyle_shadow, {width: `${size}vmin`, borderRadius: `max(${size * 1.3}px, ${size * 0.22}vmin)`,}] } 
                onPress={onPress}
                onPressIn={() => {setShadow(shadowSmall * 0.5) }}
                onPressOut={() => {setShadow(shadowSmall) }}
                onHoverIn={() => { setShadow(shadowLarge) }}
                onHoverOut={() => { setShadow(shadowSmall) }}
                accessibilityLabel={'hello accessibility label'}
            >
                <Ionicons name={icon} size={`${size / 2}vmin`} color='white'/>
            </AnimatedPressable>
        </View>
    ); 
}


const styles = StyleSheet.create({
    buttonContainer: {
        width: 65,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
    },
    button: {
        backgroundColor: "#000",
        color: "#fff",
        borderRadius: 'max(8px, 1.3vmin)',
        width: '6vmin',
        fontSize: '3vmin',
        aspectRatio: 1/1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonIcon: {
        paddingRight: 8,
    },
});