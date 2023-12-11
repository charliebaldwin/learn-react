import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import '../fonts/kanit.css';


export default function ScrollSection ({title, props}) {
    return (
        <View>
            <Text style={styles.title}>
                {title}
                <View style={styles.filler}/>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'left',
        fontFamily: 'Kanit',
    },
    filler: {
        height: 500,
        width: '100%',
        marginTop: 20,
        marginBottom: 30,
        backgroundColor: '#ddd',
        borderRadius: 20,
    }

});