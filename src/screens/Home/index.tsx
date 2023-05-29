import { Button } from "@components/Button"
import { Container, Text } from "./styles"
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'



export function Home(){
    const navigation = useNavigation()

    function hendleSignOut(){
        auth()
        .signOut()
    }

    return(
        <Container>
            <Text>Home</Text>
            <Button title="Sair" onPress={hendleSignOut}/>
        </Container>
    )
}