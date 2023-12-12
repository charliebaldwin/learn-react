import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import '../fonts/kanit.css';
import SectionContact from './SectionContact'


export default function ScrollSection ({title, subtitle, body, tailSpacing}, props) {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <View style={{height: 20}}/>
            <Text style={styles.body}>{body}</Text>

            {props.children}

            <View style={{
                height:tailSpacing,
                backgroundColor: '#ddd',
                borderRadius: 20,
                marginTop: 20,
                marginBottom: 30,
                marginLeft: 20,
                marginRight: 20,
                
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontSize: 96,
        fontWeight: 700,
        textAlign: 'left',
        fontFamily: 'Kanit',
        width: '75%',
    },
    subtitle: {
        fontSize: 64,
        fontWeight: 600,
        textAlign: 'left',
        fontFamily: 'Kanit',
        lineHeight: 60,
        width: '60%',
    },
    body: {
        fontSize: 32,
        fontWeight: 400,
        textAlign: 'left',
        fontFamily: 'Kanit',
        lineHeight: 36,
        width: '55%',
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