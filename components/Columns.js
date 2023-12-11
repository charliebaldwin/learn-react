import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import NavBar from './NavBar';
import Col from 'react-bootstrap/Col';

export default function ColumnsGroup (props) {


    return (
        <View style={styles.group}>
            <View style={styles.colSidebar}>
                <NavBar/>
            </View>

            <View style={styles.colMain}>
                <ScrollView style={styles.scrollgroup} directionalLockEnabled={true}>
                    {props.children}
                    <View style={{height: 2000}}/>
                </ScrollView>
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
        height: 600,
        padding: 0,
        borderColor: '#000',
        borderWidth: 5,
        borderRadius: 20,
    },
    colSidebar: {
        width: '2vw',
        flex: 1,
        justifyContent:'center',
    },
    colMain: {
        flex: 5,
        alignItems: 'center',
    },
});