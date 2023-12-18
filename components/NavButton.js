import { StyleSheet, View, Pressable, TouchableHighlight, Text } from "react-native";
import * as React from "react";
import Animated, { useSharedValue } from "react-native-reanimated";
import { Ionicons }  from '@expo/vector-icons'
import '../fonts/kanit.css';

export default function NavButton ( {label, icon, onPress, onPressGroup, index, currIndex, scrollerY, scrollerH} ) {

    const bgEnabled = useSharedValue(1);

    var [enabled, setEnabled] = React.useState(false);

    const [buttonY, setButtonY] = React.useState(0);

    const padding = 0;
    const setScrollerY = () => {
        scrollerY.value = buttonY + padding;
    }
    const setButtonEnabled = () => {
        setEnabled(true);
    }
    const setButtonDisabled = () => {
        setEnabled(false);
    }

    var buttonProps = {
        onPress: () => {
            setScrollerY();
            setButtonEnabled();
            onPressGroup(index);

        },
        style: currIndex==index ? styles.buttonEnabled : styles.buttonDisabled,
    }


    return (
        <View 
            style={[styles.buttonContainer, {padding: padding}]} 
            onLayout={ event => {
                setButtonY(event.nativeEvent.layout.y);
                scrollerH.value = event.nativeEvent.layout.height - (2 * padding);
            }}
        >
            <Pressable {...buttonProps}>
                <Ionicons style={styles.buttonIcon} name={icon} size={styles.buttonLabel.fontSize} color={currIndex==index ? 'white' : 'black'} />
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
        padding: 4,
        borderColor: 'green',
        borderWidth: 0,
    },
    buttonEnabled: {
        backgroundColor: "#000",
        borderRadius: 'max(8px, 1.3vmin)',
        shadowOffset: {width:'calc(1px + .2vw)', height:'calc(1px + .2vw)'},
        shadowColor: 'black',
        shadowRadius: 0,
        shadowOpacity: .5,
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        paddingLeft: '2vh',
        paddingVertical: '2vh',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    buttonDisabled: {
        backgroundColor: 'transparent',
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        paddingLeft: '2vh',
        paddingVertical: '2vh',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
    },
    buttonIcon: {
        paddingRight: '3vh',
    },
    buttonLabel: {
        fontSize: 'calc(6pt + 1.3vw )',
        fontWeight: 600,
        textAlign: 'left',
        fontFamily: 'Kanit',
        borderColor: 'green',
        borderWidth: 2,
    },
});