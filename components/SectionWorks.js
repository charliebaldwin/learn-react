import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import Animated, {useAnimatedStyle, useSharedValue, Easing, withTiming} from 'react-native-reanimated';
import { Ionicons }  from '@expo/vector-icons'
import ScrollSection from './ScrollSection';

import '../fonts/kanit.css';

export default function SectionWorks ({textStyles, onPressWork}) {

    const showModal = (title) => {
        onPressWork({title: title});
    }

    return (
        <View>
            <Text style={textStyles.sectionTitle}>
                works
            </Text>

            <Text style={textStyles.label}>group 1</Text>
            <View style={styles.worksContainer}>
                <Work title={'project 1'} onPress={showModal} />
                <Work title={'project 2'} onPress={showModal}/>
                <Work title={'project 3'} onPress={showModal}/>
                <Work title={'project 4'} onPress={showModal}/>
            </View>

            <Text style={textStyles.label}>group 2</Text>
            <View style={styles.worksContainer}>
                <Work title={'project 1'} onPress={showModal}/>
                <Work title={'project 2'} onPress={showModal}/>
                <Work title={'project 3'} onPress={showModal}/>
                <Work title={'project 4'} onPress={showModal}/>
                <Work title={'project 5'} onPress={showModal}/>
            </View>
        </View>
    );
}

function Work ({title, onPress}) {

    const shadowSmall = 1;
    const shadowLarge = 3;
    const shadowShared = useSharedValue(shadowSmall);
    const setShadow = (radius) => {
        shadowShared.value = withTiming(radius, {duration: 160, easing: Easing.inOut(Easing.quad)} );
    }
    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
    const animStyle_shadow = useAnimatedStyle(() => (
        { boxShadow: `${shadowShared.value / 2}vmin ${shadowShared.value / 2}vmin ${shadowShared.value}vmin rgba(0, 0, 0, 0.35)` }
    ));

    const showModal = () => {
        onPress(title);
    }



    return (
        <AnimatedPressable 
            style={[styles.work, animStyle_shadow]}
            onHoverIn={() => { 
                setShadow(shadowLarge);
            }}
            onHoverOut={() => { 
                setShadow(shadowSmall);
            }}
            onPress={showModal}
        >
            <View style={styles.workButton}>

            </View>
            
            <Text style={styles.workLabel}>{title}</Text>
        </AnimatedPressable>
    );
}

const styles = StyleSheet.create({
    worksContainer: {
        display:'flex',
        flexFlow: 'row wrap-reverse',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 20,

    },
    work: {
        flexBasis: '14vw',
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        marginHorizontal: 10,
        marginVertical: 20,

        borderColor: '#000',
        borderWidth: 0,
        borderRadius: 35,

    },
    workButton: {
        aspectRatio: 1.618/1,
        backgroundColor: '#bbb',
        borderRadius: 30,
    },
    workLabel: {
        fontSize: 'min(28pt, 1.4vw)',
        fontWeight: 500,
        textAlign: 'center',
        fontFamily: 'Kanit',
        lineHeight: 40,
        padding: 5,
        marginBottom: 10,
    },
});

