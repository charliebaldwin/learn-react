import React from 'react';
import {StyleSheet, View, Text, Pressable, Image, ImageBackground} from 'react-native';
import Animated, {useAnimatedStyle, useSharedValue, Easing, withTiming} from 'react-native-reanimated';
import { Ionicons }  from '@expo/vector-icons'


export default function MediaGallery ({enabled, setEnabled, content, textStyles}) {
    return (
       <View style={styles.galleryContainer}>

            <View style={styles.mediaContainer}>
                <View style={styles.media}>
                    <Image  
                        style={{flex: 1, borderRadius:'1vw'}}
                        resizeMode={'contain'}
                        source={require('../assets/oran.png')}
                    />

                </View>
            </View>

            <View style={styles.buttonsContainer}>
                <MediaButton icon={'image'} thumbnail={'oran.png'}/>
                <MediaButton icon={'image'} thumbnail={'roto-headshot-square.png'}/>
                <MediaButton icon={'image'} thumbnail={'favicon.png'}/>
                <MediaButton icon={'layers'} thumbnail={'icon.png'}/>
            </View>

            <View style={styles.buttonSelectorContainer}>
                <View style={styles.buttonSelector}></View>
            </View>
       </View> 
    );  
}

function MediaButton({icon, thumbnail}) {
    const shadowSmall = .3;
    const shadowLarge = 1.3;
    const shadowShared = useSharedValue(shadowSmall);
    const setShadow = (radius) => {
        shadowShared.value = withTiming(radius, {duration: 100, easing: Easing.inOut(Easing.quad)} );
    }
    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
    const animStyle_shadow = useAnimatedStyle(() => (
        { boxShadow: `${shadowShared.value / 3}vmin ${shadowShared.value / 3}vmin ${shadowShared.value}vmin rgba(0, 0, 0, 0.5)` }
    ));

    return (
        <AnimatedPressable 
            style={[styles.button, animStyle_shadow]}
            onHoverIn={() => { setShadow(shadowLarge) }}
            onHoverOut={() => { setShadow(shadowSmall) }}
        >
            <ImageBackground
                    style={{
                        flex: 1,
                        borderRadius: 15,
                        fontSize: '4vmin',
                        aspectRatio: 1/1,
                        alignItems:'center',
                        justifyContent: 'center',
                    }}
                    resizeMode={'cover'}
                    source={require(`../assets/${thumbnail}`)}
            >
                <Ionicons 
                    name={icon} 
                    size={styles.button.fontSize} 
                    color='white'
                />
            </ImageBackground>
        </AnimatedPressable>
    );
} 


const styles = StyleSheet.create({
    galleryContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',

    },
    mediaContainer: {
        flex: 9,
        flexDirection: 'column',
        justifyContent:'center',
        alignContent:'stretch',

    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'stretch',
        gap: 10,
        paddingVertical: 10,

        borderWidth: 0,
        borderColor: 'blue',
        borderRadius: 8,
    },
    buttonSelectorContainer: {
        flex: .25,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        
    },
    media: {
        flex: 1,
        borderRadius: 30,
        boxShadow: '3px 3px 13px rgba(0,0,0,.3)',
        backgroundColor: '#000',

        borderWidth: 0,
        borderColor: 'orange'
    },
    button: {
        fontSize: '4vmin',
        aspectRatio: 1/1,
        backgroundColor: '#bbb',
        borderRadius: 15,
        alignItems:'center',
        justifyContent: 'center',
    },
    buttonSelector: {
        width: 75,
        backgroundColor: '#000',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    }
    

});