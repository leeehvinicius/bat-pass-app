import React from "react";
import { StatusBar } from 'expo-status-bar';
import {Text ,View} from "react-native";
import styles from './Style';
import { Menu } from "../../components/Menu/Menu";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";



export default function Home(){
    return(
        <View style={styles.appContainer}>
            {/* <Menu/> */}
            <View style={styles.logoContainer}>
            <BatLogo></BatLogo>
            </View>

            <View style={styles.inputContainer}>
                
                <BatButton/>
            </View>
        
         <StatusBar style="light" />
        </View>
    );
}
