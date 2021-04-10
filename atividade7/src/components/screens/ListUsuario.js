import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Card from '../core/Card'
import CardItem from '../core/CardItem'

import firestore from '@react-native-firebase/firestore';

export default class ListUsuario extends Component {

    constructor(props) {
        super(props)
        this.state = { users: [] , refresh: false }
    }

    listUsers() {
        firestore()
            .collection('users')
            .onSnapshot(querySnapshot => {
                const users = [];

                querySnapshot.forEach(documentSnapshot => {
                    users.push(documentSnapshot.data());
                });

                this.setState({ users })
            });
    }

    componentDidMount() {
        this.listUsers()
    }

    componentDidUpdate(prevState) {
        if (prevState.users != this.state.users) {
            this.listUsers()
        }
    }


    deleteUser = (item) => {
        Alert.alert(
            "Deletar Usuário",
            "Deseja realmente deletar " + item.name + "?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => {
                        firestore()
                            .collection('users')
                            .doc(item.uid)
                            .delete()
                            .then(() => {
                                console.log('Usuário removido');
                            });

                        this.listUsers()
                    }
                }
            ]
        );
    }

    renderUsers() {
        return (
            <FlatList
                data={this.state.users}
                renderItem={
                    ({ item }) => {
                        return (
                            <View style={styles.container}>
                                <View style={styles.item0}>
                                 <Text style={{ fontSize: 18 }}>{item.name}</Text>
                                </View>
                                <View style={styles.item1}>
                                   <Icon
                                        name="edit"
                                        size={18}
                                        color="#228B22"
                                        onPress={
                                            () => this.props.navigation.navigate('EditUserScreen', { item: item })
                                        }
                                    /> 
                                </View>
                                <View style={styles.item2}>
                                    <Icon
                                        name="delete"
                                        size={18}
                                        color="#d32f2f"
                                        onPress={
                                            () => this.deleteUser(item)
                                        }
                                    ></Icon> 
                                </View>
                            </View>
                        )
                    }
                }
                keyExtractor={(item, index) => item + index}
            />
        )
    }

    render() {
        return (
            <Card>

                <CardItem style={{ justifyContent: 'center', alignContent: 'center'}}>
                    <Icon
                        name="user"
                        size={18}
                        color="#009688"
                    > <Text style={{ fontSize: 18,fontWeight:'bold' ,color: '#000000' }}>Usuários</Text>
                    </Icon>

                </CardItem>

                <CardItem style={{height: 400}}>
                    {this.renderUsers()}
                </CardItem>

                <CardItem style={{ justifyContent: 'center', alignContent: 'center' }}>
                    <Icon
                        name="adduser"
                        size={18}
                        color="#009688"
                        onPress={
                            () => this.props.navigation.navigate('AddUserScreen')
                        }
                    > <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000000' }}>Cadastrar</Text>
                    </Icon>
                </CardItem>

                
            </Card >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',

        padding: 10
    },

    item0: {
        flexGrow: 10
    },

    item1: {
        flexGrow: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },

    item2: {
        flexGrow: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});
