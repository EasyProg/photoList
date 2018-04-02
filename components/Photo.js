/**
 * Created by Михаил on 30.03.2018.
 */
/**
 * Created by Михаил on 30.03.2018.
 */
/**
 * Created by Михаил on 15.03.2018.
 */
import React, {Component} from 'react';
import {Image} from 'react-native';
export default class CustomImage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let imageStyle = {
            width:this.props.size,
            height:this.props.size,
            margin:5
        };
        return (<Image style={imageStyle}
                       source={{uri:this.props.source}}
        />);
    }
}