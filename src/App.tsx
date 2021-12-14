import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store';
import Navigation from './navigation';

const store = configureStore();

interface Props { }
function App({ }: Props) {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <Navigation />
            </SafeAreaView>
        </Provider>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default App;