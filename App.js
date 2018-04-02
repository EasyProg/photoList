import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PhotoList from './components/PhotoList';

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <PhotoList/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default App;