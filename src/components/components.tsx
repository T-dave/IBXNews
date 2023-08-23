import React, {useEffect, useState} from "react";
import { Image, StyleSheet, Text, TextInput, View, StyleProp, ViewStyle, FlatList, ImageBackground, TouchableOpacity, Modal} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import useModalHook from "../hooks/modalHook";
import api from "../hooks/fetchHook"

type StyleCompProp = {
    style?: StyleProp<ViewStyle>;
}
type NewsProp = {
    data: {
        author:string,
        title:string,
        date:string,
        description:string,
        detail:string,
        urlToImage:string,
        publishedAt:string,
        image:string
    }[],
    handleNavigation:any
}
type CategoryProp = {
    category: string[],
    style?: StyleProp<ViewStyle>;
}

export const Search = ({style}:StyleCompProp)=>{
    return(
        <View style={[styles.search, style]}>
             <TextInput placeholder="Dogecoin to the moon" placeholderTextColor={"#818181"} style={styles.searchInput}/>
             <Image style={styles.searchImage} source={require("../../assets/search.png")} resizeMode="center"/>
        </View>
    )
}
export const Noti = ()=>{
    return(
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={["#FF3A44", "#FF8086"]} style={styles.noti}>
             <Image style={{width:13, height:16}} source={require("../../assets/bell.png")} resizeMode="center"/>
      </LinearGradient>
      
    )
}
export const Love = ()=>{
    return(
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={["#FF3A44", "#FF8086"]} style={styles.noti}>
             <Image style={{width:40, height:40}} source={require("../../assets/love2.png")} resizeMode="center"/>
      </LinearGradient>
      
    )
}
export const Headlines = ({data, handleNavigation}:NewsProp)=>{
    return(
        <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingHorizontal:20}}
        renderItem={({item}) => {
            return(
                <TouchableOpacity onPress={()=>handleNavigation(item)}>
                    <ImageBackground source={ { uri: item.urlToImage ? item.urlToImage : Image.resolveAssetSource(require('../../assets/grey.png')).uri } } style={styles.image1} imageStyle={{ borderRadius: 8}}>
                        <LinearGradient colors={["rgba(98, 98, 98, 0.35)", "#000"]}  style={styles.imageView}>
                            <View></View>
                            <View>
                                <Text style={styles.authorText}>by {item.author}</Text>
                                <Text style={styles.headlineText}>{item.title}</Text>
                            </View>
                            <Text style={styles.followupText}>{item.description}</Text>
                        </LinearGradient>    
                    </ImageBackground>
                </TouchableOpacity>
        ) }
    }
    />
    )
   
}
export const ModalView = ()=>{
    const [ismodal, setModal] = useState(true);
    const [filter, setFilter] = useState(0);
    const {modalVisible, handleModal} = useModalHook();
    return(
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          handleModal();
        }}>
        <View style={styles.modalView}>
            <TouchableOpacity onPress={()=>handleModal()} style={{flex:1}}></TouchableOpacity>
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
    )
   
}

export const News = ({data, handleNavigation}:NewsProp)=>{
    return(
        <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal:20}}
        scrollEnabled={false}
        renderItem={({item}) => {
            return(
                <TouchableOpacity onPress={()=>handleNavigation(item)}>
                    <ImageBackground source={{ uri: item.urlToImage ? item.urlToImage : Image.resolveAssetSource(require('../../assets/grey.png')).uri }} style={styles.image2} imageStyle={{ borderRadius: 8}} >
                        <LinearGradient colors={["rgba(98, 98, 98, 0.35)", "#000"]} style={[styles.imageView, {margin: 0}]}>
                            <View>
                                <Text style={styles.headlineText}>{item.title}</Text>
                            </View>
                            <View style={styles.imageBottom}>
                                <Text style={styles.authorText}>by {item.author}</Text>
                                <Text style={styles.followupText}>{item.publishedAt.substring(0,10)}</Text>
                            </View>
                            
                        </LinearGradient>
                    </ImageBackground>
                </TouchableOpacity>
        ) }
    }
    />
    )
   
}

