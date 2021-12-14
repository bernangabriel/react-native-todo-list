import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import Colors from '../../constants/Colors';

interface Props {
    title?: string;
    subtitle?: string;
}
function Empty({ title, subtitle }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'You have no todos item added'}</Text>
            <Text style={styles.subtitle}>{subtitle || 'Press + to add a new one'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.gray.gray_400
    },
    subtitle: {
        fontSize: 14,
        marginTop: 15
    }
});

export default Empty;
