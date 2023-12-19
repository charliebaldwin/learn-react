import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import '../fonts/kanit.css';
import SectionContact from './SectionContact'


export default function ScrollSection ({tailSpacing, children, index, sections}) {
    return (
        <View 
            onLayout={ event => {
                sections[index].setPageY(event.nativeEvent.layout.y);
            }}
        >

            {children}

            <View style={{
                height:tailSpacing,
                backgroundColor: '#fff',
                borderWidth: 4,
                borderColor: '#fafafa',
                borderRadius: 20,
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});