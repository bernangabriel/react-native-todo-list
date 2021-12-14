import { DefaultTheme } from '@react-navigation/native';
export const primary = '#2980b9';


const gray = {
    gray_100: '#f1f2f6',
    gray_200: '#ededed',
    gray_300: '#abafb9',
    gray_400: '#2d3436'
};


export default {
    ...DefaultTheme,
    primary,
    white: '#fff',
    danger: '#dc3545',
    light: {
        primary
    },
    dark: {
        primary
    },
    gray
};