import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import Card from './card/Card'
import CardItem from './card/CardItem'
import MyButton from './MyButton'

export default class MusicDetail extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Card >

                <CardItem>
                    <MyButton
                        onPress={
                            () => this.props.navigation.goBack()
                        }
                    >
                        Voltar
                    </MyButton>
                </CardItem>
            </Card>

        )
    }
}