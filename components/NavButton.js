import { StyleSheet, View, Pressable, Text } from "react-native";

export default function NavButton ( {label, onPress, targetValue, yPos} ) {

    const setScrollerY = (targetValue) => {
        targetValue.value = yPos;
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={
                () => {
                    setScrollerY(targetValue);
                }
            }>
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
    buttonLabel: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
});