import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screen
import TodoScreen from '../screens/todo/TodoScreen';
import { Routes } from './RoutesEnum';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

//custom navigation theme
const customTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Colors.white
    }
};

export default () => {
    return (
        <NavigationContainer theme={customTheme}>
            <Stack.Navigator screenOptions={{ headerShown: false, }} initialRouteName={Routes.Home}>
                <Stack.Screen name={Routes.Home} component={TodoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary
    }
});