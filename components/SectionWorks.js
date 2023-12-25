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

    const shadowSmall = 0.8;
    const shadowLarge = 2;
    const shadowShared = useSharedValue(shadowSmall);
    const setShadow = (radius) => {
        shadowShared.value = withTiming(radius, {duration: 160, easing: Easing.inOut(Easing.quad)} );
    }
    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
    const animStyle_shadow = useAnimatedStyle(() => (
        { boxShadow: `${shadowShared.value / 2.7}vmin ${shadowShared.value / 2.7}vmin ${shadowShared.value}vmin rgba(0, 0, 0, 0.4)` }
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
            onPressIn={() => { setShadow(shadowSmall * 0.5) }}
            onPressOut={()=> { setShadow(shadowLarge) }}
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
        marginBottom: '2vh',

    },
    work: {
        flexBasis: '14vw',
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        marginHorizontal: '1.5vmin',
        marginVertical: '1.5vmin',

        borderColor: '#000',
        borderWidth: 0,
        borderRadius: '2.5vmin',

    },
    workButton: {
        aspectRatio: 1.618/1,
        backgroundColor: '#bbb',
        borderRadius: '1.5vmin',
        margin: '1.25vmin',
    },
    workLabel: {
        fontSize: 'min(28pt, 1.6vw)',
        fontWeight: 500,
        textAlign: 'center',
        fontFamily: 'Kanit',
        lineHeight: 'min(24pt, 1.2vw)',
        padding: '.5vmin',
        marginBottom: '1vmin',
    },
});

