import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity, FlatList, ImageBackground,} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { data1, data2, category} from "../components/data";
import { Noti, Search, Headlines, Category, News } from "../components/components";
import api from "../hooks/fetchHook"

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: HomeScreenProps)=>{
    const {news, headline, categoryType, fetchUser, fetchHeadline, categoryFetch} = api();
    useEffect(()=>{
        fetchUser("general");
        fetchHeadline();
    },[])
    const dateConverter = (date)=>{
        var day = new Date("2016-01-04 10:34:23");
        console.log(day.getFullYear())
    }
    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}
            
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps='handled'
            >
            <View style={styles.top}>
                <Search style={{width:"80%"}}/>
                <TouchableOpacity onPress={()=>navigation.navigate("Update")}>
                    <Noti/>
                </TouchableOpacity>
                
            </View>
            <View style={styles.latest}>
                <Text style={styles.latestText}>Latest News</Text>
                <TouchableOpacity style={{flexDirection:"row", alignItems:"center"}} onPress={()=>navigation.navigate("SeeAll")}>
                    <Text style={styles.seeAll}>See All</Text>
                    <Image style={{width: 9.854, height: 12, marginLeft:10}} source={require("../../assets/arrowRight.png")} resizeMode="center"/>
                </TouchableOpacity>
            </View>
            <View style={{marginVertical:20}}>
                <Headlines data={headline} handleNavigation={(data) => {
        navigation.navigate('Detail',{data:data})}}/>
            </View>
            <View>
                <Category category={category} style={{paddingHorizontal:20}}/>
            </View>
            <View style={styles.news}>
                <News data = {news} handleNavigation={(data) => {
        navigation.navigate('Detail',{data:data});
      }}/>
            </View>
            
        </ScrollView>
        <View style={styles.bottom}>
                <View style={styles.bottomView}>
                    <View style={{alignItems:"center"}}>
                        <Image style={{width: 24, height: 24, marginBottom:3}} source={require("../../assets/homeRed.png")} resizeMode="center"/>
                        <Text style={[styles.bottomText, {color:"#2E0505"}]}>Home</Text>
                    </View>
                    <TouchableOpacity style={{alignItems:"center"}} onPress={()=>dateConverter(news[0].publishedAt)}>
                        <Image style={{width: 24, height: 24, marginBottom:3}} source={require("../../assets/favorite.png")} resizeMode="center"/>
                        <Text style={styles.bottomText}>Favorite</Text>
                    </TouchableOpacity>
                    <View style={{alignItems:"center"}}>
                        <Image style={{width: 24, height: 24, marginBottom:3}} source={require("../../assets/profile.png")} resizeMode="center"/>
                        <Text style={styles.bottomText}>Profile</Text>
                    </View>
                </View>
                
        </View>
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
    latest:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginHorizontal:20,
        marginTop:10
    },
    latestText:{
        color: "#000",
        fontFamily: "New York Small",
        fontSize: 18,
        fontWeight: "700",
    },
    seeAll:{
        color: "#0080FF",
        fontFamily: "Nunito",
        fontSize: 12,
        fontWeight: "600",
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
    }
});
export default HomeScreen;