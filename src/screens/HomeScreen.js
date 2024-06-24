import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import advice from './../content/advice';

const image = { uri: "https://images.unsplash.com/photo-1553173385-682bfe958d31" };

const HomeScreen = function () {
    const [content, setContent] = useState("Welcome to Kids Advice! For some funny advice, just press the button below.");

    const getRandomContent = function () {
        if (advice.length > 0) {
            const randomNum = Math.floor(Math.random() * advice.length);
            setContent(advice[randomNum]);
            advice.splice(randomNum, 1);
        }
        else {
            setContent("That's all our advice for now! Come back again for more!")
        }
    }

    return <View style={{ flex: 1 }}>
        <ImageBackground source={image} style={{ flex: 1 }}>
            <Text style={styles.content}>{content}</Text>
            <Text style={styles.hint}>Tap anywhere for advice</Text>
            <TouchableOpacity onPress={getRandomContent} style={styles.button}/>
        </ImageBackground>
    </View>
};

const styles = StyleSheet.create({
    content: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        top: 50,
        alignSelf: "center",
        textAlign: "center",
        marginHorizontal: 10,
    },
    button: {
        height: 700,
        width: 400
    },
    hint: {
        alignSelf: "center",
        color: "white",
        fontSize: 16,
        top: 250,
        fontStyle: "italic",
        opacity: 0.7,
        position: "absolute"
    }
});

export default HomeScreen;

//<TouchableOpacity onPress = {getRandomContent} style = {styles.button}/>