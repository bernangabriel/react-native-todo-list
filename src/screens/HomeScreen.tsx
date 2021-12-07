import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import TodoTextEntry from '../components/TodoTextEntry';
import Fonts from '../constants/Fonts';
import Sizes from '../constants/Sizes';

interface Props { };
function HomeScreen({ }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Todo App</Text>
            <TodoTextEntry
                placeholder="Add your new todo item"
                maxLength={10}
                displayWordCounter />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    mainTitle: {
        fontSize: Sizes.extraLarge,
        fontWeight: '600',
        fontFamily: Fonts.Arial,
        marginVertical: 20
    }
});

export default HomeScreen;