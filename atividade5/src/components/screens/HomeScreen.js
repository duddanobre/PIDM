import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native'

import Header from '../Header'
import AlbumList from '../AlbumList'

export default class HomeScreen extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Header title='Albums App' />
                <AlbumList {...this.props} />
            </View>
        )
    }
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
    
            paddingTop: 15,
    
            backgroundColor: '#6959CD',
            
        },
       
});