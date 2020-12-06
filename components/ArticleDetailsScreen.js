import React from 'react';
import { Modal, StyleSheet, Text, View,TouchableHighlight,Image , Share,ScrollView} from 'react-native';
import { connect, useSelector} from 'react-redux'
const ArticleDetailsScreen = (props) => {
  let myData= useSelector(state=>state.artDetails.articlesDetails.item) 
  const onShare = async () => {
    try {
      const res = await Share.share({
        message:
          data.web_url,
      });
      if (res.action === Share.sharedAction) {
        if (res.activityType) {
          
        } else {
       
        }
      } else if (res.action === Share.dismissedAction) {
      
      }
    } catch (error) {
      alert(error.message);
    }
  };


 

 let data = ( myData) ? myData : null
 if (data == null) {
    return(<Text></Text>)
 } else {
     
    return (
        <Modal
        animationType="fade"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
           <Image style={styles.image}  source={{uri:`https://www.nytimes.com/${data.img.url}`}} ></Image> 
            <Text style={styles.modalText}>{data.title}</Text>
            <ScrollView>
            <Text >{data.paragraph}</Text>
            <View>


            </View>
            <View><Text style={styles.catText}>Category:{data.category}</Text></View>
              <View style={styles.ButtonsContainer}>
                <View>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={onShare}
                >
                  <Text style={styles.textStyle}>share</Text>
                </TouchableHighlight>
                </View>


                <View>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                      props.setVisible(!props.visible)
                  }}
                >
                  <Text style={styles.textStyle}>back to articles</Text>
                </TouchableHighlight>
                </View>

              </View>

              </ScrollView>
            </View>
             
          </View>


      </Modal>

      
    );
     
 }

    




};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      ButtonsContainer: {
        width:"100%",
        justifyContent: "space-between",
        alignItems: "baseline",
        flexDirection:"row",
        marginTop:50
      },
      modalView: {
        height: '100%',
        width:'100%',
        margin: 5,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        padding: 25,
        elevation: 2,
        marginLeft:40
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        color:'black',
       fontSize:25
      },
      imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
      },  image: {
        width: '100%',
        height: '30%'
      },
      catText: {
        marginBottom: 15,
        textAlign: "center",
        color:'blue',
      }
    });
const mapStateToProps = (state) => ({ articlesDetails: state.artDetails.articlesDetails.item });
export default connect(mapStateToProps)(ArticleDetailsScreen);