export const Category = ({category, style}:CategoryProp)=>{
    
    const {categoryType, fetchUser, categoryFetch, categorySelect, categoryChange} = api();
    return(
        <FlatList
        data={category}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={style}
        renderItem={({item}) => {
            let position = category.indexOf(item);
            return(
                <TouchableOpacity onPress={()=>{
                    categoryChange(position)
                    categoryFetch(item)
                    }} style={{marginRight:20}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={categorySelect === position ?["#FF3A44", "#FF8086"]:["#FFF", "#FFFF"]} style={[styles.categoryView, {borderColor:categorySelect === position ?"#FF8086":"#F0F1FA"}]}>
                        <Text style={[styles.categoryText, {color:categorySelect === position ? "#FFF":"#2E0505"}]}>
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Text>    
                    </LinearGradient>
                </TouchableOpacity>
                
        ) }
    }
    />
    )
   
}

export const Update = ({data, handleNavigation}:NewsProp)=>{
    return(
        <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        renderItem={({item}) => {
            return(
                <View style={{marginHorizontal:20, marginBottom:15}}>
                    <TouchableOpacity onPress={()=>handleNavigation(item)}>
                        <Image style={styles.image3} source={ { uri: item.urlToImage ? item.urlToImage : Image.resolveAssetSource(require('../../assets/grey.png')).uri }} resizeMode="center"/>
                    </TouchableOpacity>    
                    <View style={styles.updateTexts}>
                        <Text style={styles.update1}>{item.publishedAt.substring(0,10)}</Text>
                        <Text style={styles.update2}>{item.title}</Text>
                            <Text style={styles.update3} ellipsizeMode="tail" numberOfLines={4}>{item.detail}</Text>
                            <TouchableOpacity style={{width:"100%", alignItems:"flex-end"}} onPress={()=>handleNavigation(item)}>
                                <Text style={[styles.update3, {color:"#0080FF"}]}>Read More</Text>
                            </TouchableOpacity>
                        <Text style={[styles.update2, {fontWeight:"700"}]}>Published by {item.author}</Text>
                    </View>
                </View>
                    
        ) }
    }
    />
    )
   
}

const styles = StyleSheet.create({
    search:{
    paddingVertical: 4,
    paddingHorizontal: 16,
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#F0F1FA",
    backgroundColor: "#FFF",
    flexDirection:"row",
    },
    searchImage:{
        width:12,
        height:12
    },
    searchInput:{
        flex:1
    },
    noti:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"red",
        borderRadius:50,
        paddingVertical:8,
        paddingHorizontal:10
    },
    image1:{
        width: 345,
        height:240,
        marginRight:10,
    },
    image2:{
        height: 128,
        width: "100%",
        marginBottom:10
    },
    image3:{
        height: 128,
        width:"100%",
        borderRadius:8
    },
    imageView:{
        paddingVertical:8,
        paddingHorizontal:8,
        flex:1,
        justifyContent:"space-between",
        borderRadius:8
    },
    authorText:{
        color: "#FFF",
        fontFamily: "Nunito",
        fontSize: 10,
        fontWeight: "800"
    },
    headlineText:{
        color: "#FFF",
        fontFamily: "New York Small",
        fontSize: 16,
        fontWeight: "700"
    },
    followupText:{
        color: "#FFF",
        fontFamily: "Nunito",
        fontSize: 10,
        fontWeight: "400"
    },
    categoryView:{
    paddingVertical: 8,
    paddingHorizontal:16,
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
    imageBottom:{
        flexDirection:"row", 
        alignItems:"center", 
        justifyContent:"space-between"
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
    },
    update1:{
        color: "#2E0505",
        fontFamily: "Nunito",
        fontSize: 12,
        fontWeight: "300",
        marginBottom:5
    },
    update2:{
        color: "#121212",
        fontFamily: "New York Small",
        fontSize: 14,
        fontWeight: "600",
        marginBottom:10
    },
    update3:{
        color: "#000",
        fontFamily: "Nunito",
        fontSize: 14,
        fontWeight: "400",
        marginBottom:5
    },
    updateTexts:{
        marginVertical:10,
    }
});