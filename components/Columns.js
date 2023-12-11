import React, {useRef, useState, createRef} from 'react'
import {Text, StyleSheet, View, ScrollView} from 'react-native'
import NavBar from './NavBar'
import ScrollSection from './ScrollSection'
import ScrollBar from './ScrollBar'
import Animated, {useAnimatedStyle, useSharedValue, Easing, withSpring, withTiming} from 'react-native-reanimated';
import '../fonts/kanit.css';


export default function ColumnsGroup (props) {
    
    var scrollRef = React.createRef();

    var sectionCount = 7;
    const onNavClick = (index) => {
        const scrollY = (index / sectionCount) * 4000;
        scrollRef.current.scrollTo({x: 0, y:scrollY, animated:true});
    }
    const [scrollPos, setScrollPos] = useState(0);
    const [scrollMaxHeight, setScrollMaxHeight] = useState(0);
    const [scrollVisibleHeight, setScrollVisibleHeight] = useState(0);

    return (
        <View style={styles.group}>
            <View style={styles.colSidebar}>
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
                    <View style={{height: 100}}/>
                    <ScrollSection 
                        title={"hi. I'm Charlie."}
                        subtitle={"I’m a UI and technical artist making games."}
                        body={"scroll to see some of my work, or use the sidebar to jump to the section you’re looking for."}
                        tailSpacing = {100}
                    />
                    <ScrollSection subtitle={'shaders'} tailSpacing = {500}/>
                    <ScrollSection subtitle={'ui design'} tailSpacing = {500}/>
                    <ScrollSection subtitle={'scripting'} tailSpacing = {500}/>
                    <ScrollSection subtitle={'roles'} tailSpacing = {500}/>
                    <ScrollSection subtitle={'about me'} tailSpacing = {500}/>
                    <ScrollSection subtitle={'contact'} tailSpacing = {500}/>
                    <View style={{height: 500}}/>
                </ScrollView>

                
            </View>

            <View style={styles.colSidebar}>
                <ScrollBar totalHeight={4885} visibleHeight={800} scrollPos={scrollPos}/>
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
        
    },
    scrollgroup: {
        height: 800,
        padding: 0,
        width: '80%',
        borderRadius: 20,
    },
    colSidebar: {
        width: '2vw',
        flex: 1,
        justifyContent:'center',
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
    }
});