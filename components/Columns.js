import React, {useRef, useState, createRef} from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import NavBar from './NavBar'
import ScrollSection from './ScrollSection'
import ScrollBar from './ScrollBar'
import Animated, {useAnimatedStyle, useSharedValue, Easing, withSpring, withTiming} from 'react-native-reanimated';


export default function ColumnsGroup (props) {
    

    var scrollRef = React.createRef();

    var sectionCount = 7;
    const onNavClick = (index) => {
        const scrollY = (index / sectionCount) * 4000;
        scrollRef.current.scrollTo({x: 0, y:scrollY, animated:true});
    }
    const [scrollPos, setScrollPos] = useState(0);

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
                onScroll = {(event) => {
                    setScrollPos(event.nativeEvent.contentOffset.y);
                } }
                scrollEventThrottle={16}
                >
                    <View style={{height: 200}}/>
                    <ScrollSection title={'home'}/>
                    <ScrollSection title={'shaders'}/>
                    <ScrollSection title={'ui design'}/>
                    <ScrollSection title={'scripting'}/>
                    <ScrollSection title={'roles'}/>
                    <ScrollSection title={'about me'}/>
                    <ScrollSection title={'contact'}/>
                    <View style={{height: 500}}/>
                </ScrollView>

                
            </View>

            <View style={styles.colSidebar}>
                <ScrollBar scrollPos={scrollPos}/>
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
        paddingHorizontal: 50,
        borderRadius:30,
    },
});