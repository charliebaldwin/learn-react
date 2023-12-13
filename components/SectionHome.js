import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Ionicons }  from '@expo/vector-icons'
import ScrollSection from './ScrollSection';

import '../fonts/kanit.css';

export default function SectionHome ({textStyles}) {

    return (
        <View>
            <Text style={textStyles.title}>
                hi, I'm Charlie.
            </Text>

            <Text style={textStyles.sectionTitle}>
                I’m a UI and technical artist making games.
            </Text>

            <View style={{height: '5vh'}}/>

            <Text style={textStyles.body}>
                scroll to see some of my work, or use the sidebar to jump to the section you’re looking for.
            </Text>
        </View>
    );
}