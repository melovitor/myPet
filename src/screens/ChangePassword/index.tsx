import {useState} from 'react'
import { Alert, ScrollView } from "react-native";
import { Container, Text } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { InitialHeader } from "@components/InitialHeader";
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';


export function ChangePassword(){
    const navigation = useNavigation()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    

    function hendleChangePassword(){
        if(password.length < 6){
            return Alert.alert('Trocar senha', 'A senha deve conter mais de 6 caracteres.')
        }

        if(password !== confirmPassword){
            return Alert.alert('Trocar senha', 'As senhas devem ser iguais.')
        }

        auth().currentUser?.updatePassword(password)
        navigation.goBack()     
    }


    return(
        <Container>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 124}}>
                <InitialHeader title="Deseja trocar sua senha?"  subTitle="Troque sua senha para continuar."/>
                <Input placeholder="Nova senha" secureTextEntry onChangeText={setPassword}/>
                <Input placeholder="Confirme nova senha" secureTextEntry onChangeText={setConfirmPassword}/>
                <Button title="Trocar senha" type="PRIMARY" style={{marginTop: 16}} onPress={hendleChangePassword}/>
            </ScrollView>
        </Container>
        
    )
}