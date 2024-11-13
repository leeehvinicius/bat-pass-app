import React, { useState } from 'react';
import { View, Button ,Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../services/passwordServices';

import * as Clipboard from 'expo-clipboard';


export function BatButton() {
    const [pass,setPass] = useState('');

    function handleGenerateButton(){
        let generateToken = generatePass();
        setPass(generateToken);

    }

    function hadleCopyButton(){
        Clipboard.setStringAsync(pass)

    }

  return (
    < >
        {/* <Button 
        onPress={()=>console.log('ola')}
        title='Click Aqui'
        accessibilityLabel='Click em mim'
        color="#831584"></Button> */}
        <BatTextInput pass={pass}></BatTextInput>

        <Pressable style={styles.button} onPress={handleGenerateButton}>
        <Text style={styles.text}>GENERATE</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={hadleCopyButton}>
        <Text style={styles.text}>🦖 COPY</Text>
        </Pressable>
    </>
  );
}