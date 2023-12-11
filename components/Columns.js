import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import NavBar from './NavBar';
import Col from 'react-bootstrap/Col';

export default function ColumnsGroup (props) {


    return (
        <View style={styles.group}>

            {/* <View style={styles.sidebar}>
                <NavBar/>
            </View>

            <View style={styles.main}>
                <ScrollView style={styles.scrollgroup} directionalLockEnabled={true}>
                    {props.children}
                    <View style={{height: 2000}}/>
                </ScrollView>
            </View> */}

            <Col xs={2}>
                <NavBar/>
            </Col>
            <Col>
                <ScrollView style={styles.scrollgroup} directionalLockEnabled={true}>
                    {props.children}
                    <View style={{height: 2000}}/>
                </ScrollView>
            </Col>
        </View>
    );

}


const styles = StyleSheet.create({
    group: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        
    },
    scrollgroup: {
        height: 600,
        padding: 100,
    },
    sidebar: {
        width: '2vw',
        flex: 1,
        borderColor: '#000',
        borderWidth: 5,
        borderRadius: 20,
        justifyContent:'center',
    },
    main: {
        flex: 1,
        borderColor: '#000',
        borderWidth: 5,
        borderRadius: 20,
        alignItems: 'center',
    },
});