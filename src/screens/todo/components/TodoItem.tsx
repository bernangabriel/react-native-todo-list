import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';
import Todo from '../../../models/todo.model';

interface Props {
    todo: Todo;
    onPressDeleteItem: () => void;
}
function TodoItem({ todo, onPressDeleteItem }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{todo.title}</Text>
            </View>
            <Pressable style={styles.iconContainer} onPress={onPressDeleteItem}>
                <Icon name='trash' color={Colors.white} size={17} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.gray.gray_100,
        borderRadius: 3,
        marginVertical: 5,
        marginRight: 4
    },
    titleContainer: {
        flex: 1,
        padding: 4,
        marginVertical: 3
    },
    title: {
        padding: 5,
        fontFamily: Fonts.Arial,
        fontSize: 13,
        color: Colors.gray.gray_400
    },
    iconContainer: {
        backgroundColor: Colors.danger,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopEndRadius: 3,
        borderBottomEndRadius: 3
    }
});

export default TodoItem;