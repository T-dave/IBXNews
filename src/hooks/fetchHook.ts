import React, {useState} from "react";
import type { RootState } from "../Redux/store";
import { useSelector, useDispatch } from 'react-redux'
import { addData } from "../Redux/slice/news";
import { addHeadline } from "../Redux/slice/headline";
import axios from 'axios';

export default function api(){
    const headline = useSelector((state: RootState) => state.headline.value)
    const news = useSelector((state: RootState) => state.news.value)
    const baseUrl = 'https://newsapi.org/v2/';
    const key = "0a751045d42f427e99b09c4531ab665f"
    const [categoryType, setCategory] = useState("general");
    const [categorySelect, setSelect] = useState(0);
    const categoryChange =(num:number)=>{
        setSelect(num)
    }
    const categoryFetch = async(category:string)=>{
        await setCategory(category);
        fetchUser(category);
        console.log("Hii")
    }
    const fetchUser = async (category:string) => {
        const configurationObject = {
        method: 'get',
        url: `${baseUrl}top-headlines?category=${category}&apiKey=${key}`,
        };
        const response = await axios(configurationObject);
        dispatch(addData(response.data.articles))
    };
    const fetchHeadline = async () => {
        const configurationObject = {
        method: 'get',
        url: `${baseUrl}top-headlines?country=us&apiKey=${key}`,
        };
        const response = await axios(configurationObject);
        dispatch(addHeadline(response.data.articles))
    };
    const dispatch = useDispatch()

    return {headline, news, categoryType, fetchUser, fetchHeadline, categoryFetch, categorySelect, categoryChange}
}
