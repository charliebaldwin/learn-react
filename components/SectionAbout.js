import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { Ionicons }  from '@expo/vector-icons'
import ScrollSection from './ScrollSection';

import '../fonts/kanit.css';

export default function SectionAbout () {

    return (
        <ScrollSection subtitle={'about me'} tailSpacing = {500}>
            <View style={styles.container}>
                <View style={styles.bodyContainer}>
                    <Text style={styles.body}>
                    {'\t'}Lorem ipsum fermentum odio eu feugiat pretium nibh ipsum consequat. Cras tincidunt lobortis feugiat vivamus at. Odio euismod lacinia at quis risus sed. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Pretium aenean pharetra magna ac placerat. Pretium fusce id velit ut tortor. Viverra tellus in hac habitasse platea dictumst vestibulum.
                    <br/>
                    {'\t'}Dui vivamus arcu felis bibendum ut tristique et egestas. Natoque penatibus et magnis dis parturient montes. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Dictum sit amet justo donec. Enim sed faucibus turpis in. Cras sed felis eget velit. Viverra maecenas accumsan lacus vel facilisis. Leo urna molestie at elementum eu facilisis sed odio. Purus sit amet luctus venenatis. Eget gravida cum sociis natoque penatibus et magnis dis. Adipiscing at in tellus integer feugiat scelerisque varius morbi.
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        resizeMode={'contain'}
                        source={require('../assets/roto-headshot-square.jpg')}
                    />
                </View>
            </View>
        </ScrollSection>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    body: {
        fontSize: 24,
        fontWeight: 400,
        textAlign: 'left',
        fontFamily: 'Kanit',
        lineHeight: 32,

    },
    bodyContainer: {
        flex: 3,
        paddingRight: 100,
    },
    imageContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    image: {
        width: '100%',
        aspectRatio: 1/1,
        borderRadius: 20,
        shadowOffset: {width:6, height:6},
        shadowColor: 'black',
        shadowRadius: 0,
        shadowOpacity: 1,
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