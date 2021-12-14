import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList
} from 'react-native';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { TodoState } from '../../store/type';
import { addTodo, removeTodo } from '../../store/actionCreators/todo';
import TodoTextEntry from '../../components/TodoTextEntry';
import TodoItem from './components/TodoItem';
import Empty from '../../components/common/Empty';

import Fonts from '../../constants/Fonts';
import Sizes from '../../constants/Sizes';
import Todo from '../../models/todo.model';

interface Props { };
function HomeScreen({ }: Props) {
    const [value, setValue] = useState<string>('');
    const todos: readonly Todo[] = useSelector((state: TodoState) => state.todos);
    const dispatch: Dispatch = useDispatch();

    //Add new item
    const onPressAddItemHandler = (value: string) => {
        if (value) {
            dispatch(addTodo(value));
            setValue(''); //clear input text after add item
        }
    }

    //Remove existing item
    const onPressDeleteItemHandler = (index: number) => {
        dispatch(removeTodo(index));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Todo App</Text>
            <TodoTextEntry
                placeholder="Add your new todo item"
                displayWordCounter
                value={value}
                onChangeText={setValue}
                onPressAddItem={onPressAddItemHandler} />

            {!todos.length
                ? <Empty />
                : <FlatList
                    data={todos}
                    keyExtractor={(_, index) => `${index}`}
                    renderItem={({ item, index }) => <TodoItem todo={item} onPressDeleteItem={() => onPressDeleteItemHandler(index)} />} />}
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