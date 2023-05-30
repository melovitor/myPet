import { Container, Text } from "./styles"
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import { CardSettings } from "@components/CardSettings"
import * as Icon from "phosphor-react-native";
import { Alert } from "react-native"



export function Settings(){
    const navigation = useNavigation()
    function hendleChangePassword(){
        navigation.navigate("changePassword")
    }

    function hendleSignOut(){
        Alert.alert('Sair', 'Deseja sair do aplicativo?' ,[
            {
              text: 'Não',
              onPress: () => null,
            },
            {
                text: 'Sair', 
                onPress: () => auth().signOut(),
                style: 'destructive',
            },
          ]);        
    }


    return(
        <Container>
            <Text>Configurações</Text>
            <CardSettings 
                title="Senha" 
                subTitle="Altere sua senha" 
                icon={<Icon.Lock weight="light"/>}
                onPress={hendleChangePassword}/>
            <CardSettings 
                title="Sair" 
                subTitle="Sair do aplicativo" 
                icon={<Icon.SignOut  weight="light"/>}
                onPress={hendleSignOut}/>
        </Container>
    )
}