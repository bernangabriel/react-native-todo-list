import { DefaultTheme } from '@react-navigation/native';
export const primary = '#2980b9';


const gray = {
    gray_100: '#ededed',
    gray_300: '#abafb9'
};


export default {
    ...DefaultTheme,
    primary,
    white: '#fff',
    light: {
        primary
    },
    dark: {
        primary
    },
    gray
};