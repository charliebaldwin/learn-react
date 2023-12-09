import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import NavBar from './NavBar';

export default function ColumnsGroup (props) {


    return (
        <View style={styles.group}>

            <View style={styles.sidebar}>
                <NavBar/>
            </View>

            <View style={styles.main}>
                <ScrollView style={styles.scrollgroup}>
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
        
    },
    scrollgroup: {
        height: 600,
        padding: 100,
    },
    sidebar: {
        width: '20%',
        borderColor: '#000',
        borderWidth: 5,
        borderRadius: 20,
    },
    main: {
        width: '80%',
        borderColor: '#000',
        borderWidth: 5,
        borderRadius: 20,
        alignItems: 'center',
    },
});