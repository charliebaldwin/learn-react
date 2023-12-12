import React, {useRef, useState, createRef} from 'react'
import {Text, StyleSheet, View, ScrollView} from 'react-native'
import NavBar from './NavBar'
import ScrollSection from './ScrollSection'
import SectionContact from './SectionContact'
import ScrollBar from './ScrollBar'
import IconButton from './IconButton'
import Animated, {useAnimatedStyle, useSharedValue, Easing, withSpring, withTiming} from 'react-native-reanimated';
import {LinearGradient} from 'expo-linear-gradient';
import '../fonts/kanit.css';


export default function ColumnsGroup (props) {
    
    var scrollRef = React.useRef();

    const [scrollPos, setScrollPos] = useState(0);
    var [scrollMaxHeight, setScrollMaxHeight] = useState(0);
    var [scrollVisibleHeight, setScrollVisibleHeight] = useState(0);

    var sectionCount = 7;
    const onNavClick = (index) => {
        const scrollY = (index / sectionCount) * scrollMaxHeight;
        scrollRef.current.scrollTo({x: 0, y:scrollY, animated:true});
    }


    return (
        <View style={styles.group}>
            <View style={styles.sidebarLeft}>
                <NavBar onNavClicked={onNavClick}/>
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
                        <View style={{height: 100}}/>
                        <ScrollSection 
                            title={"hi. I'm Charlie."}
                            subtitle={"I’m a UI and technical artist making games."}
                            body={"scroll to see some of my work, or use the sidebar to jump to the section you’re looking for."}
                            tailSpacing = {160}
                        />
                        <ScrollSection subtitle={'shaders'} tailSpacing = {500}/>
                        <ScrollSection subtitle={'ui design'} tailSpacing = {500}/>
                        <ScrollSection subtitle={'scripting'} tailSpacing = {500}/>
                        <ScrollSection subtitle={'roles'} tailSpacing = {500}/>
                        <ScrollSection subtitle={'about me'} tailSpacing = {500}/>
                        <ScrollSection subtitle={'contact'} tailSpacing = {500}>
                            <SectionContact/>
                        </ScrollSection>
                    </View>
                </ScrollView>

                
            </View>

            <View style={styles.sidebarRight}>
            <View style={{flex: 1,backgroundColor:'red'}}/>
                <ScrollBar totalHeight={scrollMaxHeight} visibleHeight={scrollVisibleHeight} scrollPos={scrollPos}/>
                <View style={{flex: 1, justifyContent:'flex-end', paddingBottom:30}}>
                    <IconButton
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
        flex: 1,
        justifyContent:'center',
    },
    sidebarRight: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    colMain: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 100,
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