import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Ionicons }  from '@expo/vector-icons'
import ScrollSection from './ScrollSection';

import '../fonts/kanit.css';

export default function SectionContact ({textStyles}) {

    return (
        <View>
            <Text style={textStyles.sectionTitle}>
                contact
            </Text>

            <View style={{
                height:60,
                width:'100%',
                flexDirection:'row', 
                alignItems: 'center'   
            }}>

                <Ionicons name={'mail'} size={textStyles.label.fontSize} color='black'/>

                <Text style={textStyles.label}>
                    <a href={'mailto:charlie@charliebaldwin.com'}>
                        {'charlie@charliebaldwin.com'}
                    </a>
                </Text>

            </View>

            <View style={{
                height:60,
                width:'100%',
                flexDirection:'row', 
                alignItems: 'center'
            }}>

                <Ionicons name={'call'} size={textStyles.label.fontSize} color='black'/>

                <Text style={textStyles.label}>
                    <a href={'tel:16507395634'}>
                        {'+1 (650) 739-5634'}
                    </a>
                </Text>

            </View>
        </View>
    );
}