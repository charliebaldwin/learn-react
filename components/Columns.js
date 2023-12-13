import React, {useRef, useState, createRef} from 'react'
import {Text, StyleSheet, View, ScrollView} from 'react-native'
import Animated, {useAnimatedStyle, useSharedValue, Easing, withSpring, withTiming} from 'react-native-reanimated';

import ScrollSection from './ScrollSection'
import SectionHome from './SectionHome'
import SectionWorks from './SectionWorks'
import SectionRoles from './SectionRoles';
import SectionAbout from './SectionAbout'
import SectionContact from './SectionContact'

import NavBar from './NavBar'
import ScrollBar from './ScrollBar'
import IconButton from './IconButton'

import '../fonts/kanit.css';
import { idText } from 'typescript';


export default function ColumnsGroup (props) {
    
    var scrollRef = React.useRef();
    var navbarRef = React.useRef();

    const [scrollPos, setScrollPos] = useState(0);
    var [scrollMaxHeight, setScrollMaxHeight] = useState(0);
    var [scrollVisibleHeight, setScrollVisibleHeight] = useState(0);



    const [currIndex, setCurrIndex] = useState(0);

    const sectionYHome = useSharedValue(0);
    const sectionYWork = useSharedValue(0);
    const sectionYRoles = useSharedValue(0);
    const sectionYAbout = useSharedValue(0);
    const sectionYContact = useSharedValue(0);

    const sectionYValues = [
        sectionYHome, sectionYWork, sectionYRoles, sectionYAbout, sectionYContact
    ];

    const onNavClick = (index) => {
        //const scrollY = (index / sectionCount) * scrollMaxHeight;
        const scrollY = sectionYValues[index].value - 50;
        scrollRef.current.scrollTo({x: 0, y:scrollY, animated:true});
        console.log(scrollY);
    }

    const updateNavBarScroll = (newY) => {
        let index = 0;
        for (let i=0; i<sectionYValues.length; i++) {
            if (newY > sectionYValues[i].value){
                index++;
            } else {
                break;
            }
        }
        console.log(index);
    } 


    return (
        <View style={styles.group}>
            <View style={styles.sidebarLeft}>
                <NavBar
                    ref={navbarRef}
                    onNavClicked={onNavClick}
                />
            </View>

            <View style={styles.colMain}>
                <ScrollView
                ref={scrollRef}
                style={styles.scrollgroup}
                directionalLockEnabled={true}
                showsVerticalScrollIndicator={false}
                // onScroll = {Animated.event(
                //     [{
                //         nativeEvent: {
                //             contentOffset: {
                //                 y: scrollPos,
                //             },
                //         },
                //     }],
                //     {useNativeDriver: false} 
                // )} 
                // scrollEventThrottle={16}
                onContentSizeChanged={height => {
                    setScrollMaxHeight(height);
                }}
                onLayout={({
                    nativeEvent: {
                        layout: {height}
                    }
                }) => {
                    setScrollVisibleHeight(height);
                }}
                onScroll = {(event) => {
                    setScrollPos(event.nativeEvent.contentOffset.y);
                    updateNavBarScroll(event.nativeEvent.contentOffset.y);
                } }
                scrollEventThrottle={16}
                >
                    <View onLayout={({
                        nativeEvent: {
                            layout: {height}
                        }
                    }) => {
                        setScrollMaxHeight(height);
                    }}>


                        <ScrollSection tailSpacing={160} sectionYValue={sectionYHome}>
                            <View style={{height: '20vh'}}/>
                            <SectionHome textStyles={textStyles}/>
                        </ScrollSection>

                        <ScrollSection tailSpacing={500} sectionYValue={sectionYWork}>
                            <SectionWorks textStyles={textStyles}/>
                        </ScrollSection>

                        <ScrollSection tailSpacing = {500} sectionYValue={sectionYRoles}>
                            <SectionRoles textStyles={textStyles}/>
                        </ScrollSection>

                        <ScrollSection tailSpacing = {500} sectionYValue={sectionYAbout}>
                            <SectionAbout textStyles={textStyles}/>
                        </ScrollSection>
                        
                        <ScrollSection tailSpacing = {500} sectionYValue={sectionYContact}>
                            <SectionContact textStyles={textStyles}/>
                        </ScrollSection>

                    </View>
                </ScrollView>

                
            </View>

            <View style={styles.sidebarRight}>
            <View style={{flex: 1,backgroundColor:'red'}}/>

                <ScrollBar totalHeight={scrollMaxHeight} visibleHeight={scrollVisibleHeight} scrollPos={scrollPos}/>

                <View style={{flex: 1, justifyContent:'flex-end', paddingBottom:30}}>
                    <IconButton 
                        icon={"caret-up"}
                        isVisible={scrollPos > 0}
                        onPress={() => {
                            scrollRef.current.scrollTo({x: 0, y:scrollY, animated:true});
                        }}
                    />
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    group: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'stretch',
        backgroundColor: '#fff'
        
    },
    scrollgroup: {
        height: '100vh',
        padding: 0,
        width: '80%',
        borderRadius: 20,
    },
    sidebarLeft: {
        flex: 1.5,
        minWidth: 160,
        justifyContent:'center',
    },
    sidebarRight: {
        flex: 1,
        flexShrink: 10,
        justifyContent:'center',
        alignItems: 'center',
    },
    colMain: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '8vw',
        borderRadius:30,
    },
    title: {
        fontSize: 96,
        fontWeight: 700,
        fontFamily:'Kanit',
    },
    full: {
        width: '100%',
        height: '100%',
    }
});

const textStyles = StyleSheet.create({
    title: {
        fontSize: 'min(96pt, 5vw)',
        fontWeight: 700,
        textAlign: 'left',
        fontFamily: 'Kanit',
        width: '75%',
    },
    sectionTitle: {
        fontSize: 'min(64pt, 3vw)',
        fontWeight: 600,
        textAlign: 'left',
        fontFamily: 'Kanit',
        lineHeight: 'min(60pt, 3vw)',
        width: '60%',
        paddingBottom: '1vw',
    },
    body: {
        fontSize: 'min(18pt, 1.5vw)',
        fontWeight: 400,
        textAlign: 'left',
        fontFamily: 'Kanit',
        lineHeight: 'min(24pt, 2vw)',
    },
    label: {
        fontSize: 'min(36pt, 1.8vw)',
        fontWeight: 600,
        textAlign: 'left',
        fontFamily: 'Kanit',
        lineHeight: 36,
        paddingLeft:'1.5vw',
        width: '55%',
    },
});