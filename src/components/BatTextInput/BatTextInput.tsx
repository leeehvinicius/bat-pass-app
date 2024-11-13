import React from 'react';
import { styles } from './BatTextInputStyle';
import { TextInput } from 'react-native';

interface BatTextInputProps{
    pass:string
}

export function BatTextInput(props : BatTextInputProps) {
  return (
    
            <TextInput placeholder='pass' style={styles.inputer} value={props.pass}>

            </TextInput>
           
  );
}