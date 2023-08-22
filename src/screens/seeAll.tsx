import React, {useState} from "react";
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity, FlatList, ImageBackground, Modal} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import LinearGradient from "react-native-linear-gradient";
import { RootStackParamList } from "../../App";
import { Noti, Search, Headlines, Category, News, ModalView } from "../components/components";
import { data1, data2, category} from "../components/data";
import useModalHook from "../hooks/modalHook";
import api from "../hooks/fetchHook"

type SeeAllScreenProps = NativeStackScreenProps<RootStackParamList, 'SeeAll'>;

const SeeAllScreen = ({navigation, route}: SeeAllScreenProps)=>{
    const {news} = api();
    const {modalVisible, handleModal} = useModalHook();
    const [select, setSelect] = useState(false);
    const [filter, setFilter] = useState(0);
    return(
        <View
        style={styles.container}
        >
            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          handleModal();
        }}>
        <View style={styles.modalView}>
            <TouchableOpacity onPress={()=>{
                handleModal()
                setSelect(false)
                }} style={{flex:1}}></TouchableOpacity>
            <View style={styles.popUp}>
                <View style={styles.popTop}>
                    <Text style={styles.filterText}>Filter</Text>
                    <View style={styles.resetButton}>
                        <Image style={{width:10.8, height:12, marginRight:5}} source={require("../../assets/trash.png")} resizeMode="center"/>
                        <Text style={styles.resetText}>Reset</Text>
                    </View>
                </View>
                <View style={{margin:10, marginTop:20}}>
                    <Text style={styles.sortText}>Sort by</Text>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop:10}}>
                        
                        <TouchableOpacity onPress={()=>setFilter(1)}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={filter === 1 ?["#FF3A44", "#FF8086"]:["#FFFF", "#FFFF"]} style={[styles.resetButton, {marginRight:10, marginBottom:10, borderColor:filter===1 ?"#FF8086":"#F0F1FA"}]}>
                                <Text style={[styles.resetText, {color:filter===1 ?"#FFF":"#041E2F"}]}>Recommended</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>setFilter(2)}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={filter === 2 ?["#FF3A44", "#FF8086"]:["#FFFF", "#FFFF"]} style={[styles.resetButton, {marginRight:10, marginBottom:10, borderColor:filter===2 ?"#FF8086":"#F0F1FA"}]}>
                                <Text style={[styles.resetText, {color:filter===2 ?"#FFF":"#041E2F"}]}>Latest</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>setFilter(3)}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={filter === 3 ?["#FF3A44", "#FF8086"]:["#FFFF", "#FFFF"]} style={[styles.resetButton, {marginRight:10, marginBottom:10, borderColor:filter===3 ?"#FF8086":"#F0F1FA"}]}>
                                <Text style={[styles.resetText, {color:filter===3 ?"#FFF":"#041E2F"}]}>Most Viewed</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>setFilter(4)}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={filter === 4 ?["#FF3A44", "#FF8086"]:["#FFFF", "#FFFF"]} style={[styles.resetButton, {marginRight:10, marginBottom:10, borderColor:filter===4 ?"#FF8086":"#F0F1FA"}]}>
                                <Text style={[styles.resetText, {color:filter===4 ?"#FFF":"#041E2F"}]}>Channel</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>setFilter(5)}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={filter === 5 ?["#FF3A44", "#FF8086"]:["#FFFF", "#FFFF"]} style={[styles.resetButton, {marginRight:10, marginBottom:10, borderColor:filter===5 ?"#FF8086":"#F0F1FA"}]}>
                                <Text style={[styles.resetText, {color:filter===5 ?"#FFF":"#041E2F"}]}>Following</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={["#FF3A44", "#FF8086"]} style={styles.popBottom}>
                        <Text style={styles.saveText}>SAVE</Text>
                </LinearGradient>
            </View>
        </View>
      </Modal>
            <ScrollView contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps='handled'
            >
            <View style={styles.top}>
                <Search style={{width:"100%"}}/>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", margin:20}}>
                <TouchableOpacity onPress={()=>{
                    setSelect(!select)
                    handleModal();
                    }} style={{marginRight:20}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={select ?["#FF3A44", "#FF8086"]:["#FFF", "#FFFF"]} style={[styles.categoryView, {borderColor:select ?"#FF8086":"#F0F1FA"}]}>
                    <Image style={{width: 10, height: 11.875, marginRight:5}} source={select ? require("../../assets/filterWhite.png"):require("../../assets/filterBlack.png")} resizeMode="center"/>
                        <Text style={[styles.categoryText, {color:select  ? "#FFF":"#2E0505"}]}>
                            Filter
                        </Text>    
                    </LinearGradient>
                </TouchableOpacity>
                <Category category={category} style={{padding:0}}/>
            </View>
            <Text style={styles.topText}>About 11,130,000 results for <Text style={[styles.topText, {fontWeight:"700"}]}>COVID New Variant</Text>.</Text>
            <View style={styles.news}>
                <News data = {news} handleNavigation={()=>navigation.navigate("Detail")}/>
            </View>
            
        </ScrollView>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFF",
        flex:1
    },
    top:{
        flexDirection:"row", 
        alignItems:"center", 
        justifyContent:"space-between",
        marginHorizontal:20
    },
    topText:{
        color: "#041E2F",
        fontFamily: "Nunito",
        fontSize: 14,
        fontWeight: "400",
        textAlign:"center"
    },
    news:{
        alignItems:"center", 
        marginTop:20
    },
    bottom:{
        position:"absolute",
        flex:1,
        height:"96%",
        width:"100%",
        justifyContent:"flex-end",
        alignItems:"center"
    },
    bottomView:{
        width: 289,
        paddingVertical: 16,
        paddingHorizontal:40,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 32,
        backgroundColor: "#FFF",
        flexDirection:"row"
    },
    bottomText:{
        color: "#A6A6A6",
        fontFamily: "Nunito",
        fontSize: 10,
        fontWeight: "500"
    },
    categoryView:{
        paddingVertical: 8,
        paddingHorizontal:16,
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        borderWidth: 1,
        },
    categoryText:{
            fontFamily: "Nunito",
            fontSize: 12,
            fontWeight: "600"
        },
        modalView:{
            backgroundColor:"rgba(0, 0, 0, 0.25)",
            flex:1,
            justifyContent:"space-between"
        },
        popUp:{
            width: "100%",
            height: 315,
            borderTopLeftRadius: 14,
            borderTopRightRadius:14,
            backgroundColor: "#FFF",
            paddingHorizontal:15,
            paddingVertical:25,
            justifyContent:"space-between"
        },
        resetButton:{
            paddingVertical: 8,
            paddingHorizontal:16,
            justifyContent: "center",
            flexDirection:"row",
            alignItems: "center",
            borderRadius: 16,
            borderWidth: 1,
            borderColor: "#041E2F"
        },
        resetText:{
            color: "#041E2F",
            fontFamily: "Nunito",
            fontSize: 12,
            fontWeight: "600"
        },
        popTop:{
            alignItems:"center", 
            flexDirection:"row",
            justifyContent:"space-between"
        },
        filterText:{
            color: "#041E2F",
            fontFamily: "Nunito",
            fontSize: 22,
            fontWeight: "700"
        },
        sortText:{
            color: "#041E2F",
            fontFamily: "Nunito",
            fontSize: 14,
            fontWeight: "600"
        },
        popBottom:{
            width: "100%",
            height: 48,
            borderRadius: 24,
            borderWidth: 1,
            borderColor:"#FFB3B6",
            alignItems:"center",
            justifyContent:"center"
        },
        saveText:{
            color: "#FFF",
            fontFamily: "Nunito",
            fontSize: 16,
            fontWeight: "800"
        }
});
export default SeeAllScreen;