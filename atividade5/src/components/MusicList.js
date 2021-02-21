//https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json

import React, { Component } from 'react'
import { StyleSheet, FlatList, Text } from 'react-native'


import CardItem from './card/CardItem'

export default class MusicList extends Component {

    constructor(props) {
        super(props)
        this.state = { musics: [] }
    }

    componentDidMount() {
        return fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/' + this.props.albumTracks)
            .then(response => response.json())
            .then(responseJson => this.setState({ musics: responseJson.tracks }))
    }

    render() {
        return (
                <CardItem>
                    <FlatList
                        data={this.state.musics}
                        renderItem={({ item }) => <Text>{item.id} - {item.duration} - {item.title}</Text>}
                        keyExtractor={(index, item) => index + item}
                    />
                </CardItem>
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

        backgroundColor: '#f2f2f2',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    header: {
        fontSize: 20
    }

})