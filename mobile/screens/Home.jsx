import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemUI from "./ItemUI";

const Home = () => {
    const [itemList, setItemList] = useState([]);
    useEffect(() => {
        const fetchItems = async () => {
            const res = await axios.get("http://192.168.0.102:5000/api/items");
            setItemList(res.data);
        };
        fetchItems();
    }, []);
 
   return (
       <SafeAreaView style={styles.homeContainer}>
           <View style={styles.mainContainer}>
               <FlatList
                   data={itemList}
                   key={(item) => item.id}
                   renderItem={({ item }) => (
                       <ItemUI
                           title={item.title}
                           price={item.price}
                           id={item.id}
                           description={item.description}
                       />
                   )}
               />
           </View>
           <View style={styles.mainContainer}>
           </View>
       </SafeAreaView>
   );
}

export default Home;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerContainer: {
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
    },
    mainContainer: {
        flex: 1,
        padding: 20,
    },
 });
 