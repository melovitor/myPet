import {useState, useRef } from 'react'
import { Alert, ScrollView, TextInput } from "react-native";
import { Container, Text } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { InitialHeader } from "@components/InitialHeader";
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';
import * as Icon from 'phosphor-react-native'


export function SignIn(){
    const navigation = useNavigation()
    const passwordRef = useRef<TextInput | null>(null);


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(Boolean)

    
    function hendleSignUp(){
        navigation.navigate("signUp")
    }

    function hendleSignIn(){
        if(!email || !password){
           return Alert.alert('Entrar', 'Informe e-mail e senha.')
        }
        setIsLoading(true)
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {setIsLoading(false)})
        .catch((error) => {
            if(error.code ===  'auth/user-not-found' || error.code === 'auth/wrong-password'){
                return Alert.alert('Entrar', 'E-mail ou senha inválida.')
            }
            if(error.code === 'auth/invalid-email'){
                return Alert.alert('Entrar', 'E-mail inválido.')
            }
            if(error.code === 'auth/network-request-failed'){
                return Alert.alert('Entrar', 'Não foi possivel conectar ao servidor, verifique sua internet.')
            }if(error.code === 'auth/network-request-failed'){
                return Alert.alert('Entrar', 'Não foi possivel conectar ao servidor, verifique sua internet e tente novamente.')
            }
            console.log(error)
            return Alert.alert('Entrar', 'Não foi possivel acessar.')
        })        
    }


    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <Container>
                <InitialHeader title="Bem vindo de volta!"  subTitle="Faça login para continuar."/>
                <Input 
                    placeholder="E-mail" 
                    onChangeText={setEmail} 
                    keyboardType='email-address' 
                    autoCapitalize='none'
                    returnKeyType="next"
                    onSubmitEditing={() => {passwordRef.current ? passwordRef.current.focus(): {}}}
                    
                />
                <Input 
                    placeholder="Senha" 
                    secureTextEntry 
                    onChangeText={setPassword} 
                    onSubmitEditing={hendleSignIn}
                    autoCapitalize='none'
                    inputRef={passwordRef}
                />
                <Button title="Entrar" type="PRIMARY" style={{marginTop: 16}} onPress={hendleSignIn} loading={isLoading}/>
                <Text>Ainda não tem acesso?</Text>
                <Button title="Criar conta" type="SECONDARY" onPress={hendleSignUp}/>
            </Container>
        </ScrollView>
        
    )
}