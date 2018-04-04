/**
 * Created by Михаил on 31.03.2018.
 */
import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:
{
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#000',
    alignItems: 'center',
    flexWrap:'wrap',
    justifyContent: 'center',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10
},
    list:
{
    flexDirection: 'row',
    justifyContent: 'center'
},
    modal:
{
    flex:1,
    backgroundColor:'#000'
},
    textModal:
{
    color:'#fff',
    fontSize:20,
    alignSelf:'flex-end',
    marginTop:10
},
    viewModalStyle:
{
    flex:1
},
    imgStyle:
{
    flex: 1,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10
},
    modalImageStyles:
{
    flex:1,
    margin:10,
    alignSelf:'stretch'
}
});

export default styles;