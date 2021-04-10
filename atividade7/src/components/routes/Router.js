import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListUsuario from '../screens/ListUsuario';
import EditUsuario from '../screens/EditUsuario';
import AddUsuario from  '../screens/AddUsuario';

const Stack = createStackNavigator();

function Screens() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='ListUserScreen'
                    component={ListUsuario}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='EditUserScreen'
                    component={EditUsuario}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='AddUserScreen'
                    component={AddUsuario}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Screens;