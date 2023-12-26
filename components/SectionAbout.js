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
                            style={styles.image}
                            resizeMode={'contain'}
                            source={require('../assets/roto-headshot-square.png')}
                        />
                    </View>
                    
                </View>
            </View>

            <View style={{
                width: '100%', height: 'max(8vh, 40px)',
                paddingHorizontal: '5vw'
            }}>
            </View>
            
            <View style={{width: '100%', paddingBottom: 10}}>
            <Text style={[textStyles.sectionTitle, {alignSelf: 'flex-start'}]}>skills</Text>
            </View>
            <View style={styles.skillsContainer}>
                <Skill order={ 1} size={4}
                    label={'Unity'}
                    icon={'logo-unity'}/>
                <Skill order={ 6} size={3}
                    label={'Unreal Engine 5'}
                    icon={'logo-unreal'}/>
                <Skill order={ 3} size={4}
                    label={'TouchDesigner'}
                    icon={'logo-td'}/>
                <Skill order={ 5} size={3}
                    label={'GLSL'} 
                    icon={'logo-glsl'}/>
                <Skill order={ 4} size={3}
                    label={'Shader Graph'} 
                    icon={'logo-shadergraph'}/>
                <Skill order={ 7} size={3}
                    label={'VFX Graph'} 
                    icon={'logo-vfxgraph'}/>
                <Skill order={ 2} size={4}
                    label={'Blender'} 
                    icon={'logo-blender'}/>
                <Skill order={ 8} size={3}
                    label={'Python'}              
                    icon={'logo-python'}/>
                <Skill order={99} size={3}
                    label={'C#'}
                    icon={'logo-csharp'}/>
                <Skill order={ 9} size={3}
                    label={'Figma'}               
                    icon={'logo-figma'}/>
                <Skill order={99} size={2}
                    label={'Illustrator'}         
                    icon={'logo-illustrator'}/>
                <Skill order={99} size={2}
                    label={'Photoshop'}           
                    icon={'logo-photoshop'}/>
                <Skill order={99} size={2}
                    label={'Maya'}                
                    icon={'logo-maya'}/>
                <Skill order={99} size={2}
                    label={'Substance Painter'}   
                    icon={'logo-painter'}/>
                <Skill order={99} size={2}
                    label={'ZBrush'}              
                    icon={'logo-zbrush'}/>
                <Skill order={99} size={2}
                    label={'JavaScript'}          
                    icon={'logo-js'}/>
                <Skill order={99} size={2}
                    label={'Java'}               
                    icon={'logo-java'}/>
            </View>
        </View>
    );
}

function Skill ({label, order, icon, textStyles, size}) {

    return (
        <View style={[styles.skillBox, {order: order}]}>
            {/* <FontAwesome5 name={icon} size={styles.skillsLabel.fontSize}/> */}
            <Image style={[styles.svgImage, {width: `${size * 0.9}vmin`, height: `${size * 0.9}vmin`}]} source={require(`../assets/svg/${icon}.svg`)}/>
            <Text style={[styles.skillsLabel, {width: 'auto', margin:0, padding:0, fontSize: `${size / 2}vw`, lineHeight: `${size / 3}vw`}]}>{label}</Text>
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
        borderRadius: '1.5vw',
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
        gap: '1vmin',
        paddingHorizontal: '2vmin',
        alignItems: 'flex-start',
        width: '100%',
    },
    skillBox: {
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 'max(10px, 1.8vmin)',
        padding: '1vmin',
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
    },
    svgImage: {
        flex: 1,
        resizeMode: 'contain',
        width:30,
        height:30,
    }

});