import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Platform, TouchableNativeFeedback, Modal, TouchableHighlight, Button } from 'react-native';
import { connect, useSelector, useDispatch } from 'react-redux'
import { getArticles } from '../store/actions/articlesActions'
import * as articlesActions from '../store/actions/articlesActions'
import ArticleItems from './ArticleItems';
import ArticleDetails from './ArticleDetails';
import { getarticleDetails } from '../store/actions/articlesDetailsActions'
import { SearchArtical } from '../store/actions/searchAction'
import { SearchBar } from 'react-native-elements';
import { resetData } from '../store/actions/searchAction'
const TopArticles = (props) => {
  const [show, setShow] = useState(true)
  const handleClick = (e) => {
    setVisible(true)
    props.getarticleDetails(e)
  }

  let mySearchData = useSelector(state => state.searchItem.searchItem)
  const [visible, setVisible] = useState(false);
  const [reRenderBoolean, setReRenderBoolean] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(articlesActions.getArticles())
  }, [mySearchData])

  const [modalVisible, setModalVisible] = useState(false);
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }


  
  const [searchInput, setSearchInput] = useState('');


  const handleChange = val => {
    setSearchInput(val);
  }

  const onSearch = (searchInput) => {  
    props.SearchArtical(searchInput);
     
    setReRenderBoolean(reRenderBoolean);
    setShow(false);
    props.resetData()
    console.log(mySearchData);


  }

  const back=()=>{
    setShow(true);
  }


  return (

    <View style={styles.nzel}>
      <View >
        <View style={styles.search} >
          <View style={styles.searchBarBox}>
            <SearchBar  containerStyle={{backgroundColor: '#919191'}}
                          inputStyle={{backgroundColor: 'white'}} 
                          style={styles.SearchBar}
              onSubmit={(query) => handleFormSubmit(query)}
              type="text"
              value={searchInput}
              onChangeText={(e) => handleChange(e)}
              placeholder="Type Here..."
            />
          </View>
          <View style={styles.buttonBox}>
            <Button title={'Search'}
              style={styles.button}
              onPress={() => onSearch(searchInput)}
            >

            </Button>
          </View>

        </View>
        <ArticleDetails visible={modalVisible} setVisible={setModalVisible}></ArticleDetails>
        {show ?
          <FlatList style={styles.FlatList}
            data={props.articles} 
            keyExtractor={item => (item.id)}
            renderItem={itemData => (
              <TouchableCmp useForeground onPress={() => { handleClick(itemData) }}>
                <View>
                <ArticleDetails visible={visible}
                  setVisible={setVisible}
                  uriz={
                    (itemData.item.imgURL || itemData.item.imgURL !== undefined)
                      ? itemData.item.imgURL
                      : "newsgraphics/images/icons/defaultPromoCrop.png"
                  }
                ></ArticleDetails>
                  <ArticleItems
                    desc={itemData.item.desc}
                    title={itemData.item.title}
                    uriz={
                      itemData.item.imgURL
                        ? itemData.item.imgURL
                        : "newsgraphics/images/icons/defaultPromoCrop.png"
                    }
                  ></ArticleItems>
                </View>
              </TouchableCmp>
            )}

            onEndReachedThreshold={0.01}
            onEndReached={async () => {
              await dispatch(articlesActions.addData());
              await dispatch(articlesActions.getArticles());
            }}
          /> :
          <View>
            <Button title={'GO HOME'} onPress={()=>{back()}}></Button>
            <FlatList extraData={reRenderBoolean} style={styles.FlatList}
            data={mySearchData}  
            keyExtractor={item => (item.id)}
            renderItem={itemData => (
              <TouchableCmp useForeground onPress={() => { handleClick(itemData) }}>
                <View>
                  <ArticleDetails visible={visible}
                    setVisible={setVisible}
                    uriz={
                      (itemData.item.imgURL || itemData.item.imgURL !== undefined)
                        ? itemData.item.imgURL
                        : "newsgraphics/images/icons/defaultPromoCrop.png"
                    }
                  ></ArticleDetails>
                  <ArticleItems
                    desc={itemData.item.desc}
                    title={itemData.item.title}
                    uriz={
                      itemData.item.imgURL
                        ? itemData.item.imgURL
                        : "newsgraphics/images/icons/defaultPromoCrop.png"
                    }
                  ></ArticleItems>
                </View>
              </TouchableCmp>
            )}


          
          />
          </View>
        }
      </View>

    </View>


  );

};

const styles = StyleSheet.create({
  button: {

    color: 'white',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center'



  },
  buttonBox: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 4,
    margin: 2,
    flexDirection: 'row',
    justifyContent: 'center'

  },
  searchBarBox: {
    flex: 3,
    borderWidth: 2,
    borderRadius: 4,
    margin: 2

  },
  SearchBar: {
    flex: 1,


  },

  search: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    width: '100%',

  },
  FlatList: {

    height: '100%',

  },

  image: {
    width: '100%',
    height: '100%'
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    flex: 1,
    margin: 15
  },
  article: {
    height: 300,
    margin: 20,
    overflow: 'visible'
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  title: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16

  },
  lead_paragraph: {
    color: 'blue',
    marginVertical: 20,
  },
  nzel: {
    marginTop: 50
  }
});




const mapStateToProps = (state) => ({ articles: state.art.newsFeed });


export default connect(mapStateToProps, { getarticleDetails, SearchArtical , resetData })(TopArticles);