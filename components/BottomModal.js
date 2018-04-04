/**
 * Created by Михаил on 03.04.2018.
 */
/**
 * Created by Михаил on 03.04.2018.
 */
import React, {Component} from 'react';
import {Image,View,Text,TouchableOpacity,Share,Platform} from 'react-native';
import styles from '../styles/BottomModal';
export default class BottomModal extends Component
{
    render () {
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
                }).then(result => console.log(result));
        };
        return (
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
        )
    }

}