import { StyleSheet, View, Pressable, Text } from "react-native";
import { Feather }  from '@expo/vector-icons'
import Animated, {useAnimatedStyle, useSharedValue, Easing, withTiming} from 'react-native-reanimated';

export default function IconButton ( {label, onPress, isVisible} ) {
    return (
        <View style={[{opacity: isVisible ? 1 : 0}, styles.buttonContainer]}>
            <Pressable style={styles.button} onPress={onPress}>
                <Feather name="chevron-up" size={30} color='white'/>
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
        borderRadius: 12,
        width:'100%',
        height:'100%',
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