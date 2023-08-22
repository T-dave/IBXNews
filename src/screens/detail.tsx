import React, {useState} from "react";
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity, FlatList, ImageBackground, Modal, Platform} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import LinearGradient from "react-native-linear-gradient";
import { RootStackParamList } from "../../App";
import { Love } from "../components/components";





type SeeAllScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen = ({navigation, route}: SeeAllScreenProps)=>{
    return(
        <View style={{flex:1}}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}
            style={styles.container} showsVerticalScrollIndicator={false}>
                <ImageBackground source={{ uri: route.params.data.urlToImage ? route.params.data.urlToImage: "https://picsum.photos/id/237/200/300" }} style={styles.image1}>
                    <TouchableOpacity style={styles.backView} onPress={()=>navigation.goBack()}>
                        <Image style={{width: 32, height: 32,}} source={require("../../assets/back.png")} resizeMode="center"/>
                    </TouchableOpacity>
                    <View style={styles.blurView}>
                        <ImageBackground style={styles.blur} source={{ uri: route.params.data.urlToImage ? route.params.data.urlToImage: "https://picsum.photos/id/237/200/300" }} blurRadius={200} imageStyle={{borderRadius:16}}>
                            <Text style={[styles.text1, {marginBottom:10}]}>{route.params.data.publishedAt.substring(0,10)}</Text>
                            <Text style={[styles.text2, {marginBottom:6}]}>{route.params.data.title}</Text>
                            <Text style={styles.text3}>Published by {route.params.data.author}</Text>
                        </ImageBackground>
                    </View>
                    
                </ImageBackground>
                <View style={styles.main}>
                    <Text style={styles.text4}>
                        {route.params.data.content}
                    </Text>
                </View>
            </ScrollView>
            <View style={styles.popUp}>
                <TouchableOpacity >
                    <Love />
                </TouchableOpacity>
            </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFF",
        flex:1
    },
    backView:{
        marginTop:20,
        marginLeft:20
    },
    image1:{
        width:"100%",
        height:400,
        justifyContent:"space-between"
    },
    blurView:{
        alignItems:"center", 
        zIndex:3,
        borderRadius: 16,
    },
    main:{
        backgroundColor:"#FFF",
        borderTopLeftRadius:24,
        borderTopRightRadius:24,
        bottom:20,
        flex:1,
        padding:20,
        paddingTop:40
    },
    blur:{
        width: 311,
        paddingVertical: 16,
        paddingHorizontal: 24,
        justifyContent:"center"
    },
    text1:{
        color: "#2E0505",
        fontFamily: "Nunito",
        fontSize: 12,
        fontWeight: "600"
    },
    text2:{
        color: "#2E0505",
        fontFamily: "New York Small",
        fontSize: 16,
        fontWeight: "700"
    },
    text3:{
        color: "#2E0505",
        fontFamily: "Nunito",
        fontSize: 10,
        fontWeight: "800"
    },
    text4:{
        color: "#2E0505",
        fontFamily: "Nunito",
        fontSize: 14,
        fontWeight: "600",
    },
    popUp:{
        position:"absolute",
        flex:1,
        height:"100%",
        alignItems:"flex-end",
        justifyContent:"flex-end",
        width:"100%",
        padding:25
    }

  
});
export default DetailScreen;