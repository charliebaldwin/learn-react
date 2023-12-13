import { StyleSheet, View, Pressable, Text } from "react-native";
import { Ionicons }  from '@expo/vector-icons'


export default function Button ( {label, onPress, icon} ) {

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Ionicons name={icon} size={styles.buttonLabel.fontSize} color='white' style={styles.buttonIcon}/>
                <Text style={styles.buttonLabel}>{label}</Text>
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
    button: {
        backgroundColor: "#000",
        borderRadius: 'max(10px, .6vw)',
        width:'100%',
        height:'100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {width:4, height:4},
        shadowColor: 'black',
        shadowRadius: 0,
        shadowOpacity: .5,
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