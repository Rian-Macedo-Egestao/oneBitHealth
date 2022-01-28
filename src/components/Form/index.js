import React, { useState } from 'react'
import { Text, TextInput, View, Button, TouchableOpacity} from 'react-native' 
import style from './style';

import ResultImc from '../ResultImc';

export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState('Preencha o peso e altuda');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');

    function imcCalculator() {
        return setImc((weight/(height*height)).toFixed(2))
    }
    function validation() {
        if(weight!=null && height!=null){
            imcCalculator()
            setMessageImc('Seu imc é igual a:');
            setTextButton('Calcular novamente');
            setHeight(null);
            setWeight(null);
            return
        }
        setImc(null);
        setTextButton('Calcular');
        setMessageImc('Valor invalido!');
        return
    }

    return(
        <View style={style.formContext}>
             <View style={style.form}>
                <Text style={style.formLabel}>Altura</Text>
                <TextInput style={style.input} onChangeText={setHeight} value={height} placeholder='Ex.: 1.75' keyboardType='numeric'/>
            
                <Text style={style.formLabel}>Peso</Text>
                <TextInput style={style.input} onChangeText={setWeight} value={weight}  placeholder='Ex.: 80.62' keyboardType='numeric'/>

                <TouchableOpacity
                onPress={() => validation()}>
                    <Text>{textButton}</Text>
                </TouchableOpacity>

                {/* <Button title={textButton} onPress={() => validation()}/> */}
            </View>
            <ResultImc resultImc={imc} messageResultImc={messageImc}/>
        </View>
    );
}