import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class Card extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#DA70D6',
        height: 960,
        backgroundColor: '#DA70D6',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,

        justifyContent: 'center',
       

       
    }
})