import React, {useRef, useState, createRef, forwardRef, useContext, createContext} from 'react'
import {Text, StyleSheet, View, ScrollView} from 'react-native'
import Animated, {useAnimatedStyle, useSharedValue, Easing, withSpring, withTiming} from 'react-native-reanimated';

import ScrollSection from './ScrollSection'
import SectionHome from './SectionHome'
import SectionWorks from './SectionWorks'
import SectionRoles from './SectionRoles';
import SectionAbout from './SectionAbout'
import SectionContact from './SectionContact'

import WorkModal from './WorkModal'
import NavBar from './NavBar'
import ScrollBar from './ScrollBar'
import IconButton from './IconButton'
import Button from './Button'
import SoundButton from './SoundButton';


import '../fonts/kanit.css';
import { idText } from 'typescript';


export default function ColumnsGroup (props) {
    
    const scrollRef = React.useRef();

    const [scrollPos, setScrollPos] = useState(0);
    const [scrollMaxHeight, setScrollMaxHeight] = useState(0);
    const [scrollVisibleHeight, setScrollVisibleHeight] = useState(0);

    const [pageY_0, setPageY_0] = useState(0);
    const [pageY_1, setPageY_1] = useState(0);
    const [pageY_2, setPageY_2] = useState(0);
    const [pageY_3, setPageY_3] = useState(0);
    const [pageY_4, setPageY_4] = useState(0);

    const [scrollerY_0, setScrollerY_0] = useState(0);
    const [scrollerY_1, setScrollerY_1] = useState(0);
    const [scrollerY_2, setScrollerY_2] = useState(0);
    const [scrollerY_3, setScrollerY_3] = useState(0);
    const [scrollerY_4, setScrollerY_4] = useState(0);

    const sections = [
        {index: 0, name:'home',   pageY: pageY_0, setPageY: setPageY_0, scrollerY: scrollerY_0, setScrollerY: setScrollerY_0},
        {index: 1, name:'works',  pageY: pageY_1, setPageY: setPageY_1, scrollerY: scrollerY_1, setScrollerY: setScrollerY_1},
        {index: 2, name:'roles',  pageY: pageY_2, setPageY: setPageY_2, scrollerY: scrollerY_2, setScrollerY: setScrollerY_2},
        {index: 3, name:'about',  pageY: pageY_3, setPageY: setPageY_3, scrollerY: scrollerY_3, setScrollerY: setScrollerY_3},
        {index: 4, name:'contact',pageY: pageY_4, setPageY: setPageY_4, scrollerY: scrollerY_4, setScrollerY: setScrollerY_4},
    ];
    const [currIndex, setCurrIndex] = useState(0);
    const currSection = useSharedValue(sections[0]);

    const onNavClick = (index) => {
        setCurrIndex(index);
        currSection.value = sections[index];
        const scrollY = sections[index].pageY - 50;
        scrollRef.current.scrollTo({x: 0, y:scrollY, animated:false});
        console.log(scrollY);
    }

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({title: 'empty modal'});
    const openWorkModal = (modalContent) => {
        setShowModal(true);
        // setModalContent({
        //     title: modalContent.title,
        // });
    }


    return (
        <View style={styles.group}>
            <WorkModal enabled={showModal} setEnabled={setShowModal} content={modalContent} textStyles={textStyles}/>
            <View style={styles.sidebarLeft}>
                <NavBar
                    onNavClicked={onNavClick}
                    sections={sections}
                    currSection={currSection}
                />
            </View>

            <View style={styles.colMain}>
                <ScrollView
                ref={scrollRef}
                style={styles.scrollgroup}
                directionalLockEnabled={true}
                showsVerticalScrollIndicator={true}
                onLayout={({
                    nativeEvent: {
                        layout: {height}
                    }
                }) => {
                    setScrollVisibleHeight(height);
                }}
                onScroll = {(event) => {
                    const newY = event.nativeEvent.contentOffset.y;
                    setScrollPos(newY);
                    if(currIndex < sections.length - 1 && newY >= sections[currIndex+1].pageY - 200) {
                        currSection.value=sections[currIndex+1];
                        setCurrIndex(currIndex + 1);
                    } else if (currIndex > 0 && newY < sections[currIndex].pageY - 200) {
                        currSection.value=sections[currIndex-1];
                        setCurrIndex(currIndex - 1);
                    }
                }}
                scrollEventThrottle={32}
                >
                    <View 
                    onLayout={({ nativeEvent: { layout: {height} }}) => {
                        setScrollMaxHeight(height);
                    }}
                    style={styles.sectionsContainer}
                    >

                        <View style={{height: 50}}/>

                        <ScrollSection tailSpacing={100} index={0} sections={sections}>
                            <View style={{height: '20vh'}}/>
                            <SectionHome textStyles={textStyles}/>
                        </ScrollSection>

                        <View style={styles.divider}/>

                        <ScrollSection tailSpacing={50} index={1} sections={sections}>
                            <SectionWorks textStyles={textStyles} onPressWork={openWorkModal}/>
                        </ScrollSection>

                        <View style={styles.divider}/>

                        <ScrollSection tailSpacing = {50} index={2} sections={sections}>
                            <SectionRoles textStyles={textStyles}/>
                        </ScrollSection>

                        <View style={styles.divider}/>

                        <ScrollSection tailSpacing = {50} index={3} sections={sections}>
                            <SectionAbout textStyles={textStyles}/>
                        </ScrollSection>

                        {/* <View style={{height: 50, marginBottom: 100}}>
                        <SoundButton label="mikaela click this!" icon="volume-high" />
                        </View> */}

                        <View style={styles.divider}/>
                        
                        <ScrollSection tailSpacing = {'50vh'} index={4} sections={sections}>
                            <SectionContact textStyles={textStyles}/>
                        </ScrollSection>

                    </View>
                </ScrollView>

                
            </View>

            <View style={styles.sidebarRight}>
            {/* <View style={{flex: 1,backgroundColor:'red', flexDirection:'column'}}/> */}
{/* 
                <ScrollBar totalHeight={scrollMaxHeight} visibleHeight={scrollVisibleHeight} scrollPos={scrollPos}/> 
*/}
                <View style={{flex: 1, justifyContent:'center', alignContent:'center', paddingBottom:30}}>
                    <IconButton 
                        icon={"caret-up"}
                        isVisible={scrollPos > 0}
                        onPress={() => {
                            scrollRef.current.scrollTo({x: 0, y:scrollY, animated:true});
                        }}
                        shadowSizes={[0.5, 1.5]}
                        size={8}
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
        flex: 2.5,
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
        flex: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '0vw',
        borderRadius:30,
    },
    sectionsContainer: {
        marginRight: '16vw',
        marginLeft: '8vw',
    },
    title: {
        fontSize: 96,
        fontWeight: 700,
        fontFamily:'Kanit',
    },
    full: {
        width: '100%',
        height: '100%',
    },
    divider: {
        borderColor: '#f5f5f5',
        borderWidth: 3,
        borderRadius: 10,
        width: '80%',
        height: 6,
        alignSelf: 'center',
        margin: 5,
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
        lineHeight: 'min(56pt, 2.5vw)',
        width: '60%',
        paddingBottom: '1vw',
    },
    bodyLarge: {
        fontSize: 'min(18pt, 1.5vw)',
        fontWeight: 400,
        textAlign: 'left',
        fontFamily: 'Kanit',
        lineHeight: 'min(24pt, 2vw)',
    },
    bodySmall: {
        fontSize: 'min(14pt, 1.2vw)',
        fontWeight: 400,
        textAlign: 'left',
        fontFamily: 'Kanit',
        lineHeight: 'min(20pt, 1.65vw)',
    },
    label: {
        fontSize: 'min(36pt, 1.8vw)',
        fontWeight: 600,
        textAlign: 'left',
        fontFamily: 'Kanit',
        lineHeight: 'min(36pt, 2vw)',
        paddingLeft:'1.5vw',
        marginTop: '.5vw',
        width: '55%',
    },
    sublabel: {
        fontSize: 'min(32pt, 1.4vw)',
        fontWeight: 500,
        textAlign: 'left',
        fontFamily: 'Kanit',
        fontStyle: 'italic',
        lineHeight: 'min(28pt, 1.2vw)',
        paddingLeft:'1.5vw',
    },
});