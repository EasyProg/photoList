/**
 * Created by Михаил on 30.03.2018.
 */
/**
 * Created by Михаил on 30.03.2018.
 */
import React, {Component} from 'react';
import {View,FlatList,Dimensions,TouchableOpacity,Text,YellowBox} from 'react-native';
import { isTablet } from 'react-native-device-detection';
import Photo from './Photo';
import ModalPhotoView from './ModalPhotoView';
export default class PhotoList extends Component {
    constructor() {
        super();
        this.state = {
            photos:[],
            modalVisible:false,
            nextPage:1,
        };
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);
        this.setModalVisible=this.setModalVisible.bind(this);
        this.activeImageChange=this.activeImageChange.bind(this);

        Dimensions.addEventListener('change', () =>
        {
            this.setState ({orientation:this.isPortrait()?'portrait':'landscape'});
        });
    }

    isPortrait = () =>
    {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    };
    fetchData(currentPage)
    {
        let page = currentPage === 1?'':`&page=${currentPage}`;
        let url = "https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF"+ page;
        fetch(url,
            {
                method:'get'
            }
        )   .then((response)=>response.json())
            .then((responseJson)=>{this.setState({photos:[...this.state.photos,...responseJson.photos],
                                                  nextPage:++responseJson.current_page,
                                                  activeImage:responseJson.photos[0],
            })
        });
    }
    getListNumColumns(tablet,orientation)
    {
        if  (tablet) {
            switch (orientation) {
                case 'portrait':
                    return "4";
                case 'landscape':
                    return "6";
                default:
                    return "4"
            }
        }
        else {
            switch (orientation) {
                case 'portrait':
                    return "2";
                case 'landscape':
                    return "4";
                default:
                    return "2"
            }
        }
    }
    getImageUrls(arr) {
      return arr.map((item)=>{return {url:item.image_url[0]}});
    };
    setModalVisible(visibility,item)
    {
        this.setState({modalVisible:visibility,
                       activeImage:item,
                       urls:this.getImageUrls(this.state.photos),
                       activeIndex:this.state.photos.indexOf(item)});
    }
    componentDidMount()

    {

        this.setState ({orientation:this.isPortrait()?'portrait':'landscape'});
        this.fetchData(this.state.nextPage);
    }
    activeImageChange(index) {
    this.setState({activeImage:this.state.photos[index],activeIndex:index});
    }
    render()
    {
        const tablet = isTablet;
        let   cols = this.getListNumColumns(tablet,this.state.orientation);
        let   width = Dimensions.get('window').width/(+cols)-10;
        return   (      <View>
            <ModalPhotoView visible={this.state.modalVisible}
            setVisible={this.setModalVisible}
            changeImage={this.activeImageChange}
            urls={this.state.urls}
            activeIndex={this.state.activeIndex}
            img={this.state.activeImage}/>
                            <FlatList key={cols}
                              numColumns={cols}
                              data={this.state.photos}
                              extraData={this.state.photos}
                              renderItem={({item})=>
                                <TouchableOpacity onPress={()=>{this.setModalVisible(true,item)}}>
                                    <Photo source={item.image_url[0]} size={width}/>
                                </TouchableOpacity>}
                              keyExtractor={(item,i)=>i}
                              onEndReached={()=>this.fetchData(this.state.nextPage)}
                              onEndThreshold={300}
            />
            </View>

                 )
    }
}