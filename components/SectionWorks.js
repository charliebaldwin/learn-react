import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
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

function Work () {
    return (
        <View>

        </View>
    );
}

const styles = StyleSheet.create({
    worksContainer: {

    },
    work: {

    }
});

