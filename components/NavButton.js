import { StyleSheet, View, Pressable, TouchableHighlight, Text } from "react-native";
import React from "react";
import Animated, { useSharedValue } from "react-native-reanimated";

export default function NavButton ( {label, onPress, targetValue, yPos} ) {

    const bgEnabled = useSharedValue(1);

    var [enabled, setEnabled] = React.useState(false);
    

    const setScrollerY = (targetValue) => {
        targetValue.value = yPos;
    }
    const setButtonEnabled = () => {
        setEnabled(true);
    }
    const setButtonDisabled = () => {
        setEnabled(false);
    }

    var buttonProps = {
        onPress: () => {
            setScrollerY(targetValue);
            setButtonEnabled();
        },
        style: enabled ? styles.buttonEnabled : styles.buttonDisabled,
    }



    return (
        <View style={styles.buttonContainer}>
            <TouchableHighlight {...buttonProps}>
                <Text style={[{color: enabled ? 'white' : 'black'}, styles.buttonLabel]}>{label}</Text>
            </TouchableHighlight>
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
    buttonEnabled: {
        backgroundColor: "#000",
        borderRadius: 20,
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        padding: 20,
    },
    buttonDisabled: {
        backgroundColor: "#fff",
        borderRadius: 20,
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        padding: 20,
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
    },
});