import React from 'react';
import { Modal, StyleSheet, Text, View,TouchableHighlight,Image , Share } from 'react-native';
import { connect, useSelector} from 'react-redux'
const ArticleDetails = (props) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          icn.web_url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          
        } else {
       
        }
      } else if (result.action === Share.dismissedAction) {
      
      }
    } catch (error) {
      alert(error.message);
    }
  };


 let myData= useSelector(state=>state.artDetails.articlesDetails.item) 

 let icn = ( myData) ? myData : null
 if (icn == null) {
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
           <Image style={styles.image}  source={{uri:`https://www.nytimes.com/${icn.imgURL.url}`}} ></Image> 
            <Text style={styles.modalText}>{icn.title}</Text>
            <Text >{icn.lead_paragraph}</Text>
            <View>


            </View>

              <View style={styles.ButtonsContainer}>

                <View><Text>Category:{icn.category}</Text></View>
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
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection:"row",
        
        
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
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        color:'red',
       
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
    });
const mapStateToProps = (state) => ({ articlesDetails: state.artDetails.articlesDetails.item });
export default connect(mapStateToProps)(ArticleDetails);