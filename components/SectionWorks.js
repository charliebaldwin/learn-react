import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Ionicons }  from '@expo/vector-icons'
import ScrollSection from './ScrollSection';

import '../fonts/kanit.css';

export default function SectionWorks ({textStyles}) {

    return (
        <View>
            <Text style={textStyles.sectionTitle}>
                works
            </Text>
        </View>
    );
}