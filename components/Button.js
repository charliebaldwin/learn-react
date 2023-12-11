import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Button ( {label, onPress} ) {

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
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
        color: "#fff",
        borderRadius: 20,
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonIcon: {
        paddingRight: 8,
    },
});