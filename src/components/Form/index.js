import React, { useState } from 'react'
import { Text, TextInput, View , TouchableOpacity, Vibration, Pressable, Keyboard, FlatList} from 'react-native' 
import style from './style';

import Toast from '../ToastNotification';
import ResultImc from '../ResultImc';

export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState(null);
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([]);

    const oneMS = 1000;

    function verifyError() {
        if (imc === null){
            setErrorMessage('Campo obrigatório*');
        } 
    }

    function imcCalculator() {
        let heightFormat = height.replace(",", ".");
        let weightFormat = weight.replace(",", ".");
        let imcTotal = (weightFormat/(heightFormat*heightFormat)).toFixed(2)
        setImcList((arr) => [...arr, {id:new Date().getTime(), imc:imcTotal}])
        setImc(imcTotal);
    }
    function validation() {
        Keyboard.dismiss()
        if(weight!=null && height!=null){
            imcCalculator();
            setMessageImc('Seu imc é igual a:');
            setTextButton('Calcular novamente');
            setHeight(null);
            setWeight(null);
            setErrorMessage(null);
        
        }else {
        setImc(null);
        setTextButton('Calcular');
        setMessageImc(null);
        Toast("Insira peso e altura");
        Vibration.vibrate(oneMS);
        verifyError();
        }
    }

    const itemImc = ({ item }) => {
        return(
            <Text style={style.resultImcItemFinal}>
                <Text style={style.resultImcItem}>{"Resultado imc: "}</Text>
                {item.imc}
            </Text>   
        );
    }
        
    

    return(
        <View  style={style.formContext}>
        {imc === null ? 
             <Pressable onPress={Keyboard.dismiss} style={style.form}>
                <Text style={style.formLabel}>Altura</Text>
                <TextInput style={style.input} onChangeText={setHeight} value={height} placeholder='Ex.: 1.75' keyboardType='numeric'/>
                <Text style={style.errorMessage}>{errorMessage}</Text>
                <Text style={style.formLabel}>Peso</Text>
                <TextInput style={style.input} onChangeText={setWeight} value={weight}  placeholder='Ex.: 80.62' keyboardType='numeric'/>
                <Text style={style.errorMessage}>{errorMessage}</Text>
                <TouchableOpacity
                style={style.button}
                onPress={() => validation()}>
                    <Text style={style.fontButton}>{textButton}</Text>
                </TouchableOpacity>

                {/* <Button title={textButton} onPress={() => validation()}/> */}
            </Pressable>
            : 
            <View style={style.resultImcResponse}>
            
                <ResultImc resultImc={imc} messageResultImc={messageImc}/>
                <TouchableOpacity
                    style={style.button}
                    onPress={() => validation()}>
                        <Text style={style.fontButton}>{textButton}</Text>
                </TouchableOpacity>
                <View
                style={style.listFull}
                >
                <FlatList
                    
                    data={imcList.reverse()}
                    renderItem={itemImc}
                    keyExtractor={item => item.id}
                />
                </View>
                

            </View>
        }
        </View>
    );
}