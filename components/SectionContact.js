import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Ionicons }  from '@expo/vector-icons'

import '../fonts/kanit.css';

export default function SectionContact () {

    return (
        <View>
            <ContactItem icon={'mail'} label={'charlie@charliebaldwin.com'} link={'mailto:charlie@charliebaldwin.com'}/>
            <ContactItem icon={'call'} label={'+1 (650) 739-5634'} link={'tel:16507395634'}/>
        </View>
    );
}

function ContactItem ({icon, label, link}) {
    return (
        <View style={{
            height:60,
            width:'100%',
            flexDirection:'row',
            
            }}>
            <Ionicons name={icon} size={40} color='black'/>
            <Text style={styles.label}>
            <a href={link}>{label}</a>
            </Text>
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
    label: {
        fontSize: 36,
        fontWeight: 600,
        textAlign: 'left',
        fontFamily: 'Kanit',
        lineHeight: 36,
        paddingLeft:30,
        width: '55%',
    },
    link: {
        color: '#000',
        textDecorationLine:'none',
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