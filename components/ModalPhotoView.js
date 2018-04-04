
import React, {Component} from 'react';
import {Image,Modal,View,Text} from 'react-native';
import styles from '../styles/ModalPhotoView';
import ImageViewer from 'react-native-image-zoom-viewer';
import BottomModal from './BottomModal';
export default class ModalPhotoView extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()   {
        return (
        <Modal animationType={'fade'}
        visible={this.props.visible}
        style={styles.modal}
        onRequestClose={()=>{}}>
        <View style={styles.modal}>
        <Text style={styles.textModal} onPress={()=>this.props.setVisible(false)}>
        X
        </Text>
        <ImageViewer imageUrls={this.props.urls} index={this.props.activeIndex} onChange={(index)=>this.props.changeImage(index)}/>
        <BottomModal img={this.props.img}/>
        </View>
        </Modal>
              );
              }
}
