import { StyleSheet, View, Pressable, TouchableHighlight, Text } from "react-native";
import * as React from "react";
import Animated, { useSharedValue } from "react-native-reanimated";
import { ToggleButton } from "react-native-paper";
import '../fonts/kanit.css';

export default function NavButton ( {label, onPress, onPressGroup, index, currIndex, targetValue, yPos} ) {

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
            onPressGroup(index);

        },
        style: currIndex==index ? styles.buttonEnabled : styles.buttonDisabled,
    }



    return (
        <View style={styles.buttonContainer}>
            <Pressable {...buttonProps}>
                <Text style={[{color: currIndex==index ? 'white' : 'black'}, styles.buttonLabel]}>{label}</Text>
            </Pressable>
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
        borderRadius: 12,
        shadowOffset: {width:4, height:3},
        shadowColor: 'black',
        shadowRadius: 0,
        shadowOpacity: .5,
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        padding: 20,
    },
    buttonDisabled: {
        backgroundColor: "#fff",
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        padding: 20,
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        fontSize: '1.5vw',
        fontWeight: 600,
        textAlign: 'left',
        fontFamily: 'Kanit',
    },
});