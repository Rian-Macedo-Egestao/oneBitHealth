import React from 'react'
import { Text, TextInput, View, Button } from 'react-native' 

export default function ResultImc(props) {
    return(
        <View>
            <Text>{props.messageResultImc}</Text>
            <Text>{props.resultImc}</Text>
        </View>
    );
}