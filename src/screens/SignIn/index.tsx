import {useState} from 'react'
import { Alert, ScrollView } from "react-native";
import { Container, Text } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { InitialHeader } from "@components/InitialHeader";
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';


export function SignIn(){
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    function hendleSignUp(){
        navigation.navigate("signUp")
    }

    function hendleSignIn(){
        if(!email || !password){
           return Alert.alert('Entrar', 'Informe e-mail e senha.')
        }
        auth()
        .signInWithEmailAndPassword(email, password)
        .catch((error) => {
            if(error.code ===  'auth/user-not-found' || error.code === 'auth/wrong-password'){
                return Alert.alert('Entrar', 'E-mail ou senha inválida.')
            }
            if(error.code === 'auth/invalid-email'){
                return Alert.alert('Entrar', 'E-mail inválido.')
            }
            console.log(error)
            return Alert.alert('Entrar', 'Não foi possivel acessar.')
        })        
    }


    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <Container>
                <InitialHeader title="Bem vindo de volta!"  subTitle="Faça login para continuar."/>
                <Input placeholder="E-mail" onChangeText={setEmail}/>
                <Input placeholder="Senha" secureTextEntry onChangeText={setPassword}/>
                <Button title="Entrar" type="PRIMARY" style={{marginTop: 16}} onPress={hendleSignIn}/>
                <Text>Ainda não tem acesso?</Text>
                <Button title="Criar conta" type="SECONDARY" onPress={hendleSignUp}/>
            </Container>
        </ScrollView>
        
    )
}