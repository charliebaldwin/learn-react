import React from 'react';
import {Linking, StyleSheet, View, Text} from 'react-native';
import { Ionicons }  from '@expo/vector-icons'
import ScrollSection from './ScrollSection';
import IconButton from './IconButton';
import Button from './Button';

import '../fonts/kanit.css';

export default function SectionRoles ({textStyles}) {

    return (
        <View>
            <Text style={textStyles.sectionTitle}>
                roles
            </Text>

            <View style={styles.rolesGroup}>

                <Role 
                    title={'associate technical artist'}
                    company={'roto'}
                    date={'2023-present'}
                    body={'Designed and developed digital interactive exhibits for large museum & science center clients, in a team of 10 developers embedded within a larger design-build firm. Using primarily Unity, but also in UE5 and TouchDesigner, I solved a plethora of visual & technical challenges using a combination of prior knowledge and thorough research. I also designed from scratch UX and screen layouts for apps, taking them from concept all the way to in-engine implementation.'}
                    url={'https://roto.com/'}
                    textStyles={textStyles}
                />

                <Role 
                    title={'junior 3d artist'}
                    company={'nowhere'}
                    date={'2020-2022'}
                    body={'Designed and modeled avatars for a 3D virtual presence web-based application. Took environments through pipeline to optimize, beautify, and implement them in-engine. Created custom assets to fit aesthetically in new environments. Collaborated with engineers to improve custom tools used to send scenes from Blender to proprietary engine.'}
                    url={'https://nowhere.io/'}
                    textStyles={textStyles}
                />

                <Role 
                    title={'student assistant'}
                    company={'wpi imgd'}
                    date={'2020-2022'}
                    body={'Assisted professors with running courses, including 3D Modeling I/II and 3D Animation I. Provided students with techniques and workflows for ZBrush and Maya. Advised on, guided, and critiqued students’ final projects to maximize their success.'}
                    url={'https://imgd.wpi.edu/'}
                    textStyles={textStyles}
                />

                <Role 
                    title={'instructor'}
                    company={'id tech camps'}
                    date={'summer 2019'}
                    body={'Taught programming and game design fundamentals to students aged 8-16. Worked with campers, fellow instructors, and camp director to ensure smooth camp experience.'}
                    url={'https://www.idtech.com/'}
                    textStyles={textStyles}
                />

                <View style={{height: 60, width: 'auto', marginVertical: 10}}>
                <Button label={'view full resumé'} icon={'document-text'}/>
                </View>


            </View>
        </View>
    );
}

function Role ({textStyles, title, date, company, body, url}) {

    return (
        <View style={styles.roleContainer}>
        <View style={styles.topBar}>
            <View style={{flex: 2, paddingTop: '.5vw', gap: '.5vmin'}}>
            <Text style={[textStyles.label, {width: 'auto'}]}>{title}</Text>
            <Text style={[textStyles.sublabel]}>{date}</Text>
            </View>
            <Text style={[textStyles.label, {textAlign: 'right', marginTop: '1vw', paddingRight:'0.5vw', width: 'auto'}]}>{company}</Text>
            <IconButton icon={'link'} onPress={() => { Linking.openURL(url) }} isVisible={true} shadowSizes={[.4, 1]} size={6}/>
        </View>

        <View style={styles.bodyContainer}>
        <Text style={textStyles.bodySmall}>
        {body}
        </Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    rolesGroup: {
        flexDirection: 'column',
        height: 'auto',
        width: '100%',
    },
    roleContainer: {
        borderColor: "#000",
        borderWidth: 0,
        borderRadius: 'max(10px, 1.8vmin)',
        boxShadow: '0.3vmin 0.3vmin 0.8vmin rgba(0, 0, 0, 0.5)',

        flexDirection: 'column',
        padding: '0vw',
        paddingBottom: '1vw',

        height: 'auto',
        width: "100%",
        marginVertical: 10,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '1vmin',

        borderColor: 'red',
        borderWidth: 0,
    },
    bodyContainer: {
        paddingRight: '4vw',
        paddingBottom: '1vw',
        paddingLeft:'1.5vw',
    }
});