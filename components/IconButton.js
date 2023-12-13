import { StyleSheet, View, Pressable, Text } from "react-native";
import { Ionicons }  from '@expo/vector-icons'
import Animated, {useAnimatedStyle, useSharedValue, Easing, withTiming} from 'react-native-reanimated';

export default function IconButton ( {label, onPress, isVisible, icon} ) {
    return (
        <View style={[{opacity: isVisible ? 1 : 0}, styles.buttonContainer]}>
            <Pressable style={styles.button} onPress={onPress}>
                <Ionicons name={icon} size={styles.button.fontSize} color='white'/>
            </Pressable>
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
        shadowOffset: {width:4, height:3},
        shadowColor: 'black',
        shadowRadius: 0,
        shadowOpacity: .5,
    },
    buttonIcon: {
        paddingRight: 8,
    },
});