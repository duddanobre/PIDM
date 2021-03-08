//https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json

import React, { Component } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import AlbumDetail from './AlbumDetail'

export default class AlbumList extends Component {

    constructor(props) {
        super(props)
        this.state = { albums: [] }
    }

    componentDidMount() {
        return fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json')
            .then(response => response.json())
            .then(responseJson => this.setState({ albums: responseJson.albums }))
    }

    render() {
        return (
            <FlatList 
                data={this.state.albums}
                renderItem = {({item})=><AlbumDetail album={item} {...this.props}/> } 
                keyExtractor = {(index,item)=>index+item}
            />
        )
    }
}
