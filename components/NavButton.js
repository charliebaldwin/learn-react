import { StyleSheet, View, Pressable, TouchableHighlight, Text } from "react-native";
import * as React from "react";
import Animated, { useSharedValue } from "react-native-reanimated";
import { Ionicons }  from '@expo/vector-icons'
import '../fonts/kanit.css';

export default function NavButton ( {label, icon, onPress, onPressGroup, index, currIndex, targetValue, yPos} ) {

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
                <Ionicons style={styles.buttonIcon} name={icon} size={25} color={currIndex==index ? 'white' : 'black'} />
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
        padding: 0,
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
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    buttonDisabled: {
        backgroundColor: "#fff",
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        padding: 20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        fontSize: '1.3vw',
        fontWeight: 600,
        textAlign: 'left',
        fontFamily: 'Kanit',
    },
});