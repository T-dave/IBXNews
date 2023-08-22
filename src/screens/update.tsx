import React, {useState} from "react";
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity, FlatList, ImageBackground, Modal, Platform, ActivityIndicator} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { Update } from "../components/components";
import { data1, data2, category} from "../components/data";
import api from "../hooks/fetchHook"

type SeeAllScreenProps = NativeStackScreenProps<RootStackParamList, 'Update'>;

const UpdateScreen = ({navigation}: SeeAllScreenProps)=>{
    const {headline} = api();
    return(
        <View style={{flex:1}}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}
            style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.top}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Image style={{width: 32, height: 32, left:10}} source={require("../../assets/back2.png")} resizeMode="center"/>
                    </TouchableOpacity>
                    <Text style={styles.topText}>Hot Updates</Text>
                    <View/>
                </View>
                <View>
                {
                    headline ? 
                    <Update data = {headline} handleNavigation={(data) => {
                        navigation.navigate('Detail',{data:data})}}/>
                        :
                    <ActivityIndicator size="large" color="#FF3A44" />
                }
                    
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
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        marginBottom:10
    },
    topText:{
        fontFamily: "SF Pro Text",
        fontSize: 17,
        fontWeight: "600",
        color:"#FF3A44"
    }
    

  
});
export default UpdateScreen;