import { Button } from "@components/Button"
import { Container, Text } from "./styles"
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import { CardSettings } from "@components/CardSettings"



export function Settings(){
    const navigation = useNavigation()
    function hendleChangePassword(){
        navigation.navigate("changePassword")
    }


    return(
        <Container>
            <Text>Configurações</Text>
            <CardSettings title="Senha" subTitle="Altere sua senha" onPress={hendleChangePassword}/>
        </Container>
    )
}