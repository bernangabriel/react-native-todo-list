import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    ViewProps,
    StyleProp
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

interface Props {
    style?: StyleProp<ViewProps>;
    placeholder?: string;
    maxLength?: number;
    displayWordCounter?: boolean | false;
};

function TodoTextEntry({ style, placeholder, maxLength = 100, displayWordCounter }: Props) {
    const [counter, setCounter] = useState<number | null>(null);

    const onChangeTextHandler = (value: string) => {
        setCounter(value && displayWordCounter
            ? value.length
            : null)
    }
    return (
        <>
            <View style={[style, styles.container]}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        autoCorrect={false}
                        placeholder={placeholder}
                        placeholderTextColor={Colors.gray.gray_300}
                        maxLength={maxLength}
                        onChangeText={onChangeTextHandler} />
                </View>
                <Pressable style={styles.actionContainer}>
                    <Icon style={styles.actionIcon}
                        name="plus"
                        color={Colors.white}
                        size={18} />
                </Pressable>
            </View>
            <View style={styles.wordCounterContainer}>
                {(displayWordCounter && counter) &&
                    <Text style={styles.wordCounterText}>
                        {counter} / {maxLength}
                        <Text style={{ fontStyle: 'italic' }}> words</Text>
                    </Text>}
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    textInputContainer: {
        flex: 1,
        height: 40,
        padding: 10,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: Colors.gray.gray_100
    },
    wordCounterContainer: {
        alignItems: 'flex-end',
        marginRight: 48
    },
    wordCounterText: {
        color: Colors.gray.gray_300,
        fontSize: 11
    },
    actionContainer: {
        width: 40,
        backgroundColor: Colors.primary,
        borderRadius: 2,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionIcon: {
    }
});

export default TodoTextEntry;