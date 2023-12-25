import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { Ionicons, FontAwesome, FontAwesome5 }  from '@expo/vector-icons'
import ScrollSection from './ScrollSection';
import Button from './Button';


import '../fonts/kanit.css';

export default function SectionAbout ( {textStyles}) {

    return (
        <View style={{alignItems:'center'}}>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                
                    <Text style={textStyles.sectionTitle}>
                        about me
                    </Text>

                    <Text style={textStyles.bodySmall}>
                    {'\t'}Lorem ipsum fermentum odio eu feugiat pretium nibh ipsum consequat. Cras tincidunt lobortis feugiat vivamus at. Odio euismod lacinia at quis risus sed. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Pretium aenean pharetra magna ac placerat. Pretium fusce id velit ut tortor. Viverra tellus in hac habitasse platea dictumst vestibulum.
                    <br/>
                    {'\t'}Dui vivamus arcu felis bibendum ut tristique et egestas. Natoque penatibus et magnis dis parturient montes. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Dictum sit amet justo donec. Enim sed faucibus turpis in. Cras sed felis eget velit. Viverra maecenas accumsan lacus vel facilisis. Leo urna molestie at elementum eu facilisis sed odio. Purus sit amet luctus venenatis. Eget gravida cum sociis natoque penatibus et magnis dis. Adipiscing at in tellus integer feugiat scelerisque varius morbi.
                    </Text>

                </View>
                <View style={styles.imageContainer}>
                    <View style={styles.image}>
                        <Image  
                            style={{flex: 1, borderRadius:'1vw'}}
                            resizeMode={'contain'}
                            source={require('../assets/roto-headshot-square.png')}
                        />
                    </View>
                    
                </View>
            </View>

            <View style={{
                width: '100%', height: 'max(8vh, 40px)',
                paddingHorizontal: '5vw',    
                marginVertical: '5vh',
            }}>
            </View>
            
            <View style={{width: '100%', paddingBottom: 10}}>
            <Text style={[textStyles.label, {alignSelf: 'flex-start'}]}>skills</Text>
            </View>
            <View style={styles.skillsContainer}>
                <Skill order={99} label={'Unity'} icon={'unity'} textStyles={textStyles}/>
                <Skill order={99} label={'Unreal Engine 5'} icon={'dot-circle'} textStyles={textStyles}/>
                <Skill order={99} label={'TouchDesigner'} icon={'dot-circle'} textStyles={textStyles}/>
                <Skill order={99} label={'ShaderGraph'} icon={'dot-circle'} textStyles={textStyles}/>
                <Skill order={99} label={'GLSL'} icon={'dot-circle'} textStyles={textStyles}/>
                <Skill order={99} label={'C#'} icon={'dot-circle'} textStyles={textStyles}/>
                <Skill order={99} label={'VFXGraph'} icon={'dot-circle'} textStyles={textStyles}/>
                <Skill order={99} label={'Illustrator'} icon={'dot-circle'} textStyles={textStyles}/>
                <Skill order={99} label={'Figma'} icon={'figma'} textStyles={textStyles}/>
                <Skill order={99} label={'Photoshop'} icon={'dot-circle'} textStyles={textStyles}/>
                <Skill order={99} label={'Python'} icon={'python'} textStyles={textStyles}/>
                <Skill order={99} label={'skill01'} icon={'dot-circle'} textStyles={textStyles}/>
                <Skill order={99} label={'skill01'} icon={'dot-circle'} textStyles={textStyles}/>
                <Skill order={99} label={'skill01'} icon={'dot-circle'} textStyles={textStyles}/>
                <Skill order={99} label={'skill01'} icon={'dot-circle'} textStyles={textStyles}/>
                <Skill order={99} label={'skill01'} icon={'dot-circle'} textStyles={textStyles}/>
            </View>
        </View>
    );
}

function Skill ({label, order, icon, textStyles}) {

    return (
        <View style={[styles.skillBox, {order: order}]}>
            <FontAwesome5 name={icon} size={styles.skillsLabel.fontSize}/>
            <Text style={[styles.skillsLabel, {width: 'auto', margin:0, padding:0}]}>{label}</Text>
        </View>
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
    textContainer: {
        flex: 1,
        flexBasis: '65%',
        flexShrink: 2,
        paddingRight: '4vw',
        flexDirection: 'column',
    },
    imageContainer: {
        flex: 2,
        flexGrow: 2,
        alignItems: 'flex-end',
    },
    image: {
        width: '100%',
        aspectRatio: 1/1,
        borderRadius: '1vw',
        boxShadow: '5px 5px 12px rgba(0,0,0,.5)',
    },
    filler: {
        height: 500,
        width: '100%',
        marginTop: 20,
        marginBottom: 30,
        backgroundColor: '#ddd',
        borderRadius: 20,
    },
    skillsContainer: {
        display:'flex',
        flexFlow: 'row wrap',
       // alignItems: 'stretch',
        justifyContent: 'center',
        gap: 10,
        paddingHorizontal: '2vh',
        alignItems: 'flex-start',
        width: '100%',
    },
    skillBox: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        //flex: 1,
        flexShrink: 2,
        flexBasis: 'content',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        width: 'auto',
        height: 'auto',
    },
    skillsLabel: {
        fontSize: 'min(32pt, 1.4vw)',
        fontWeight: 500,
        textAlign: 'left',
        fontFamily: 'Kanit',
        lineHeight: 'min(28pt, 1.2vw)',
    }

});