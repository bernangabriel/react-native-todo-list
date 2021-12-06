import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

interface Props { }
function App({ }: Props) {
    return (
        <View style={styles.container}>
            <Text>Welcome to RNTodoList App!</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default App;