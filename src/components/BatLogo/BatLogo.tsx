import React from 'react';
import { View ,Text,Image} from 'react-native';

import { styles } from './BatLogoStyle';

import btLogo from '../../../assets/bat-logo.png'

export function BatLogo() {
  return (
    <View >
        <Text style={styles.title}>
            BAT PASS GENERATOR
        </Text>
        <Image source={btLogo} style={styles.imagens}
        />

        
    </View>
  );
}