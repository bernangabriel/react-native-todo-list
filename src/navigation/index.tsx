import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screen
import HomeScreen from '../screens/HomeScreen';
import { Routes } from './RoutesEnum';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Routes.Home}>
                <Stack.Screen name={Routes.Home} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary
    }
});