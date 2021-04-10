import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class CardItem extends Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#DDA0DD',
        borderRadius: 6,
        marginHorizontal: 10,
        marginVertical: 10,
        position: 'relative',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})