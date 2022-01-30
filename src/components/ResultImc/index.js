import React from 'react'
import { Text, TextInput, View, TouchableOpacity, Share } from 'react-native' 
import style from './style';

import Toast from '../ToastNotification';

export default function ResultImc(props) {
    const onShare = async () => {
        if (props.resultImc == null){
            Toast("Não é possivel compartilhar esse resultado"); 
            return
        }
        try {
          const result = await Share.share({
            message:
              'OneBitHealth | O teste de IMC resultado: ' + props.resultImc,
          });
    if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
}
    return(
        <View >
        

            <View style={style.resultImc}>
                
                <Text style={style.information}>{props.messageResultImc}</Text>
            
                <Text style={style.numberImc}>{props.resultImc}</Text>
                {props.resultImc && (
                    <TouchableOpacity onPress={onShare} style={style.share}>
                        <Text style={style.textShare}>compartilhar!</Text>
                    </TouchableOpacity> 
                )}
            </View>
           
           
            
        </View>
    );  
}