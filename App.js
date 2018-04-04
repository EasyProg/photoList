import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import PhotoList from './containers/PhotoList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {orientation:'portrait'};
        Dimensions.addEventListener('change', () =>
        {
            this.setState ({orientation:this.isPortrait()?'portrait':'landscape'});
        });
    }
    componentDidMount() {
    this.setState ({orientation:this.isPortrait()?'portrait':'landscape'});
    }
    isPortrait = () =>
    {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    };
    render() {
        return (
            <View style={styles.container}>
                <PhotoList orientation={this.state.orientation}/>
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