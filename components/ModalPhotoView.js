
import React, {Component} from 'react';
import {Image,Modal,View,Text,TouchableOpacity,Share,Platform} from 'react-native';
import styles from '../styles/ModalPhotoView';
import ImageViewer from 'react-native-image-zoom-viewer';
export default class ModalPhotoView extends Component
{
    constructor(props)
    {
        super(props);
    }
    render() {
        let initImg = {
            image_url:["1"],
            name:'',
            user: {
                fullname:''
            },
            camera:''
        };
        let img = this.props.img===undefined?initImg:this.props.img;
        let shareUrl = () => {
            Share.share(
                {
                    ...Platform.select({
                    ios: {
                        url:img.image_url[0]
                    },
                    android: {
                        message:'Have a look on : \n'+img.image_url[0]
                    }
                    })
                }).then(result => console.log(result)).catch(errorMsg => console.log(errorMsg));
        };
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
        <View style={styles.modalImageViewInfoCont}>
            <View>
                <Text style={styles.modalImageViewInfoText}>{img.name}</Text>
                <Text style={styles.modalImageViewInfoText}>{img.user.fullname}</Text>
                <Text style={styles.modalImageViewInfoText}>{img.camera}</Text>
            </View>
            <TouchableOpacity onPress={()=>{shareUrl()}}>
            <View style={styles.shareView}>
                <Image source={require('../img/share.gif')} style={styles.shareImage}/>
            </View>
            </TouchableOpacity>
        </View>
        </View>
        </Modal>
    );
    }
}
