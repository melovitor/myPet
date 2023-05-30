import { Button } from "@components/Button"
import { Container, Text } from "./styles"
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'



export function Home(){
    const navigation = useNavigation()


    return(
        <Container>
            <Text>Home</Text>
        </Container>
    )
}