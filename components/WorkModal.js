import React from 'react';
import {Modal, StyleSheet, View, Text, Pressable} from 'react-native';
import Animated, {useAnimatedStyle, useSharedValue, Easing, withTiming} from 'react-native-reanimated';

import MediaGallery from './MediaGallery';

export default function WorkModal ({enabled, setEnabled, content, textStyles}) {
    
    return (
        <Modal transparent={true} visible={enabled} animationType='fade'>
            <View style={styles.background} />
            <Pressable 
                onPress={() => { setEnabled(false) }}
                style={{width:'100%', height: '100%', display:'flex'}}
            >
                <View style={styles.panel}>
                    <View style={styles.headerContainer}>
                        <Text style={textStyles.sectionTitle}>{content.title}</Text>
                        <Text style={[textStyles.sectionTitle, {fontSize: 42, textAlign: 'right'}]}>roto, 2023</Text>
                    </View>

                    <View style={styles.bodyContainer}>
                        <View style={styles.bodyColumnL}>
                            <Text style={textStyles.bodySmall}>sample body text sample body text sample body text sample body text sample body text sample body text sample body text sample body text</Text>
                        </View>

                        <View style={styles.bodyColumnR}>
                            <MediaGallery/>
                        </View>
                    </View>

                </View>
            </Pressable>
        </Modal>
    );
}


const styles = StyleSheet.create({
    background: {
        backgroundColor: '#000',
        opacity: 0.75,
        width: '100%',
        height: '100%',
        position: 'absolute',

    },
    panel: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        margin: 30,
        marginLeft: 150,
        padding: 30,
        paddingBottom:0,
        backgroundColor: '#fff',
        borderRadius: 30,
        boxShadow: '5px 5px 20px rgba(0,0,0,.4)'
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',

        borderWidth: 0,
        borderColor: 'blue',
        borderRadius: 10,
    },
    bodyContainer: {
        flex: 11,
        flexDirection: 'row',
        alignItems: 'stretch',

        borderWidth: 0,
        borderColor: 'red',
        borderRadius: 10,
    },
    bodyColumnL: {
        flex: 1,
        flexGrow: 1,
        marginBottom:30,
        paddingHorizontal: 20,
        paddingVertical: 20,

        borderWidth: 0,
        borderColor: 'yellow',
        borderRadius: 10,
    },
    bodyColumnR: {
        aspectRatio: 1/1,

    }
});