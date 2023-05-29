import {useState} from 'react'
import { Alert, ScrollView } from "react-native";
import { Container, Text } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { InitialHeader } from "@components/InitialHeader";
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';



export function SignUp(){
    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    function hendleSignIn(){
        navigation.navigate("signIn")
    }
    function hendleCreateNewUser(){
        if(!name || !email || !password || !confirmPassword){
            return Alert.alert('Criar conta','Todos os campos devem ser preenchidos.')
            
        }

        if(password.length < 6){
            return Alert.alert('Trocar senha', 'A senha deve conter mais de 6 caracteres.')
        }

        if(password !== confirmPassword){
            return Alert.alert('Criar conta', 'As senhas devem ser iguais')
            
        }

        auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                Alert.alert('Criar conta', 'Este endereço de E-mail já está cadastrado.')
            }

            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }

            console.error(error);
        });

    }


    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <Container>
                <InitialHeader title="Criar nova conta"  subTitle="Registre-se agora e ofereça o melhor para seu pet com praticidade e comodidade!"/>
                <Input placeholder="Nome" onChangeText={setName}/>
                <Input placeholder="E-mail" onChangeText={setEmail}/>
                <Input placeholder="Senha" secureTextEntry onChangeText={setPassword}/>
                <Input placeholder="Confirmar senha" secureTextEntry onChangeText={setConfirmPassword}/>
                <Button title="Criar e acessar" type="PRIMARY" style={{marginTop: 16}} onPress={hendleCreateNewUser}/>
                <Text>Já possui uma conta?</Text>
                <Button title="Ir para login" type="SECONDARY" onPress={hendleSignIn} />
            </Container>
        </ScrollView>
        
    )
}